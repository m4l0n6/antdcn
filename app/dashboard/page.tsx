import { SectionCards } from "@/components/section-cards";
import { columns, Payment } from "@/app/dashboard/columns";
import { DataTable } from "@/components/ui/data-table";

const data: Payment[] = [
  {
    id: "1",
    name: "John Doe",
    amount: 100,
    status: "success",
    email: "user@example.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    amount: 50,
    status: "pending",
    email: "user2@example.com",
  },
{
  id: "3",
  name: "Michael Johnson",
  amount: 250,
  status: "success",
  email: "michael.j@example.com",
},
{
  id: "4",
  name: "Sarah Williams",
  amount: 175,
  status: "failed",
  email: "sarah.w@example.com",
},
{
  id: "5",
  name: "David Brown",
  amount: 320,
  status: "pending",
  email: "david.b@example.com",
},
{
  id: "6",
  name: "Emily Davis",
  amount: 95,
  status: "success",
  email: "emily.d@example.com",
},
{
  id: "7",
  name: "James Miller",
  amount: 440,
  status: "success",
  email: "james.m@example.com",
},
{
  id: "8",
  name: "Lisa Anderson",
  amount: 280,
  status: "pending",
  email: "lisa.a@example.com",
},
{
  id: "9",
  name: "Robert Taylor",
  amount: 150,
  status: "failed",
  email: "robert.t@example.com",
},
{
  id: "10",
  name: "Jennifer Thomas",
  amount: 390,
  status: "success",
  email: "jennifer.t@example.com",
},
{
  id: "11",
  name: "William Jackson",
  amount: 210,
  status: "pending",
  email: "william.j@example.com",
},
{
  id: "12",
  name: "Mary White",
  amount: 125,
  status: "success",
  email: "mary.w@example.com",
},
{
  id: "13",
  name: "Christopher Harris",
  amount: 360,
  status: "failed",
  email: "chris.h@example.com",
},
{
  id: "14",
  name: "Patricia Martin",
  amount: 195,
  status: "success",
  email: "patricia.m@example.com",
},
{
  id: "15",
  name: "Daniel Thompson",
  amount: 480,
  status: "pending",
  email: "daniel.t@example.com",
},
{
  id: "16",
  name: "Barbara Garcia",
  amount: 340,
  status: "success",
  email: "barbara.g@example.com",
},
{
  id: "17",
  name: "Matthew Martinez",
  amount: 270,
  status: "failed",
  email: "matthew.m@example.com",
},
{
  id: "18",
  name: "Susan Robinson",
  amount: 155,
  status: "success",
  email: "susan.r@example.com",
},
{
  id: "19",
  name: "Joseph Clark",
  amount: 410,
  status: "pending",
  email: "joseph.c@example.com",
},
{
  id: "20",
  name: "Jessica Rodriguez",
  amount: 230,
  status: "success",
  email: "jessica.r@example.com",
}
];

const DashboardPage = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="@container/main flex flex-col flex-1 gap-2">
        <div className="flex flex-col gap-4 md:gap-6 py-4 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;