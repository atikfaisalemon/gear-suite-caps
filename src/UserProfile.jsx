import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

const UserProfile = () => {
  const [person, setPerson] = useState({});
  const getPerson = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/user/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);

        setPerson(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getPerson();
  }, []);

  if (!person) {
    return null;
  }
  console.log("pro", person);
  return (
    <li
      key={person.id}
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
    >
      <div className="flex flex-1 flex-col p-8">
        <img className="mx-auto size-32 shrink-0 rounded-full" />
        <h3 className="mt-6 text-sm font-medium text-gray-900">
          {person.name}
        </h3>
        <dl className="mt-1 flex grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500">{person.name}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {person.role}
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a
              href={`mailto:${person.email}`}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <EnvelopeIcon
                aria-hidden="true"
                className="size-5 text-gray-400"
              />
              Email
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              href={`tel:${person.telephone}`}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <PhoneIcon aria-hidden="true" className="size-5 text-gray-400" />
              Call
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserProfile;
