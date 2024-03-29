import type { GetStaticProps, NextPage } from "next";
import { client } from "../graphql/apollo-client";
import { GoaliesDocument, GoaliesQuery } from "../generated/graphql";
import { ACTIVE_SEASON } from "../config/active-season";
import { StyledTable } from "../components/styled-table";
import { TeamLogo } from "../components";

interface GoaliesProps {
  goalies: GoaliesQuery["goalies"];
}

const Goalies: NextPage<GoaliesProps> = ({ goalies }) => {
  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>name</th>
            <th>gp</th>
            <th>so</th>
            <th>gaa</th>
            <th>sv%</th>
          </tr>
        </thead>
        <tbody>
          {goalies?.map((goalie) => (
            <tr key={goalie.playerId}>
              <td>
                <TeamLogo teamCode={goalie.teamCode} />
                {` ${goalie.firstName.toLowerCase()} ${goalie.lastName.toLowerCase()}`}
              </td>
              <td>{goalie.gamesPlayedOnIce}</td>
              <td>{goalie.shutOuts}</td>
              <td>{goalie.goalsAgainstAverage.toFixed(2)}</td>
              <td>{`${goalie.savesPercentage.toFixed(2)}`}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const goaliesQuery = await client.query<GoaliesQuery>({
    query: GoaliesDocument,
    variables: {
      input: {
        year: ACTIVE_SEASON,
      },
    },
  });

  return {
    revalidate: 60,
    props: {
      goalies: goaliesQuery.data.goalies,
    },
  };
};

export default Goalies;
