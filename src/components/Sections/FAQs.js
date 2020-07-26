import React from "react"
import Faq from "../FAQ"

const faqs = [
  {
    id: 1,
    question: "Why should I choose you?",
    answer: `
Right Folks uses modern programming frameworks and 
the best development practices in accordance with standard coding guidelines 
to deliver web and mobile applications. Our team has experience and 
energy to be contemporary in web and mobile application development 
to provide robust and user attractive features.
We are focusing on meeting our clients' requirements and, 
at the same time, developing user-centric and scalable solutions. 
`
  }, {
    id: 2,
    question: `What if I’m not satisfied?`,
    answer: `
  If you as our client is not satisfied during the development, 
we offer money back guarantee after the first project milestone. 
Everybody, client and developers, should get pleasure from the development process.`
  }, {
    id: 3,
    question: `How long does development normally take?`,
    answer: `
It very often lies on the project! Some simple apps can be completed in about a month.
However, we’ve had large projects that can stretch across multiple years.
Really the only way to know how long a project will take is to ask directly.
Mostly the average apps will take from two to a few months. 
We divide projects into parts - design, development, launch and maintenance.`
  },
  {
    id: 4,
    question: `How do I get started?`,
    answer: `
If you are interested in our services, contact us with your idea.
    `
  }, {
    id: 5,
    question: `How Much Does an App Cost?`,
    answer: `
The cost of an application varies depending on different factors like 
industry, requirements, set of desired features and more.
Its development relies on type of application: web or mobile, iOS or Android.
We develop feature-rich applications that suit your budget.`
  }
]

const FaqsSection = () => {
  return (
    <Faq faqs={faqs}/>
  )
}

export default FaqsSection
