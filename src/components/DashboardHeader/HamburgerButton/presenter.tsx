import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import BasicDrawer from '../../BasicDrawer';

type Props = {
  isOpenDrawer?: boolean;
  onOpenDrawer?: () => void;
  onCloseDrawer?: () => void;
  btnRef?: React.MutableRefObject<HTMLButtonElement>;
};

// eslint-disable-next-line react/display-name
const HamburgerButtonPresenter: React.VFC<Props> = ({
  isOpenDrawer = false,
  onOpenDrawer = () => undefined,
  onCloseDrawer = () => undefined,
  btnRef = undefined,
}) => {
  return (
    <>
      <IconButton
        aria-label="Open menu"
        fontSize="24px"
        color={'gray.800'}
        opacity="0.4"
        variant="ghost"
        icon={<AiOutlineMenu />}
        ref={btnRef}
        onClick={onOpenDrawer}
        data-testid="humburgerbutton"
      />
      <BasicDrawer {...{ btnRef, isOpenDrawer, onOpenDrawer, onCloseDrawer }} />
    </>
  );
};
export default React.memo(HamburgerButtonPresenter);
