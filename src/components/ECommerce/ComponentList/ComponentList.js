import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import './ComponentList.css';
import 'react-accessible-accordion/dist/fancy-example.css';

class ComponentList extends Component {
    render() {
        return (
                    <ul className="flex-column component-List">
                        {/*<li><Link to="/products/محصولات-صوتی">محصولات صوتی (Audio Products)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">باتری (Battery)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">جعبه و قفسه (Box, Racks)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">سیم چند رشته ای (Cable Assemblies)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">سیم تک رشته (Cables, Wires)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">سیم-محصولات جانبی (Cables, Wires - Management)</Link></li>*/}
                        <li><Link to="/products/خازن" activeClassName="component-List-Active">خازن ها (Capacitors)</Link></li>
                        {/*<li><Link to="/products/محصولات-صوتی">مدار محافظ (Circuit Protection)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">محصولات صوتی(Computers, Office - Components, Accessories)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">اتصالات (Connectors, Interconnects)</Link></li>*/}
                        <li><Link to="/products/کریستال-اسیلاتور-رزونانس" activeClassName="component-List-Active">کریستال ها، اسلاتورها، رزونانس ها (Crystals, Oscillators, Resonators )</Link></li>
                        {/*<li><Link to="/products/محصولات-صوتی" activeClassName="component-List-Active">پروگرمرها، بردهای توسعه، کیت ها (Development Boards, Kits, Programmers)</Link></li>*/}
                        <li><Link to="/products/نیمه-هادی-گسسته" activeClassName="component-List-Active">(Discrete Semiconductor Products) نیمه هادی گسسته</Link></li>
                        {/*<li><Link to="/products/محصولات-صوتی" activeClassName="component-List-Active">سیستم های نهفته (Embedded Computers)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">فن ها، مدیریت گرما (Fans, Thermal Management)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">فیلترها (Filters)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">سخت افزار، اتصال دهنده ها، لوازم جانبی (Hardware, Fasteners, Accessories)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">سلف ها، کویل ها، چوک ها (Inductors, Coils, Chokes)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">کنرلرهای صنعتی (Industrial Controls)</Link></li>*/}
                        <li><Link to="/products/semiconductor/IC" activeClassName="component-List-Active">مدار های مجتمع (Integrated Circuits)</Link></li>
                        {/*<li><Link to="/products/محصولات-صوتی">ایزولاتورها (Isolators)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">کیت ها (Kits)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">حفاظت خط، توزیع، پشتیبان گیری (Line Protection, Distribution, Backups)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">مغناطیس - ترانسفورماتور، قطعات القایی (Magnetics - Transformer, Inductor Components)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">ساز / DIY، آموزشی (Maker/DIY, Educational)</Link></li>*/}
                        <li><Link to="/products/حافظه" activeClassName="component-List-Active">کارت حافظه، ماژول (Memory Cards, Modules)</Link></li>
                        {/*<li><Link to="/products/محصولات-صوتی">موتورها، سلنوئیدها، بردها و ماژول های درایور(Motors, Solenoids, Driver Boards/Modules)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">راه حل های شبکه (Networking Solutions)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">تجهیزات بازرسی نوری (Optical Inspection Equipment)</Link></li>*/}
                        <li><Link to="/products/اپتوالکترونیک" activeClassName="component-List-Active">اپتوالکترونیک (Optoelectronics)</Link></li>
                        {/*<li><Link to="/products/محصولات-صوتی">مقاومت های متغیر (Potentiometers, Variable Resistors)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">منابع تغذیه - روی برد (Power Supplies - Board Mount)</Link></li>*/}
                        <li><Link to="/products/منابع-تغذیه" activeClassName="component-List-Active">منابع تغذیه - خارجی و داخلی (Power Supplies - External/Internal)</Link></li>
                        {/*<li><Link to="/products/محصولات-صوتی">پروتوتایپ و ساخت بردها (Prototyping, Fabrication Products)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">رله ها (Relays)</Link></li>*/}
                        <li><Link to="/products/مقاومت" activeClassName="component-List-Active">مقاومت ها (Resistors)</Link></li>
                        <li><Link to="/products/مقاومت-متغیر" activeClassName="component-List-Active">مقاومت های متغیر (Variable Resistors)</Link></li>
                        {/*<li><Link to="/products/محصولات-صوتی">(RF/IF and RFID)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">سنسورها و مبدل ها (Sensors, Transducers)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">لحیم کاری، ریخته گری، بازسازی محصولات (Soldering, Desoldering, Rework Products)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">محصولات اتاق تمیز (Static Control, ESD, Clean Room Products)</Link></li>*/}
                        <li><Link to="/products/کلیدها">کلیدها (Switches)</Link></li>
                        {/*<li><Link to="/products/محصولات-صوتی">نوار، چسب، مواد (Tapes, Adhesives, Materials)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">تست و اندازه گیری (Test and Measurement)</Link></li>*/}
                        {/*<li><Link to="/products/محصولات-صوتی">ابزار ها (Tools)</Link></li>*/}
                        <li><Link to="/products/ترانسفورمرها">ترانسفورمرها (Transformers)</Link></li>
                        <li><Link to="/products/بدون-دسته-بندی" activeClassName="component-List-Active">بدون دسته بندی (Uncategorized)</Link></li>
                        {/*<li><Link to="/products/محصولات-صوتی">? (Zspecial)</Link></li>*/}
                    </ul>
        )
    }
};


export default ComponentList;

