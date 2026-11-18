import React, {Component} from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { technologies } from "@/lib/skillsdata";


class MySkills extends Component {
    render() {
        return (
            <div className="mb-20 flex justify-center flex-col">
                <h3 className="text-3xl font-bold text-text-primary text-center mb-12 title3">
                    Skills & Tools
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technologies.map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <Card
                                key={index}
                                className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
                                        <Icon className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-text-primary mb-3 title3">
                                        {skill.name}
                                    </h4>

                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

        );
    }
}

export default MySkills;