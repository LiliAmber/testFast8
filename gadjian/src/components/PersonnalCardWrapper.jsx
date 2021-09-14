import React from "react";
import PersonnelCard from "../components/PersonnelCard";

const Posts = ({ personnel, loading, error }) => {
  //   if (loading) {
  //     return <h2>Loading...</h2>;
  //   }

  return (
    <div className="flex sm:">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {personnel.map((item) => {
          return <PersonnelCard key={item.login.uuid} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
