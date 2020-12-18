import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {Button, TextField} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Navigation from "./Navigation";
import {Link} from "react-router-dom";
import styles from './Header.module.css'

interface HeaderProps {
  openDrawer: (value: boolean) => void
}

const top100Films = [
  {title: 'The Shawshank Redemption', year: 1994},
  {title: 'The Godfather', year: 1972},
  {title: 'The Godfather: Part II', year: 1974},
  {title: 'The Dark Knight', year: 2008},
  {title: '12 Angry Men', year: 1957},
  {title: "Schindler's List", year: 1993},
  {title: 'Pulp Fiction', year: 1994},
  {title: 'The Lord of the Rings: The Return of the King', year: 2003},
  {title: 'The Good, the Bad and the Ugly', year: 1966},
  {title: 'Fight Club', year: 1999}
]

export const Header = ({openDrawer}: HeaderProps) => {
  return (
    <AppBar color={"default"} position="static">
      <Toolbar variant={"regular"}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => openDrawer(true)}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h5">
          OCS Eng UI
        </Typography>
        <Button component={Link} to={'/Apps'}>Home</Button>
        <div className={styles.searchBox}>
          <Autocomplete
            className={styles.searchAutocomplete}
            freeSolo
            disableClearable
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search within TMT"
                margin="normal"
                variant="outlined"
                InputProps={{...params.InputProps, type: 'search'}}
              />
            )}
          />
        </div>
      </Toolbar>
      <Navigation/>
    </AppBar>
  )
}
