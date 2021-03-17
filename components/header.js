import React from 'react';
import { Stack, Image, Element } from 'react-ui';
import { useState } from '../state';

export const HEADER_HEIGHT = 88;

export const Header = ({ isHome = false }) => {
  const { actions, dispatch } = useState();

  return (
    <Element
      as="header"
      css={{
        height: HEADER_HEIGHT,
        background: 'white',
        paddingY: 2,
        borderBottom: '1px solid',
        borderColor: 'grays.200',
        zIndex: 2,
      }}
    >
      <Stack
        as="a"
        justify="center"
        href="#"
        css={{
          opacity: 0.5,
          cursor: 'pointer',
          ':hover, :focus': !isHome && {
            opacity: 1,
            transform: 'scale(1.05)',
          },
        }}
        onClick={() => dispatch({ type: actions.DESELECT_POST })}
        onContextMenu={(event) => {
          event.preventDefault();
          dispatch({ type: actions.LOAD_NEW_POSTS });
        }}
      >
        <Image width="200px" src="/logo.png" />
      </Stack>
    </Element>
  );
};
