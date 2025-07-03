

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FolderHeart, 
  FileText, 
  Upload,
  Activity,
  Settings,
  File,
  Share
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { UserRole } from "@/lib/types";
import { Link } from "react-router-dom";

const StaffDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FolderHeart className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Staff Dashboard</h1>
            <div className="flex items-center gap-2">
              <p className="text-muted-foreground">Department staff panel</p>
              <Badge variant="outline">Staff Member</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Documents</CardTitle>
            <File className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Documents uploaded</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Department Access</CardTitle>
            <FolderHeart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Available documents</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Actions this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Staff Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderHeart className="h-5 w-5" />
              Department Access
            </CardTitle>
            <CardDescription>
              Access your department's resources and documents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full">
              <Link to="/dashboard/staff/communications">
                <Share className="h-4 w-4 mr-2" />
                Send Document
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/dashboard/staff/documents">
                <File className="h-4 w-4 mr-2" />
                Department Documents
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Document Management
            </CardTitle>
            <CardDescription>
              Upload and manage your documents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full">
              <Link to="/dashboard/staff/uploads">
                <Upload className="h-4 w-4 mr-2" />
                Upload Documents
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/dashboard/staff/approvals">
                <FileText className="h-4 w-4 mr-2" />
                View Approvals
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Settings
            </CardTitle>
            <CardDescription>
              Configure your account and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild variant="outline" className="w-full">
              <Link to="/dashboard/staff/settings">
                <Settings className="h-4 w-4 mr-2" />
                Account Settings
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StaffDashboard;


// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { 
//   FolderHeart, FileText, Upload, Activity, 
//   Settings, File, Share 
// } from "lucide-react";
// import { useAuth } from "@/contexts/AuthContext";
// import { Link } from "react-router-dom";

// const quickStats = [
//   {
//     title: "My Documents",
//     count: 12,
//     icon: File,
//     description: "Documents uploaded",
//   },
//   {
//     title: "Pending Approvals",
//     count: 3,
//     icon: FileText,
//     description: "Awaiting approval",
//   },
//   {
//     title: "Department Access",
//     count: 24,
//     icon: FolderHeart,
//     description: "Available documents",
//   },
//   {
//     title: "Recent Activity",
//     count: 5,
//     icon: Activity,
//     description: "Actions this week",
//   },
// ];

// const actionCards = [
//   {
//     title: "Department Access",
//     icon: FolderHeart,
//     description: "Access your department's resources and documents",
//     actions: [
//       {
//         label: "Send Document",
//         to: "/dashboard/staff/communications",
//         icon: Share,
//         variant: "default",
//       },
//       {
//         label: "Department Documents",
//         to: "/dashboard/staff/documents",
//         icon: File,
//         variant: "outline",
//       },
//     ],
//   },
//   {
//     title: "Document Management",
//     icon: Upload,
//     description: "Upload and manage your documents",
//     actions: [
//       {
//         label: "Upload Documents",
//         to: "/dashboard/staff/uploads",
//         icon: Upload,
//         variant: "default",
//       },
//       {
//         label: "View Approvals",
//         to: "/dashboard/staff/approvals",
//         icon: FileText,
//         variant: "outline",
//       },
//     ],
//   },
//   {
//     title: "Settings",
//     icon: Settings,
//     description: "Configure your account and preferences",
//     actions: [
//       {
//         label: "Account Settings",
//         to: "/dashboard/staff/settings",
//         icon: Settings,
//         variant: "outline",
//       },
//     ],
//   },
// ];

// const StaffDashboard = () => {
//   const { user } = useAuth();

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <FolderHeart className="h-8 w-8 text-primary" />
//           <div>
//             <h1 className="text-3xl font-bold tracking-tight">Staff Dashboard</h1>
//             <div className="flex items-center gap-2">
//               <p className="text-muted-foreground">Department staff panel</p>
//               <Badge variant="outline">Staff Member</Badge>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quick Stats */}
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//         {quickStats.map(({ title, count, icon: Icon, description }, index) => (
//           <Card key={index}>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">{title}</CardTitle>
//               <Icon className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{count}</div>
//               <p className="text-xs text-muted-foreground">{description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Staff Actions */}
//       <div className="grid gap-6 md:grid-cols-2">
//         {actionCards.map(({ title, icon: Icon, description, actions }, idx) => (
//           <Card key={idx}>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Icon className="h-5 w-5" />
//                 {title}
//               </CardTitle>
//               <CardDescription>{description}</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               {actions.map(({ label, to, icon: ActionIcon, variant }, i) => (
//                 <Button asChild key={i} variant={variant as string} className="w-full">
//                   <Link to={to}>
//                     <ActionIcon className="h-4 w-4 mr-2" />
//                     {label}
//                   </Link>
//                 </Button>
//               ))}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StaffDashboard;