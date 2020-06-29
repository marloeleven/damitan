import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

interface ISearchItem {
  id: number;
  name: string;
}

type ISearchList = ISearchItem[];

interface IProps {
  list?: ISearchList;
}

const useStyles = makeStyles((theme) => ({
  searchField: {
    borderColor: theme.palette.secondary.light,
  },
}));

export default ({ list = [] }: IProps) => {
  const classes = useStyles();

  return (
    <div className="flex-grow flex justify-center">
      <Autocomplete
        freeSolo
        className="max-w-xl w-full"
        options={list.map((option: any) => option.name)}
        renderInput={(params: any) => (
          <TextField
            className={classes.searchField}
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
};
