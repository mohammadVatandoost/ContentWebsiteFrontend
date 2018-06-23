import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

class IntegratedCircuit extends Component {
    render() {
        return (
            <div className="AccordinList">
                <Accordion>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>ای سی های مربوط به صوت - Audio Special Purpose</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul>
                                <li><Link to="">ای سی های مربوط به صوت - Audio Special Purpose</Link></li>
                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>کلاک/زمان سنجی - Clock/Timing</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul>
                                <li><Link to=""> کاربرد خاص - Application Specific </Link></li>
                                <li><Link to="">بافرهای کلاک، درایورها - Clock Buffers, Drivers</Link></li>
                                <li><Link to="">تولید کلاک، PLL، سنتز فرکانس - Clock Generators, PLLs, Frequency Synthesizers</Link></li>
                                <li><Link to="">خطوط تاخیر - Delay Lines</Link></li>
                                <li><Link to="">IC Batteries - برای کار با باتری ها</Link></li>
                                <li><Link to="">تایمر و نوسانگر قابل برنامه ریزی - Programmable Timers and Oscillators</Link></li>
                                <li><Link to="">ساعت های دقیق - Real Time Clocks</Link></li>
                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>استفاده از داده - Data Acquisition</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul>
                                <li><Link to="">ADCs/DACs - برای کاربرد خاص - ADCs/DACs - Special Purpose</Link></li>
                                <li><Link to="">ای سی های مربوط به صوت - (Analog Front End(AFE</Link></li>
                                <li><Link to="">مبدل آنالوگ به دیجیتال - (Analog to Digital Converters(ADC</Link></li>
                                <li><Link to="">پتاسیومتر دیجیتال - Digital Potentiometers</Link></li>
                                <li><Link to="">کنترلرهای صفحه لمسی - Touch Screen Controllers</Link></li>

                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>سیستم های نهفته - Embedded</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul>
                                <li><Link to="">دستگاه منطقی قابل برنامه ریزی مجتمع - (CPLDs(Complex Programmable Logic Devices</Link></li>
                                <li><Link to="">پردازنده های سیگنال دیجیتال - (DSP(Digital Signal Processors</Link></li>
                                <li><Link to="">آرایه دروازه قابل برنامه ریزی - (FPGAs(Field Programmable Gate Array</Link></li>
                                <li><Link to="">FPGA با میکروکنترلر - FPGAs(Field Programmable Gate Array) with Microcontrollers </Link></li>
                                <li><Link to="">ماژول میکروکنترلر، مبکروپروسسور و Microcontroller, Microprocessors, FPGA Modules - FPGA</Link></li>
                                <li><Link to="">میکروکنترلرها - Microcontrollers</Link></li>
                                <li><Link to="">میکروپروسسورها - Microprocessors</Link></li>
                                <li><Link to="">دستگاه منطقی قابل برنامه ریزی - PLDs(Programmable Logic Device)</Link></li>
                                <li><Link to="">سیستم در تراشه - (System On Chip (SoC</Link></li>
                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>رابط - Inteface</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul>
                                <li><Link to="">سوئیچ های آنالوگ برای کاربرد خاص - Analog Switches - Special Purpose</Link></li>
                                <li><Link to="">مالتی پلکسرها، دی مالتی پلکسرها و سوئیچ های آنالوگ - Analog Switches,Multiplexers, Demultiplexers</Link></li>
                                <li><Link to="">کدک ها - CODECs</Link></li>
                                <li><Link to="">کنترلرها - Controllers</Link></li>
                                <li><Link to="">سنتز مستقیم دیجیتال - Direct Digital Synthesis</Link></li>
                                <li><Link to="">درایورها، گیرنده ها و فرستنده ها - Drivers, Receivers,Transceivers</Link></li>
                                <li><Link to="">انکودرها ، دیکودرها و مبدل ها - Encoders, Decoders, Converters</Link></li>
                                <li><Link to="">فیلترهای اکتیو - Filters - Active</Link></li>
                                <li><Link to="">بسط دهنده I/O Expanders - I/O</Link></li>
                                <li><Link to="">مودم ها ،آی سی ها و ماژول - Modems - ICs and Modules</Link></li>
                                <li><Link to="">ماژول - Modules</Link></li>
                                <li><Link to="">رابط سنسورها و آشکارسازها - Sensors and Detector Interfaces</Link></li>
                                <li><Link to="">سنسور و صفحه لمسی خازنی - Sensor,Capacitive Touch</Link></li>
                                <li><Link to="">تبدیل سریال و برعکس - Serializers, Deserializers</Link></li>
                                <li><Link to="">بافر های سیگنال، تکرار کننده ها، تقسیم کننده ها - Signal Buffers, Repeaters, Splitters</Link></li>
                                <li><Link to="">ترمیناتورهای سیگنال - Signal Terminators</Link></li>
                                <li><Link to="">خاص - Specialized</Link></li>
                                <li><Link to="">مخابرات - Telecom</Link></li>
                                <li><Link to="">فرستنده گیرنده ی مبدل آسنکرون جهانی - UART(Universal Asynchronous Receiver Transmitter)</Link></li>
                                <li><Link to="">ضبط صدا و پخش - Voice Record and Playback</Link></li>
                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>خطی - Linear</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul>
                                <li><Link to="">تقویت کننده های صوتی - Amplifiers - Audio</Link></li>
                                <li><Link to="">تقویت کننده های ابزار دقیق،آپامپ ها - Amplifiers - Instrumentation, OP Amps, Buffer Amps</Link></li>
                                <li><Link to="">تقویت کننده ها با کاربرد خاص - Amplifiers - Special Purpose</Link></li>
                                <li><Link to="">تقویت کننده های ویدیو و ماژول ها - Amplifiers - Video Amps and Modules</Link></li>
                                <li><Link to="">ضرب کننده و تقسیم کننده آنالوگ - Analog Multipliers, Dividers</Link></li>
                                <li><Link to="">مقایسه کننده ها - Comparators</Link></li>
                                <li><Link to="">پردازش ویدیو - Video Processing</Link></li>
                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>منطقی - Logic</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul>
                                <li><Link to="">بافر، درایور، گیرنده، فرستنده - Buffers, Drivers, Receivers, Transceivers</Link></li>
                                <li><Link to="">مقایسه کننده - Comparators</Link></li>
                                <li><Link to="">شمارنده، تقسیم کننده - Counters, Dividers</Link></li>
                                <li><Link to="">حافظه FIFOs Memory - FIFO</Link></li>
                                <li><Link to="">فلیپ فلاپ - Flip Flops</Link></li>
                                <li><Link to="">گیتس و اینورتر - Gates and Inverters</Link></li>
                                <li><Link to="">چند کابرده - Multivibrators</Link></li>
                                <li><Link to="">تولید و چک کردن Parity Generators and Checkers - Parity</Link></li>
                                <li><Link to="">شیفت رجیستر - Shift Registers</Link></li>
                                <li><Link to="">کلید های سیگنال، چندگانه، رمزگشاها - Signal Switches, Multiplexers, Decoders</Link></li>
                                <li><Link to="">کاربرد خاص - Specialty Logic</Link></li>
                                <li><Link to="">تغییر سطح ولتاژ - Translators, Level Shifters</Link></li>
                                <li><Link to="">توابع جهانی - Universal Bus Functions</Link></li>
                                <li><Link to="">بافر، درایور، گیرنده، فرستنده - Buffers, Drivers, Receivers, Transceivers</Link></li>
                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>حافظه - Memory</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul>
                                <li><Link to="">حافظه - Memory</Link></li>
                                <li><Link to="">کم مصرف - Batteries</Link></li>
                                <li><Link to="">حافظه های Proms قابل تنظیم برای Configuration Proms for FPGA - FPGA</Link></li>
                                <li><Link to="">کنترلرها - Controllers</Link></li>
                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>مدار مجتمع مدیریت توان - Power Management Integrated Circuit</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul>
                                <li><Link to="">مبدل های AC,DC و سوئیچ های آفلاین - </Link></li>
                                <li><Link to="">شارژر باتری</Link></li>
                                <li><Link to="">مدیریت باتری</Link></li>
                                <li><Link to="">مدیریت و تنظیم جریان</Link></li>
                                <li><Link to="">درایو صفحه نمایش</Link></li>
                                <li><Link to="">اندازه گیری انرژی</Link></li>
                                <li><Link to="">تمام و نیم پل درایور</Link></li>
                                <li><Link to="">درایو گیت ها</Link></li>
                                <li><Link to="">Hot Swap Controllers</Link></li>
                                <li><Link to="">درایورهای لیزر</Link></li>
                                <li><Link to="">درایورهای LED</Link></li>
                                <li><Link to="">Lighting, Ballast Controllers</Link></li>
                                <li><Link to="">کنترل ها و درایورهای موتور</Link></li>
                                <li><Link to="">کنترلرهای OR، دیودهای ایده آل</Link></li>
                                <li><Link to="">اصلاح ضریب توان</Link></li>
                                <li><Link to="">کنترل توان از طریق اترنت (POE)</Link></li>
                                <li><Link to="">کنترل و مانیتور منابع تغذیه</Link></li>
                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>مدار های مجتمع خاص - Specialized ICs</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul>
                                <li><Link to="">مدار های مجتمع خاص - Specialized ICs</Link></li>
                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>
                <br/>
            </div>
        )
    }
};


export default IntegratedCircuit;

