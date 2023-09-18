import INotification from "../Interfaces/INotification"

function Notification(props: {
  notification_data: INotification
}) {
  const { notification_data } = props

  return (
    <div>
      <p>{notification_data.sender}</p>
      <p>{notification_data.date}</p>
      <p>{notification_data.message}</p>
    </div>
  )
}

export default Notification