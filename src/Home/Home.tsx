import Timeline from "../Timeline/Timeline";

export default function Home() {
  return (
    <>
      <h1>
        Iago Fernández Picos
      </h1>
      <h2>
        Developer / Backend Developer
      </h2>
      <div className='introduction'>
        <p>
          Hi, I'm Iago, I'm a software developer from Spain that studied in the University of A coruña.
          I also spent almost a year doing my Erasmus In the University of Maribor in Slovenia

        </p>
      </div>
      <Timeline />
      <div className='home-content'>
        <ul className="education">
          <li>Universidade da Coruña</li>
          <li>University of Maribor</li>
        </ul>
        <ul className="language-skilss">
          <li>Java</li>
          <li>Python</li>
        </ul>
      </div>
    </>
  );
}
