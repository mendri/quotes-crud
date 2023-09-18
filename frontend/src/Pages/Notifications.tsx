import { useEffect, useState } from "react"
import HeaderQuotesCRUD from "../Components/HeaderQuotesCRUD"
import Notification from "../Components/Notification"
import mockedNotifications from "../Mock/notifications.json"
import INotification from "../Interfaces/INotification"

function Notifications() {
  const [notifications, setNotifications] = useState<Array<INotification>>([])

  async function fetchQuotes() {
    localStorage.setItem("notifications", JSON.stringify(mockedNotifications))
    const response = JSON.parse(localStorage.getItem("notifications") as string)
    setNotifications(response)
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <main>
      <HeaderQuotesCRUD />
      <section className="absolute w-4/5 right-0 min-h-100vh bg-gradient-to-r from-emerald-600 to-teal-600 flex flex-col items-center">
        <p className="text-6xl font-extrabold text-white p-10">Notifications</p>
        <div className="bg-slate-100 w-4/5 flex flex-col items-center justify-center p-2 rounded-md shadow-xl">
          {
            notifications.map((e, i) => {
              return (
                <Notification notification_data={e} key={i} />
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Notifications