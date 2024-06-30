import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Grid } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

export default function Navbar({ setShowFeed, handleClickOpen }) {
  return (
    <>
      <nav className="w-full grid grid-cols-3 md:grid-cols-8 flex-col bg-gray-900 text-white p-2 flex justify-between items-center">
        <div className="flex items-center ml-auto col-span-4">
          <Grid gap={2} display={'flex'} md={9}>
            <Button
              onClick={handleClickOpen}
              variant="contained"
              startIcon={<NoteAddIcon />}
            >
              Post Job
            </Button>
            <Button
              variant="contained"
              sx={{
                '& span': {
                  padding: '0',
                  margin: '0',
                },
              }}
              startIcon={<AppsIcon />}
              onClick={() => {
                setShowFeed(true);
              }}
            ></Button>
            {/* <Button
              variant="contained"
              sx={{
                '& span': {
                  padding: '0',
                  margin: '0',
                },
              }}
              startIcon={<DensitySmallIcon />}
              onClick={() => {
                setShowFeed(false);
              }}
            ></Button> */}
          </Grid>
        </div>
        <div className="flex items-end relative ml-auto col-span-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black p-2 pl-10 pr-4 rounded w-30"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-3 text-gray-500"
          />
        </div>
      </nav>
    </>
  );
}

// Add PropTypes validation
Navbar.propTypes = {
  setShowFeed: PropTypes.func.isRequired,
};
