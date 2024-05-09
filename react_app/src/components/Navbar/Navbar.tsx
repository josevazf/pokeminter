import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#eeeeee',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xl')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('xl')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar({ pokemonFilter }: { pokemonFilter: (value: string) => void }) {
  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ justifyContent: 'space-between'}}>
        <a href="https://github.com/josevazf/pokeminter"><img src="/assets/pokeminter_ns_logo.png" alt="github repo" height="70em"></img></a>
            <div>
              <Search onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                pokemonFilter(e.target.value)
              }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Catch pokémon…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </div>
          <ConnectButton label="Connect Pokédex" accountStatus="avatar" chainStatus="icon" />
        </Toolbar>
      </AppBar>
    </>
  );
}
