import React, { useState } from 'react';
// Mui
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import TopicIcon from "@mui/icons-material/Topic";
import { Country } from "country-state-city";
import Autocomplete from "@mui/material/Autocomplete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
// Component
import Sidebar from '../components/job_posting/Sidebar';
import FeedPart from '../components/job_posting/FeedPart';
import Footer from '../components/job_posting/Footer';
import Navbar from '../components/job_posting/Navbar';
import ListFeed from '../components/job_posting/ListFeed';

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement,
  },
  ref: React.Ref
) {
  return <Slide direction="top" ref={ref} {...props} />;
});

export default function JobPosting() {
  const [showFeed, setShowFeed] = useState(true); // state to toggle between components

  const countries = Country.getAllCountries().map((country) => ({
    label: country.name,
    id: `${country.name}`,
  }));
  
  const [timelineType, setTimelineType] = React.useState("");
  const [joblist, setJoblist] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [minprice, setMinPrice] = React.useState(0);
  const [bonus, setBonus] = React.useState(0);
  const [maxprice, setMaxPrice] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [location, setLocation] = React.useState(countries[0]);
  const [files, setFiles] = React.useState([]);
  const [editorState, setEditorState] = React.useState(
    MUIEditorState.createEmpty()
  );
  
  const timelineTypeChange = (event) => {
    setTimelineType(event.target.value);
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const onChange = (newState) => {
    setEditorState(newState);
  };
  
  const onloadfile = (e) => {
    console.log(e.target.files);
    setFiles([e.target.files[0]]);
  };
  
  const renderFilePreview = (file) => {
    if (file.type.startsWith("image")) {
      return (
        <img
          width={200}
          height={100}
          alt={file.name}
          src={URL.createObjectURL(file)}
        />
      );
    } else {
    }
  };
  
  const onsubmit = () => {
    const row = {
      title,
      description: editorState.getCurrentContent().getPlainText("\u0001"),
      price: {
        minprice,
        maxprice,
      },
      timeline: {
        type: timelineType,
        time,
      },
      img: "FILE    ",
      bonus,
      location: location.label,
    };
    // console.log(row)
    console.log(joblist);
    let jobs = joblist;
    jobs.push(row);
    setJoblist(jobs);
    handleClose();
  };

  return (
    <div className="flex flex-col bg-white blur-none">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="lg"
        onClose={handleClose}
        sx={{ padding: "1rem" }}
        aria-describedby="postjob-dialog"
      >
        <DialogTitle sx={{ textAlign: "center" }}>{"POST JOB"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="postjob-dialog" sx={{ padding: "1rem" }}>
            <Grid container className="w-100" gap={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-title">
                  Title
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-title"
                  startAdornment={
                    <InputAdornment position="start">
                      <TopicIcon />
                    </InputAdornment>
                  }
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{ padding: "0.4rem" }}
                />
              </FormControl>
              <Grid item md="12">
                <InputLabel htmlFor="outlined-adornment-description">
                  Description{" "}
                </InputLabel>
                <MUIEditor editorState={editorState} onChange={onChange} />
              </Grid>
              <Grid item md="12" container>
                <Grid>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-min">
                      Min Price
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-min"
                      type="number"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Min Price"
                      value={minprice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      sx={{ padding: "0.4rem" }}
                    />
                  </FormControl>
                </Grid>
                &nbsp;~ &nbsp;
                <Grid>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-max">
                      Max Price
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-max"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Max Price"
                      type="number"
                      value={maxprice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      sx={{ padding: "0.4rem" }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item md="12" container>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-bonus">
                    Bonus
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-min"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Bonus"
                    type="number"
                    sx={{ padding: "0.4rem" }}
                    value={bonus}
                    onChange={(e) => setBonus(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item md="12" container>
                <FormControl fullWidth>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={countries}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Location" />
                    )}
                    value={location}
                    onChange={(event, newValue) => {
                      setLocation(newValue);
                    }}
                    // inputValue={inputValue}
                    // onInputChange={(event, newInputValue) => {
                    //   setInputValue(newInputValue);
                    // }}
                  />
                </FormControl>
              </Grid>
              <Grid item md="12" container>
                <FormControl>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload file
                    <VisuallyHiddenInput
                      type="file"
                      accept="image/*"
                      onChange={(e) => onloadfile(e)}
                    />
                  </Button>
                  <Grid sx={{ marginTop: "0.5rem" }}>
                    {files.map((item, i) => (
                      <Stack key={i}>{renderFilePreview(item)}</Stack>
                    ))}
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item md="12" container>
                <Grid item md="12" container>
                  <FormLabel>TimeLine</FormLabel>
                </Grid>
                <Grid item md="6" sx={{ paddingRight: "0.5rem" }}>
                  <FormControl fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-min"
                      label=""
                      type="number"
                      sx={{ padding: "0.4rem" }}
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item md="6">
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={timelineType}
                    onChange={timelineTypeChange}
                    fullWidth
                    label=""
                    sx={{ width: "100px", padding: "0.29rem" }}
                  >
                    <MenuItem
                      style={{ display: "block", marginRight: "0.3rem" }}
                      value={"day"}
                    >
                      Days
                    </MenuItem>
                    <MenuItem
                      style={{ display: "block", marginRight: "0.3rem" }}
                      value={"month"}
                    >
                      Months
                    </MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Disagree
          </Button>
          <Button variant="contained" onClick={() => onsubmit()}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <div className="flex overflow-hidden relative flex-col w-full min-h-full max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="./img/background.jpg"
          className="object-cover absolute inset-0 size-full opacity-70"
        />
        <div className="relative w-full">
          <div className="w-full">
            <div className="model w-full grid grid-cols-3 md:grid-cols-3">
              <Sidebar />
              <div className="md:col-span-2 flex flex-col bg-opacity-75 bg-white">
                <Navbar setShowFeed={setShowFeed} handleClickOpen={handleClickOpen} />{' '}
                {/* Pass the state setter to Navbar */}
                {showFeed ? <FeedPart /> : <ListFeed />}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
