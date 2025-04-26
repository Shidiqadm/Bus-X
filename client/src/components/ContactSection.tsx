import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: FormValues) {
    mutation.mutate(values);
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Ready to experience luxury travel? Reach out to us for bookings, inquiries, or custom travel solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel" 
                          className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]">
                            <SelectValue placeholder="Select a Service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="airport">Airport Transfer</SelectItem>
                          <SelectItem value="occasions">Special Occasions</SelectItem>
                          <SelectItem value="tours">Tours & Trips</SelectItem>
                          <SelectItem value="cruise">Cruise Pickup</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4} 
                          className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white px-6 py-3 rounded-full font-semibold w-full h-auto"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#0D2E4D] text-white rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="flex items-start mb-6">
                <div className="bg-[#FF8B00]/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-[#FF8B00]"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Our Location</h4>
                  <p className="text-gray-300">123 Travel Avenue, Suite 500<br/>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-[#FF8B00]/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-phone-alt text-[#FF8B00]"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone Number</h4>
                  <p className="text-gray-300">+1 (800) 123-4567</p>
                  <p className="text-gray-300">+1 (212) 555-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FF8B00]/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-envelope text-[#FF8B00]"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Address</h4>
                  <p className="text-gray-300">info@busx.com</p>
                  <p className="text-gray-300">bookings@busx.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
              
              <div className="flex justify-between mb-3">
                <span className="font-medium">Monday - Friday:</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>
              
              <div className="flex justify-between mb-3">
                <span className="font-medium">Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              
              <div className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              
              <div className="mt-6 flex justify-center space-x-4">
                <a href="#" className="bg-[#FF8B00]/10 w-10 h-10 rounded-full flex items-center justify-center text-[#FF8B00] hover:bg-[#FF8B00]/20 transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-[#FF8B00]/10 w-10 h-10 rounded-full flex items-center justify-center text-[#FF8B00] hover:bg-[#FF8B00]/20 transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="bg-[#FF8B00]/10 w-10 h-10 rounded-full flex items-center justify-center text-[#FF8B00] hover:bg-[#FF8B00]/20 transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="bg-[#FF8B00]/10 w-10 h-10 rounded-full flex items-center justify-center text-[#FF8B00] hover:bg-[#FF8B00]/20 transition duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
