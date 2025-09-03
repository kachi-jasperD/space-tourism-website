type TitleProps = {
  number: string;
  title: string;
};
const Title = ({ number, title }: TitleProps) => {
  return (
    <>
      <p className="font-barlow-condensed text-white text-center mt-10 md:text-left md:ml-5 lg:ml-50 lg:text-3xl lg:tracking-widest ">
        <span className="mr-2 text-[#53555f]">{number}</span> {title}
      </p>
    </>
  );
};
export default Title;
