import React, { useEffect, useState } from "react";
import "./Tutors.css";
import TutorsList from "../TutorsList";
import TutorView from "../TutorView";

export default function Tutors({
  setNewTutor,
  data,
  userIsAdmin,
  items,
  setItems,
  setModuleSelected,
  moduleSelected,
}) {
  return (
    <section className="tutors">
      <TutorsList
        userIsAdmin={userIsAdmin}
        setModuleSelected={setModuleSelected}
        setNewTutor={setNewTutor}
        data={data}
      />
      <TutorView
        items={items}
        setItems={setItems}
        userIsAdmin={userIsAdmin}
        moduleSelected={moduleSelected}
        data={data}
      />
    </section>
  );
}
