const TechBadge = ({ icon, name }) => {
   return (
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
         {icon}
         <span>{name}</span>
      </div>
   );
}

export default TechBadge