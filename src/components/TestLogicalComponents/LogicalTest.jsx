import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '../common/AppBar';

const ButtonStartTest = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 2em 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: palevioletred;
  }
`;

const LogicalTest = () => {
  const [first, setFirst] = useState(false);
  const [word, setWord] = useState('');
  const [secondWord, setSecondWord] = useState('');

  const newWord = () => {
    const banco = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.%&$#"!/()=?¡¨*[]';
    let aleatoria = '';
    for (let i = 0; i < 20; i += 1) {
      aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    setWord(aleatoria);
    setFirst(true);
  };

  const char = (ascii) => ascii > 64 && ascii < 91;

  const investWord = () => {
    let aleatoria = [];
    let letters = [];
    let posiciones = [];

    for (let i = 0; i < word.length; i += 1) {
      const ascii = word[i].toUpperCase().charCodeAt(0);
      if (char(ascii) === false) {
        aleatoria[i] = word[i];
        posiciones.push(i);
      } else {
        letters[i] = word[i];
      }
    }
    letters = letters.reverse().filter(Boolean);
    for (let index = 0; index <= posiciones.length; index += 1) {
      letters.splice(posiciones[index], 0, aleatoria[posiciones[index]]);
    }

    letters = letters.filter((dato) => dato !== undefined);

    setSecondWord(letters);
  };

  return (
    <Box>
      <ResponsiveAppBar />
      <Container sx={{
        marginTop: '10em', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Typography variant="h3" component="h3" sx={{ fontWeight: 'light' }}>
            Test de lógica :D
          </Typography>
        </Box>

        <Box sx={{
          marginTop: 4, display: 'flex', flexDirection: 'row', justifyContent: 'center',
        }}
        >
          <ButtonStartTest onClick={newWord}>¡Genera tu palabra!</ButtonStartTest>

        </Box>
        {first && (
          <Box sx={{
            marginTop: '3em', display: 'flex', flexDirection: 'row', justifyContent: 'center',
          }}
          >
            <Box>
              <Typography variant="h3" component="h3" sx={{ fontWeight: 'light' }}>
                {word}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <ButtonStartTest onClick={investWord}>Voltea tu palabra!</ButtonStartTest>
              </Box>
            </Box>
          </Box>
        )}
        {secondWord && (
          <Box sx={{
            marginTop: '3em', display: 'flex', flexDirection: 'row', justifyContent: 'center',
          }}
          >
            <Box>
              <Typography variant="h3" component="h3" sx={{ fontWeight: 'light' }}>
                {secondWord}
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </Box>

  );
};

export default LogicalTest;
