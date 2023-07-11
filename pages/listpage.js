import AppHeader from "../components/AppHeader";
import CoffeeList from "../components/CoffeeList";
import Footer from "../components/Footer";
import useSWR from "swr";
import styled from "styled-components";
import CreateButton2 from "../components/CreateButton";

export default function ListPage() {
  const { data: coffees, isLoading } = useSWR("/api/coffees", {
    fallbackData: [],
  });

  if (isLoading) {
    return <div>is loading</div>;
  } else {
    return (
      <main>
        <AppHeader>DIE BOHNEN</AppHeader>

        {coffees.length === 0 ? (
          <>
            <StyledContainer>
              <StyledSection>
                <StyledCategory>
                  Keine Bohne, füge eine hinzu <CreateButton2 />{" "}
                </StyledCategory>
              </StyledSection>
            </StyledContainer>
          </>
        ) : (
          <CoffeeList coffees={coffees} />
        )}

        <Footer />
      </main>
    );
  }
}

const StyledContainer = styled.div`
  margin-top: 150px;
  justify-content: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  opacity: 0.5;
  border-radius: 8px;
  padding: 1px;
  margin: 1px;
  margin-bottom: 1px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  width: 60%;
  font-weight: bold;
  font-size: 80%;
  color: #000000;
`;
