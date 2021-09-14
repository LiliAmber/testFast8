import React from "react";
import moment from "moment";

export default function PersonnelCard(props) {
  //==dob formatted==
  function dateFormatted(date) {
    return moment(date).format("LL");
  }

  return (
    <div>
      <div className="max-w-xs md:flex">
        <div className="bg-white shadow-xl rounded-xl py-3">
          <div className="p-2">
            <table>
              <thead className="text-xs my-3">
                <tr className="px-2 pt-2 text-gray-500 font-semibold">
                  <td>Personnel id:</td>
                </tr>
                <tr>
                  <td className="px-1 text-green-400 font-semibold">
                    {props.item.login.uuid}
                  </td>
                </tr>
              </thead>
            </table>
          </div>

          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={props.item.picture.large}
              alt="profile"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {`${props.item.name.first} ${props.item.name.last}`}
            </h3>
            <table className="text-xs mt-3">
              <tbody>
                <tr>
                  <td className="px-2 pt-2 text-gray-500 font-semibold">
                    Telephone
                  </td>
                </tr>
                <tr>
                  <td className="px-2">{props.item.phone}</td>
                </tr>
                <tr>
                  <td className="px-2 pt-2 text-gray-500 font-semibold">
                    Birthday
                  </td>
                </tr>
                <tr>
                  <td className="px-2">{dateFormatted(props.item.dob.date)}</td>
                </tr>
                <tr>
                  <td className="px-2 pt-2 text-gray-500 font-semibold">
                    Email
                  </td>
                </tr>
                <tr>
                  <td className="px-2">{props.item.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
