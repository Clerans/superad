import { motion } from 'motion/react';
import pic1 from '@/assets/PIC 1.jpeg';
import pic2 from '@/assets/PIC 2.jpeg';
import pic3 from '@/assets/PIC 3.jpeg';
import pic4 from '@/assets/PIC 4.jpeg';

export function Team() {
    const team = [
        {
            name: 'MR. CHAMINDA GAMAGE',
            role: 'MANAGING DIRECTOR AND FOUNDER',
            image: pic1,
        },
        {
            name: 'P.B.DILINI PAMODHIKA NANDASENA',
            role: 'HEAD OF FINANCE',
            image: pic2,
        },
        {
            name: 'MR. M.G.N.DHARSHANA',
            role: 'HEAD OF WORKSHOP',
            image: pic3,
        },
        {
            name: 'B. AADHITHYAN',
            role: 'DESIGNER',
            image: pic4,
        },
    ];

    return (
        <section id="team" className="py-12 lg:py-32 border-t-4 border-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border-2 border-primary">
                        <span className="text-primary font-semibold">Our Team</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
                        Meet the{' '}
                        <span className="text-primary">Minds</span>
                    </h2>

                    <p className="text-lg text-muted-foreground">
                        The dedicated professionals behind our success, committed to delivering excellence in every campaign.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-[2rem] overflow-hidden border-4 border-red-600 shadow-xl"
                        >
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-bold mb-2 text-secondary uppercase">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-bold text-sm uppercase tracking-wider">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
