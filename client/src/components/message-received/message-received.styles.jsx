import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { lightGreen, secondaryColor } = helpers;

export const MessageReceivedContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);

margin: 1.25rem 0;

.with-time {
  display: flex;
  flex-direction: column;

  .time-span {
    font-size: 0.8rem;
    font-style: italic;
    margin-left: 1rem;
    margin-bottom: 0.2rem;
  }
  .receive {
    display: inline-block;

    background-color: ${lightGreen};
    border: 1px solid ${secondaryColor};
    padding: 0.5rem 0.8rem;
    word-break: break-word;
    border-radius: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
}

.space {
  width: 100%;
  // min-width: 27rem;
}
`;
