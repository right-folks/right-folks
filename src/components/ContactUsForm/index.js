import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { Field, Form, Formik } from "formik"
import { TextField } from "formik-material-ui"
import Grid from "@material-ui/core/Grid"
import InputAdornment from "@material-ui/core/InputAdornment"
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded"
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded"
import NotesRoundedIcon from "@material-ui/icons/NotesRounded"
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded"
import SendRoundedIcon from "@material-ui/icons/SendRounded"
import validate from "./validate"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1
  },
  submit: {
    marginLeft: "auto"
  }
}))

const getInput = (id, placeholder, adornment, multiline = false) => {
  return (
    <Field
      fullWidth
      variant="outlined"
      margin="normal"
      id={id}
      placeholder={placeholder}
      name={id}
      multiline={multiline}
      component={TextField}
      InputProps={{
        startAdornment:
          <InputAdornment position="start">
            {
              React.createElement(adornment, {
                color: "secondary"
              })
            }
          </InputAdornment>
      }}
    />
  )
}

const inputs = [
  {
    id: "fullName",
    placeholder: "Full Name",
    adornment: PersonOutlineRoundedIcon,
    multiline: false
  }, {
    id: "email",
    placeholder: "Email",
    adornment: MailOutlineRoundedIcon,
    multiline: false
  }, {
    id: "subject",
    placeholder: "Subject",
    adornment: ChatBubbleOutlineRoundedIcon,
    multiline: false
  }, {
    id: "message",
    placeholder: "Message",
    adornment: NotesRoundedIcon,
    multiline: false
  }
]

const ContactUsForm = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify={"center"}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={8}>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validate={validate}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false)
              alert(JSON.stringify(values, null, 2))
            }, 500)
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form className={classes.root}>
              {
                inputs.map(input => {
                  const {
                    id,
                    placeholder,
                    adornment,
                    multiline
                  } = input

                  return <Grid
                    key={input.id}
                    item
                    xs={12}
                  >
                    {
                      getInput(id, placeholder, adornment, multiline)
                    }
                  </Grid>
                })
              }
              <Grid
                item
                xs={12}
              >
                <Button
                  endIcon={<SendRoundedIcon fontSize={"small"}/>}
                  fullWidth
                  className={classes.submit}
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Send
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  )
}

export default ContactUsForm
