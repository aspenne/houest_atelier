import Cta from "@/app/components/CTA";

const Comfort = () => {
  return (
    <div className="w-full py-4 px-7 flex flex-col justify-between items-center gap-8 text-secondary text-center bg-secondaryLight sm:px-16 sm:py-28">
      <h2> Fatigués des pannes informatiques ? Nous sommes là pour vous. </h2>
      <p>
        {" "}
        Prenez rendez-vous dès maintenant, et voyons comment nous pouvons vous
        aider
      </p>
      <div className="flex w-full justify-center">
        <Cta />
      </div>
    </div>
  );
};

export default Comfort;
