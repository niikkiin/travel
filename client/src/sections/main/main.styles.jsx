import styled from 'styled-components';

export const Main = styled.div`
min-height: 100vh;
display: grid;
// grid-template: auto 1fr / minmax(40rem, 1fr) minmax(70rem, 1fr) minmax(40rem, 1fr);
// grid-template: auto 1fr / minmax(8%, 25%) minmax(60%, 50%) minmax(8%, 25%);
grid-template: auto 1fr / minmax(8%, 1fr) minmax(50%, 1fr) minmax(8%, 1fr);

.main-content {
  grid-column: 2/3;
  margin-top: 8rem;
  display: block;
} 
`;