import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/get";
import { Route, Switch, Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//import Container from "@material-ui/core/Container";

import { ALL_PEOPLE, PERSON_BY_ID } from "../Queries/PeopleQueries";
import MyDropzone from "./MyDropzone";

const HomepageLayout = ({ children }) => {
  return (
    <Grid container style={{ border: "1px solid red" }}>
      {children}
    </Grid>
  );
};

const PeopleTable = () => {
  const { loading, error, data } = useQuery(ALL_PEOPLE);
  const all_people = get(data, "allPeople.edges", []);

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <h3>All Users</h3>
          <ul>
            {all_people.map(({ node }) => (
              <Link to={`/home/${node.id}`} key={node.id}>
                <li>
                  {node.id}, {node.firstName}, {node.lastName}
                </li>
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export const SinglePeople = () => {
  let { id } = useParams();
  console.log(id);
  const { loading, error, data } = useQuery(PERSON_BY_ID, {
    variables: { id: parseInt(id) }
  });
  console.log(data);
  const { nodeId, firstName, lastName } = get(data, "personById", {});

  return (
    <div>
      <h1>Single User Page</h1>
      {!loading && (
        <div>
          <p>id: {nodeId}</p>
          <p>FirstName: {firstName}</p>
          <p>LastName: {lastName}</p>
        </div>
      )}
    </div>
  );
};

export const Homepage = () => {
  console.log("homepage");
  return (
    <>
      <HomepageLayout>
        <Grid container>
          <Grid item xs={6}>
            <PeopleTable />
            <MyDropzone />
          </Grid>
          <Grid item xs={6}>
            <Route path="/home/:id" component={SinglePeople} />
          </Grid>
        </Grid>
      </HomepageLayout>
    </>
  );
};

// ==== EXAMPLE #1 ====
// return (
// 	<>
// 		<HomepageLayout>
// 			<Grid container>
// 				<Grid item xs={6}>
// 					<PeopleTable />
// 				</Grid>
// 				<Grid item xs={6}>
// 					<Route path="/home/:id" component={SinglePeople} />
// 				</Grid>
// 			</Grid>
// 		</HomepageLayout>
// 	</>
// );
