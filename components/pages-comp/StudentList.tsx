import { useState } from 'react';

interface Student {
  name: string;
  class: string;
}

interface ClassGroup {
  class: string;
  students: Student[];
}

const groupedByClass: ClassGroup[] = [
  {
    class: 'Class 6',
    students: [
      { name: 'AKANKSHA', class: '6' },
      { name: 'ANANYA', class: '6' },
      { name: 'BHAGYASHREE', class: '6' },
      { name: 'CHANDANA T', class: '6' },
      { name: 'CHIRANTHANA M', class: '6' },
      { name: 'GANAVI M', class: '6' },
      { name: 'HARIKA', class: '6' },
      { name: 'JHANAVI D', class: '6' },
      { name: 'MADHUSHREE S M', class: '6' },
      { name: 'MADHUSHREE K M', class: '6' },
      { name: 'MANYASHREE M', class: '6' },
      { name: 'MEGHA SHREE K R', class: '6' },
      { name: 'MEGHANA S', class: '6' },
      { name: 'MOULYA K', class: '6' },
      { name: 'NEHA A', class: '6' },
      { name: 'NIHARIKA', class: '6' },
      { name: 'NISHA M', class: '6' },
      { name: 'PADMASHREE', class: '6' },
      { name: 'REVATHI N', class: '6' },
      { name: 'SANNIDHI R', class: '6' },
      { name: 'SINCHANA', class: '6' },
      { name: 'SWATHI S', class: '6' },
      { name: 'VAISHNAVI T A', class: '6' },
      { name: 'SINCHANA BAJANTRI', class: '6' },
      { name: 'KUSHI P', class: '6' },
      { name: 'SAKSHI SL', class: '6' },
      { name: 'LOCHANA S M', class: '6' },
      { name: 'KEERTHANA R', class: '6' },
      { name: 'INDU Y M', class: '6' },
      { name: 'NANDINI R', class: '6' },
      { name: 'SHANVI', class: '6' },
      { name: 'HARSHITHA', class: '6' },
    ],
  },
  {
    class: 'Class 7',
    students: [
      { name: 'AKANKSHA P', class: '7' },
      { name: 'APEKSHITHA N', class: '7' },
      { name: 'BHANUPRIYA', class: '7' },
      { name: 'BINDUSHREE M', class: '7' },
      { name: 'CHARULATHA M', class: '7' },
      { name: 'CHERITHA M', class: '7' },
      { name: 'DEEKSHITHA', class: '7' },
      { name: 'DEEKSHITHA M', class: '7' },
      { name: 'DHRUTHI M', class: '7' },
      { name: 'GANAVI S', class: '7' },
      { name: 'GEETHANJALI R', class: '7' },
      { name: 'GUNAVATHI B I', class: '7' },
      { name: 'HAMSA N', class: '7' },
      { name: 'HARIPRIYA V', class: '7' },
      { name: 'HARSHITHA L', class: '7' },
      { name: 'JAHNAVI D', class: '7' },
      { name: 'JEEVITHA G C', class: '7' },
      { name: 'KHUSHI ASHOK RATHOD', class: '7' },
      { name: 'KRUTHIKA G', class: '7' },
      { name: 'KUSHI M', class: '7' },
      { name: 'LAKSHMI', class: '7' },
      { name: 'LEKHANA Y', class: '7' },
      { name: 'MANASA C V', class: '7' },
      { name: 'MANASA M', class: '7' },
      { name: 'MEGHANA M', class: '7' },
      { name: 'MOUNA M', class: '7' },
      { name: 'NAVYA M', class: '7' },
      { name: 'NIREEKSHA C', class: '7' },
      { name: 'NITHYASHREE R M', class: '7' },
      { name: 'PALLAVI M', class: '7' },
      { name: 'PALLAVI N', class: '7' },
      { name: 'PRANAVI ANGADI', class: '7' },
      { name: 'PRIYA K', class: '7' },
      { name: 'RACHANA G', class: '7' },
      { name: 'SAKSHI S', class: '7' },
      { name: 'SANGEETHA D', class: '7' },
      { name: 'SHALINI', class: '7' },
      { name: 'TEJA S', class: '7' },
      { name: 'THANUSHREE', class: '7' },
      { name: 'USHA R', class: '7' },
      { name: 'VARSHINI M', class: '7' },
      { name: 'VARSHINI R', class: '7' },
    ],
  },
  {
    class: 'Class 8',
    students: [
      { name: 'AKSHAYA K R', class: '8' },
      { name: 'ANKITHA B M', class: '8' },
      { name: 'ARPITHA D N', class: '8' },
      { name: 'BHANU PRIYA', class: '8' },
      { name: 'BHAVYA A', class: '8' },
      { name: 'CHANDANA', class: '8' },
      { name: 'CHANDANA M', class: '8' },
      { name: 'CHITHRA K R', class: '8' },
      { name: 'DHANALAKSHMI', class: '8' },
      { name: 'DHANU SHREE K', class: '8' },
      { name: 'DRAKSHAYANI S', class: '8' },
      { name: 'HUSHMITHA H S', class: '8' },
      { name: 'KAVANA M', class: '8' },
      { name: 'KEERTHANA S M', class: '8' },
      { name: 'LEKHANA S', class: '8' },
      { name: 'LIKHITHA B', class: '8' },
      { name: 'MAHALAKSHMI M R', class: '8' },
      { name: 'MANYASHREE N', class: '8' },
      { name: 'MOKSHITHA D', class: '8' },
      { name: 'MONISHA D', class: '8' },
      { name: 'MOUNA M', class: '8' },
      { name: 'NAMITHA R', class: '8' },
      { name: 'NANDINI', class: '8' },
      { name: 'NICHITHA A', class: '8' },
      { name: 'NIHARIKA H M', class: '8' },
      { name: 'NITHISHREE B R', class: '8' },
      { name: 'NIVEDITA ASHOK RATHOD', class: '8' },
      { name: 'PANCHAMI H C', class: '8' },
      { name: 'PRARTHANA S', class: '8' },
      { name: 'PRAVALIKA S', class: '8' },
      { name: 'RADHIKA R D', class: '8' },
      { name: 'RAKSHA C M', class: '8' },
      { name: 'RUCHITHA R', class: '8' },
      { name: 'SAHANA N', class: '8' },
      { name: 'SARIKA C H', class: '8' },
      { name: 'SHRAVANTHI H P', class: '8' },
      { name: 'SHREYA BV', class: '8' },
      { name: 'SHUBHASHREE M', class: '8' },
      { name: 'SINDHUSHREE', class: '8' },
      { name: 'TEJASHWINI G', class: '8' },
      { name: 'THANUSHREE S', class: '8' },
      { name: 'THRISHA N B', class: '8' },
      { name: 'YASHMITHA N', class: '8' },
      { name: 'YUKTHA M', class: '8' },
    ],
  },
  {
    class: 'Class 9',
    students: [
      { name: 'AMULYA M', class: '9' },
      { name: 'ANUSHKA P', class: '9' },
      { name: 'BHAGYASHREE', class: '9' },
      { name: 'BHANUPRIYA G R', class: '9' },
      { name: 'BHANUSHREE CM', class: '9' },
      { name: 'BHARGAVI M', class: '9' },
      { name: 'BHAVYASHREE H S', class: '9' },
      { name: 'BINDHUSHREE', class: '9' },
      { name: 'CHARVI', class: '9' },
      { name: 'DIVYA SHREE N', class: '9' },
      { name: 'GAGANA B L', class: '9' },
      { name: 'GANAVI AN', class: '9' },
      { name: 'GOWTHAMI N', class: '9' },
      { name: 'HANI N', class: '9' },
      { name: 'HARSHITH N', class: '9' },
      { name: 'HARSHITHA D', class: '9' },
      { name: 'HARSHITHA J', class: '9' },
      { name: 'HARSHITHA V', class: '9' },
      { name: 'HONYA SHREE', class: '9' },
      { name: 'INCHARA A M', class: '9' },
      { name: 'KEERTHANA NM', class: '9' },
      { name: 'KEERTHI T S', class: '9' },
      { name: 'KRUTHIKA R V', class: '9' },
      { name: 'LAKSHMI R', class: '9' },
      { name: 'LOCHANA N', class: '9' },
      { name: 'MEENA KUMARI NM', class: '9' },
      { name: 'NAVYASHREE NS', class: '9' },
      { name: 'NEHASHREE M', class: '9' },
      { name: 'POORVI E', class: '9' },
      { name: 'RAKSHITHA', class: '9' },
      { name: 'SHALINI S D', class: '9' },
      { name: 'SINCHANA M', class: '9' },
      { name: 'SNEHA HN', class: '9' },
      { name: 'SOWJANYA P M', class: '9' },
      { name: 'SOWMYA A', class: '9' },
      { name: 'SOWMYA R', class: '9' },
      { name: 'SPOORTHI SK', class: '9' },
      { name: 'SUSHMITHA R', class: '9' },
      { name: 'T GANAVI', class: '9' },
      { name: 'TARUNYA S', class: '9' },
      { name: 'TEJASHWINI M', class: '9' },
      { name: 'THANU SRI', class: '9' },
      { name: 'VINUTHA B C', class: '9' },
    ],
  },
  {
    class: 'Class 10',
    students: [
      { name: 'AKSHAYA', class: '10' },
      { name: 'AMULYA M', class: '10' },
      { name: 'ANKITHA B C', class: '10' },
      { name: 'ANKITHA M', class: '10' },
      { name: 'ASHWINI R', class: '10' },
      { name: 'BAVANA A', class: '10' },
      { name: 'BHOOMIKA', class: '10' },
      { name: 'BINDHU SHREE M', class: '10' },
      { name: 'CHAITHANYA M', class: '10' },
      { name: 'DEEKSHA B', class: '10' },
      { name: 'DEEKSHITHA D N', class: '10' },
      { name: 'DEEPIKA J', class: '10' },
      { name: 'DHANUSHREE E M', class: '10' },
      { name: 'DHYANIKA V', class: '10' },
      { name: 'DIVYASHREE S', class: '10' },
      { name: 'HARSHASHREE C', class: '10' },
      { name: 'HARSHITHA LM', class: '10' },
      { name: 'HEMA', class: '10' },
      { name: 'KAVYA R', class: '10' },
      { name: 'KUSUMA K U', class: '10' },
      { name: 'MANASA K', class: '10' },
      { name: 'NANDITHA V', class: '10' },
      { name: 'NAVYASHREE R', class: '10' },
      { name: 'NITHYASHREE C L', class: '10' },
      { name: 'PRATHIKSHA', class: '10' },
      { name: 'PRERANA H N', class: '10' },
      { name: 'PRUTHVI ANGADI', class: '10' },
      { name: 'PULI SHREE VARSHITHA', class: '10' },
      { name: 'S MEGHANA', class: '10' },
      { name: 'SHILPA', class: '10' },
      { name: 'SHUBHA SHREE V', class: '10' },
      { name: 'SHUBHASHREE K', class: '10' },
      { name: 'SOUJANYA K', class: '10' },
      { name: 'SPOORTHI M', class: '10' },
      { name: 'SWAPNASHREE N R', class: '10' },
      { name: 'SWATHI M', class: '10' },
      { name: 'THANYA R S', class: '10' },
      { name: 'UJWALA CM', class: '10' },
      { name: 'VAISHNAVI C M', class: '10' },
      { name: 'VARSHA M', class: '10' },
      { name: 'VARSHITHA K', class: '10' },
      { name: 'VEDHASHREE P M', class: '10' },
      { name: 'VIDHYASHREE B C', class: '10' },
      { name: 'VISMITHA S', class: '10' },
    ],
  },
];

export default function StudentList() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (cls: string) => {
    setExpanded((prev) => (prev === cls ? null : cls));
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
          Students Studying (Grouped by Class)
        </h2>

        {groupedByClass.map((group) => (
          <div key={group.class} className="mb-6 border rounded-lg shadow bg-white">
            <button
              onClick={() => toggleExpand(group.class)}
              className="w-full text-left px-6 py-4 bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold text-lg flex justify-between"
            >
              {group.class}
              <span>{expanded === group.class ? '−' : '+'}</span>
            </button>

            {expanded === group.class && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">S.NO</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Student Name</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Class</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {group.students.map((s, i) => (
                      <tr key={i}>
                        <td className="px-4 py-2">{i + 1}</td>
                        <td className="px-4 py-2">{s.name}</td>
                        <td className="px-4 py-2">{s.class}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
