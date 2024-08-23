import Cta from "./CTA";

const Comfort = () => {
  return (
    <div className="w-full py-16 px-28 flex flex-col justify-between items-center gap-8 text-secondary bg-secondaryLight">
      <h2 className="text-center">
        {" "}
        Fatigués des pannes informatiques ? Nous sommes là pour vous.{" "}
      </h2>
      <p>
        {" "}
        Prenez rendez-vous dès maintenant, et voyons comment nous pouvons vous
        aider
      </p>
      <Cta />
    </div>
  );
};

export default Comfort;
