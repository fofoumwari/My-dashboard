import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
   {
    name: "Grace Mbabazi",
    email: "g.mbabazi@huza.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2 hours ago"
  },
  {
    name: "Eric Niyonsaba",
    email: "eric.niyonsaba@huza.com",
    role: "Manager",
    status: "Active",
    lastLogin: "5 hours ago"
  },
  {
    name: "Jean Mugisha",
    email: "j.mugisha@huza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "1 day ago"
  },
  {
    name: "Diane Uwase",
    email: "diane.uwase@huza.com",
    role: "Staff",
    status: "inactive",
    lastLogin: "3 days ago"
  },
  {
    name: "Alex Uwimana",
    email: "a.uwimana@huza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "8 hours ago"
  },
  {
    name: "Chantal Ingabire",
    email: "c.ingabire@huza.com",
    role: "Manager",
    status: "Active",
    lastLogin: "30 min ago"
  },
  {
    name: "Patrick Habimana",
    email: "p.habimana@huza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "2 days ago"
  },
  {
    name: "Aline Ishimwe",
    email: "a.ishimwe@huza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "4 hours ago"
  },
  {
    name: "Samuel Nkurunziza",
    email: "s.nkurunziza@huza.com",
    role: "Admin",
    status: "Active",
    lastLogin: "1 hour ago"
  },
  {
    name: "Claudine Mukamana",
    email: "c.mukamana@huza.com",
    role: "Staff",
    status: "inactive",
    lastLogin: "1 week ago"
  }
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};