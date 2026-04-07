// "use client"

// import { motion } from "framer-motion"
// import { Calendar, Award, FileCheck, Medal } from "lucide-react"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import  { Achievement } from "@/lib/data"

// const iconMap = {
//   certification: <FileCheck className="h-5 w-5" />,
//   license: <Award className="h-5 w-5" />,
//   honor: <Medal className="h-5 w-5" />,
// }


// export default function AchievementCard({ achievement }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ y: -5, transition: { duration: 0.2 } }}
//       className="card-glow"
//     >
//       <Card className="h-full bg-[#131b30]/80 border-purple-400/10 overflow-hidden backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300">
//         <CardHeader className="pb-2">
//           <div className="flex justify-between items-start">
//             <Badge variant="outline" className="bg-purple-400/10 text-purple-400 border-purple-400/20 backdrop-blur-sm">
//               <div className="flex items-center gap-1">
//                 {iconMap[achievement.type]}
//                 <span className="capitalize">{achievement.type}</span>
//               </div>
//             </Badge>
//             <div className="flex items-center text-gray-400 text-sm">
//               <Calendar className="h-3 w-3 mr-1" />
//               {achievement.date}
//             </div>
//           </div>
//           <CardTitle className="text-xl mt-2 text-white">{achievement.title}</CardTitle>
//           <CardDescription className="text-gray-300">{achievement.issuer}</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <p className="text-gray-300 text-sm">{achievement.description}</p>
//           {achievement.skills && (
//             <div className="flex flex-wrap gap-1 mt-3">
//               {achievement.skills.map((skill, index) => (
//                 <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           )}
//         </CardContent>
//         <CardFooter className="pt-2">
//           {achievement.url && (
//             <Button
//               variant="outline"
//               size="sm"
//               className="w-full border-purple-400/30 text-purple-400 hover:bg-purple-400/20 transition-all duration-300 hover:scale-[1.02]"
//             >
//               View Certificate
//             </Button>
//           )}
//         </CardFooter>
//       </Card>
//     </motion.div>
//   )
// }

