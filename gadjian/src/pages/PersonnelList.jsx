import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPersonnel, setLoading } from "../store/action/actionCreator";
import PersonnalCardWrapper from "../components/PersonnalCardWrapper";
import Pagination from "../components/Pagination";

export default function PersonnelList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchPersonnel());
  }, [dispatch]);

  const personnel = useSelector((state) => state.personnelReducer.personnel);
  const loading = useSelector((state) => state.personnelReducer.loading);
  const error = useSelector((state) => state.personnelReducer.error);

  //==for pagination==
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); //each page show 4 person

  //==Get current personel==
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = personnel.slice(indexOfFirstPost, indexOfLastPost);

  //==Change page==
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="h-full ml-18 mt-3 mb-10 md:ml-64">
        <h1 className="mt-3 text-green-400 font-semibold leading-loose">
          LOADING ...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full ml-18 mt-3 mb-10 md:ml-64">
        <h1 className="mt-3 text-green-400 font-semibold leading-loose">
          ERROR ...
        </h1>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="h-full bg-gray-100 ml-18 mt-3 mb-10 md:ml-64">
        {/* WHITE BOX */}
        <h1 className="text-gray-100 w-4/5">abcde</h1>
        <div className="my-6 bg-white flex items-center justify-center">
          <h1 className="text-green-400 font-semibold text-2xl leading-loose items-center justify-center">
            PERSONNEL LIST
          </h1>
        </div>
        <PersonnalCardWrapper
          personnel={currentPosts}
          loading={loading}
          error={error}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={personnel.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
