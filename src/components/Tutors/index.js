import React, { useEffect, useState } from "react";
import "./Tutors.css";
import TutorsList from "../TutorsList";
import TutorView from "../TutorView";

export default function Tutors({ setNewTutor, data }) {
  const [moduleSelected, setModuleSelected] = useState('')
  return (
    <section className="tutors">
      <TutorsList setModuleSelected={setModuleSelected} setNewTutor={setNewTutor} data={data} />
      <TutorView setModuleSelected={setModuleSelected} moduleSelected={moduleSelected} data={data} />
    </section>
  );
}
