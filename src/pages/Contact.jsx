import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Notes</title>
      </Helmet>
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-[2.5rem] font-semibold">This is the contact page</h1>
      </div>
    </>
  );
};

export default Contact;
