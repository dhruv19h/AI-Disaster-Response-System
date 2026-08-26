import type { EmergencyReport } from "../components/reports/EmergencyReports";

export const emergencyReports: EmergencyReport[] = [
  {
    id: 1,
    type: "Flood",
    location: "Bengaluru",
    severity: "Critical",
    affected: 18500,
    status: "Active",
    description:
      "Severe flooding reported across low-lying areas. Multiple roads are inaccessible and emergency evacuation may be required.",
    time: "5 min ago",
  },

  {
    id: 2,
    type: "Earthquake",
    location: "Mysuru",
    severity: "High",
    affected: 9200,
    status: "Responding",
    description:
      "Earthquake activity reported in multiple areas. Emergency response teams have been dispatched.",
    time: "18 min ago",
  },

  {
    id: 3,
    type: "Fire",
    location: "Hubballi",
    severity: "Medium",
    affected: 3400,
    status: "Active",
    description:
      "Large fire incident reported near a residential area. Fire and rescue teams are responding.",
    time: "32 min ago",
  },

  {
    id: 4,
    type: "Landslide",
    location: "Chikkamagaluru",
    severity: "High",
    affected: 2100,
    status: "Responding",
    description:
      "Heavy rainfall has triggered a landslide blocking a major road.",
    time: "1 hour ago",
  },

  {
    id: 5,
    type: "Fire",
    location: "Mangaluru",
    severity: "Medium",
    affected: 850,
    status: "Resolved",
    description:
      "Fire incident contained by emergency response teams.",
    time: "2 hours ago",
  },
];