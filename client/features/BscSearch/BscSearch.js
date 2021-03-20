import { fade, makeStyles } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import Autocomplete from '@material-ui/lab/Autocomplete'

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(40),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent'
    }
  },
  inputRoot: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important'
  },
  textField: {
    '> label': {
      transform: 'translate(14px, 12px) scale(1) !important'
    }
  }
}))

export default function BscSearch() {
  const classes = useStyles()

  return (
    <Autocomplete
      classes={classes}
      options={[]}
      renderInput={(params) => {
        console.log('params', params)

        return (
          <TextField
            {...params}
            classes={{ root: classes.textField }}
            label="Combo box"
            variant="outlined"
          />
        )
      }}
    />
  )
}
