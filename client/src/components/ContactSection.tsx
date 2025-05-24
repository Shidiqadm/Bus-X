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
  tripType: z.enum(['single', 'round']),
  startFrom: z.string().min(2, { message: "Please enter a valid start location" }),
  endTo: z.string().min(2, { message: "Please enter a valid end location" }),
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  company: z.string().min(2, { message: "Please enter a valid company name" }),
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
      tripType: 'single',
      startFrom: "",
      endTo: "",
      date: "",
      time: "",
      company: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      // In client-only mode, we'll just simulate the API call
      console.log("Form submitted with values:", values);
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
  
  function clearForm() {
    form.reset();
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-[1400px] mx-auto px-20">
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
          {/* Contact Info - Now on the left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#0D2E4D] text-white rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="flex items-start mb-6">
                <div className="bg-[#FF8B00]/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fa-solid fa-mobile-screen-button text-[#FF8B00]" style={{ strokeWidth: '1.5px' }}></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone Number</h4>
                  <p className="text-gray-300">0424242444</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FF8B00]/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="far fa-envelope text-[#FF8B00]" style={{ strokeWidth: '1.5px' }}></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Address</h4>
                  <p className="text-gray-300">info@busx.com</p>
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
            </div>
          </motion.div>
          
          {/* Form - Now on the right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Book Your Trip</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Trip Type Segment Control */}
                <div className="border border-gray-300 rounded-full p-1 mb-4">
                  <div className="grid grid-cols-2 h-10">
                    <button
                      type="button"
                      className={`rounded-full flex items-center justify-center text-sm font-medium ${form.watch('tripType') === 'single' ? 'bg-[#FF8B00] text-white' : 'text-gray-700'}`}
                      onClick={() => form.setValue('tripType', 'single')}
                    >
                      Single Trip
                    </button>
                    <button
                      type="button"
                      className={`rounded-full flex items-center justify-center text-sm font-medium ${form.watch('tripType') === 'round' ? 'bg-[#FF8B00] text-white' : 'text-gray-700'}`}
                      onClick={() => form.setValue('tripType', 'round')}
                    >
                      Round Trip
                    </button>
                  </div>
                </div>
                
                {/* Start From and End To in same line */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="startFrom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Start From</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Departure location"
                            className="px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="endTo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 mb-1">End To</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Destination location"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Date and Time with icons on right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 mb-1">Date</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              {...field} 
                              type="date"
                              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00] [&::-webkit-calendar-picker-indicator]:hidden" 
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                              <i className="far fa-calendar text-gray-400" style={{ strokeWidth: '1.5px' }}></i>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 mb-1">Time</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              {...field} 
                              type="time" 
                              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00] [&::-webkit-calendar-picker-indicator]:hidden"
                              style={{
                                appearance: 'none',
                                WebkitAppearance: 'none',
                                MozAppearance: 'none',
                                backgroundColor: 'transparent',
                              }}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                              <i className="far fa-clock text-gray-400" style={{ strokeWidth: '1.5px' }}></i>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 mb-1">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]" 
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
                        <FormLabel className="text-gray-700 mb-1">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 mb-1">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel" 
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 mb-1">Company Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 mb-1">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4} 
                          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF8B00]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex gap-4 mt-6 justify-end">
                  <Button 
                    type="button"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-full font-semibold h-auto"
                    onClick={clearForm}
                  >
                    Clear Form
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white px-5 py-2 rounded-full font-semibold h-auto"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Book Now"}
                  </Button>
                  
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
