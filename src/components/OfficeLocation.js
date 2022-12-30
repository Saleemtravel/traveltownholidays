const OfficeLocation = ({ className }) => {
  return (
    <iframe
      className={className}
      title={"OfficeLocation"}
      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15395.45928939207!2d76.383204!3d15.2751659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xddd54387670845ca!2sTravel%20Town%20Holidays!5e0!3m2!1sen!2sin!4v1670840516348!5m2!1sen!2sin'
      style={{ border: 0 }}
      allowFullScreen
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    />
  );
};
export default OfficeLocation;
