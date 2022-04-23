import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// domain.com/new-meetup

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    // console.log(enteredMeetupData);

    // since the backend is in the same project
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.replace("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetups</title>
        <meta name="description" content="Add your own meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
