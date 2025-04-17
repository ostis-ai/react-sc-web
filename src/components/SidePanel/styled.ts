import { ButtonWithIcon, ScTag, TAppearance } from 'ostis-ui-lib';
import styled, { css, keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.6;
  }
`;

export const ItemContentWrapper = styled.div<{ $isOptionsOpen: boolean; $isLoading: boolean }>`
  display: grid;
  grid-template-columns: 26px 1fr 26px;
  align-items: center;
  grid-column-gap: 10px;

  padding: 8px 3px 8px 0;

  font-size: 20px;
  line-height: 24px;
  color: #323232;

  word-break: break-word;

  border-radius: 4px;

  &:hover {
    background: #f1f1f1;

    .optionsBtn {
      opacity: 1;
    }
  }

  ${(props) =>
    props.$isOptionsOpen &&
    css`
      background: #f1f1f1;
      opacity: 1;
    `}

  &$isLoading {
    animation-name: ${rotate};
  }
`;

export const Button = styled.button`
  padding: 0;

  border: none;

  background: none;

  outline: none;

  cursor: pointer;
`;

export const StyledButtonWithIcon = styled(ButtonWithIcon)<{ options?: boolean; marker?: boolean }>`
  width: 24px;
  height: 24px;

  ${(props) =>
    props.marker &&
    css`
      &:disabled {
        cursor: unset;
      }
    `}

  ${(props) =>
    props.options &&
    css`
      border-radius: 41px;

      opacity: 0;

      &:hover {
        background: #dedede;
      }
    `}
`;

export const ChevronDownWrapper = styled.div<{ expanded: boolean }>`
  display: flex;
  justify-content: center;

  transform: rotate(0);
  transition: transform ease 0.3s;

  ${({ expanded }) =>
    expanded &&
    css`
      transform: rotate(180deg);
    `}
`;

export const OptionsBtnWrapper = styled.div`
  position: relative;
`;

export const ChildrenWrapper = styled.div`
  grid-column: 1/4;

  padding: 12px 0 0 16px;
  margin-bottom: 12px;
`;

export const StyledScTag = styled(ScTag)<{ $appearance: TAppearance }>`
  font-size: 18px;
  line-height: 22px;

  cursor: pointer;

  ${({ $appearance }) => {
    switch ($appearance) {
      case 'blue':
        return css`
          color: #2a6496;

          &:hover {
            background-color: #cbd9f1;

            color: #23527c;
          }
        `;
      case 'transparent':
        return css`
          &:hover {
            color: #323232;
          }
        `;
      default:
        return '';
    }
  }}
`;
