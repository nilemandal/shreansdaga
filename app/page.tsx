"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const services = [
    {
      title: "Transcendental Breathwork",
      description: "Transform your consciousness through powerful breathing techniques",
      icon: "🌬️",
    },
    {
      title: "Guided Meditations",
      description: "Find inner peace with expertly crafted meditation sessions",
      icon: "🧘‍♂️",
    },
    {
      title: "Live Workshops",
      description: "Join interactive sessions and connect with like-minded souls",
      icon: "✨",
    },
    {
      title: "Virtual Sessions",
      description: "Experience transformation from the comfort of your home",
      icon: "💻",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-[#4A7C59]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#B8956A]/10 rounded-full blur-3xl"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-[#2C3E3F] mb-6 leading-tight">
                Discover Inner Peace
                <br />
                <span className="text-[#4A7C59]">Through Meditation</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#2C3E3F]/70 mb-8 leading-relaxed"
            >
              Join Shreansdaga in transformative breathwork and meditation
              <br />
              sessions designed to elevate your consciousness
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="group">
                Book a Session
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Introduction
              </Button>
            </motion.div>

            {/* Breathing Animation Circle */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto mt-16 w-32 h-32 rounded-full border-4 border-[#4A7C59]/30 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-24 h-24 rounded-full bg-[#4A7C59]/20"
              />
            </motion.div>
            <p className="mt-4 text-sm text-[#2C3E3F]/50">Breathe with us</p>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E3F] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-[#2C3E3F]/70 max-w-2xl mx-auto">
              Explore our range of meditation and breathwork offerings designed
              to support your journey to inner peace
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4A7C59] to-[#8BA888]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands who have transformed their lives through meditation
              and breathwork
            </p>
            <Button variant="secondary" size="lg" className="group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#4A7C59]/30">
        <CardHeader>
          <div className="text-5xl mb-4">{service.icon}</div>
          <CardTitle>{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
