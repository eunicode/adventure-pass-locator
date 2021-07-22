// // import { mainModule } from "process";
// import { tableDataJSON } from '../main.js'
// import fs from 'fs'
// // const fs = require("fs");

// fs.writeFile("vendor.json", tableDataJSON, (err, result) => {
//   if (err) {
//     console.log(`Error: ${err}`);
//   }
// });

// import { parse } from 'node-html-parser';
// import everything from 'node-html-parser';
// const { parse } = everything

// const jsdom = require("jsdom");
import jsdom from 'jsdom'
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><table id='aptable'>
<thead>
    <tr>
        <th>Vendor Name</th>
        <th>Address</th>
        <th>City</th>
        <th>Zip</th>
        <th>Phone</th>
        <th>Products</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>4 Points Liquor</td>
        <td>5510 Pearblossom Hwy</td>
        <td>Palmdale</td>
        <td>93552</td>
        <td>661-533-1366</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>5 Points Shell</td>
        <td>26745 Hwy 189</td>
        <td>Twin Peaks</td>
        <td>92391</td>
        <td>909-337-4400</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #13847</td>
        <td>11348 Sunburst St</td>
        <td>Lakeview Terrace</td>
        <td>91342</td>
        <td>818-896-6315</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>7 - Eleven #13896</td>
        <td>27761 Bouquet Canyon Rd.</td>
        <td>Saugus</td>
        <td>91350</td>
        <td>661-296-1329</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #13995</td>
        <td>861 W Route 66</td>
        <td>Glendora</td>
        <td>91702</td>
        <td>626-335-9514</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #17448</td>
        <td>455 E Foothill Blvd</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-334-9729</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #20295</td>
        <td>400 W Foothill Blvd</td>
        <td>Monrovia</td>
        <td>91016</td>
        <td>626-358-5112</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #20814</td>
        <td>8363 Foothill Blvd</td>
        <td>Sunland</td>
        <td>91040</td>
        <td>818-353-0321</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #22809</td>
        <td>41440-A Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-7711</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>7 - Eleven #23818</td>
        <td>24156 Lake Dr</td>
        <td>Crestline</td>
        <td>92325</td>
        <td>909-338-5224</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #25484</td>
        <td>8724 Foothill Blvd</td>
        <td>Sunland</td>
        <td>91040</td>
        <td>818-352-8548</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #26279</td>
        <td>298 Holiday Rd</td>
        <td>Lake Arrowhead</td>
        <td>92352</td>
        <td>909-336-1697</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #26945</td>
        <td>27680 Lake Hughes Rd</td>
        <td>Castaic</td>
        <td>91384</td>
        <td>661-257-0831</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #27226</td>
        <td>27588 N. Sierra Hwy</td>
        <td>Canyon Country</td>
        <td>91351</td>
        <td>661-298-1510</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #32151</td>
        <td>41901 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-878-9166</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>7 - Eleven #34055</td>
        <td>28088 Bouquet Canyon</td>
        <td>Santa Clarita</td>
        <td>91350</td>
        <td>661-296-7775</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #34765</td>
        <td>1535 Foothill Blvd</td>
        <td>La Caada</td>
        <td>91101</td>
        <td>818-952-5578</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #35684</td>
        <td>1001 Foothill Blvd</td>
        <td>La Caada</td>
        <td>91011</td>
        <td>818-982-5369</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 - Eleven #39233</td>
        <td>2 E Duarte Rd</td>
        <td>Arcadia</td>
        <td>91006</td>
        <td>626-462-9992</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>7 Stars Food Store</td>
        <td>390 South San Gorgonio</td>
        <td>Banning</td>
        <td>92220</td>
        <td>951-849-1967</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>76 # 1525 - Covington</td>
        <td>17624 SE 272nd St</td>
        <td>Covington</td>
        <td>98042</td>
        <td>253-631-0330</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 158 - La Palma</td>
        <td>5502 Orangethorpe Ave</td>
        <td>La Palma</td>
        <td>90623</td>
        <td>714-522-8669</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>76 # 16 - Sun City</td>
        <td>1500 Patricia Lane</td>
        <td>Sun City</td>
        <td>92570</td>
        <td>951-943-7220</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>76 # 1971 - Mentone</td>
        <td>1702 Mentone Blvd</td>
        <td>Mentone</td>
        <td>92359</td>
        <td>909-794-7744</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>76 # 1991 - Burien</td>
        <td>17700 Ambaum Blvd S</td>
        <td>Burien</td>
        <td>98148</td>
        <td>206-244-4586</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 21 - Fallbrook</td>
        <td>1202 S Main St</td>
        <td>Fallbrook</td>
        <td>92028</td>
        <td>760-723-1453</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>76 # 28 - Long Beach</td>
        <td>3565 Los Coyotes Diagonal</td>
        <td>Long Beach</td>
        <td>90808</td>
        <td>562-421-1928</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 30 - Vista</td>
        <td>485 N Melrose Dr</td>
        <td>Vista</td>
        <td>92083</td>
        <td>760-630-7282</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>76 # 355 - Joshua Tree</td>
        <td>61920 Twentynine Palms Hwy</td>
        <td>Joshua Tree</td>
        <td>92252</td>
        <td>760-366-8513</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 37 - Vista</td>
        <td>535 N Santa Fe Ave</td>
        <td>Vista</td>
        <td>92083</td>
        <td>760-414-1649</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>76 # 44 - Oceanside</td>
        <td>3401 College Blvd</td>
        <td>Oceanside</td>
        <td>92056</td>
        <td>760-434-8004</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>76 # 47 - Vista</td>
        <td>911 E Vista Way</td>
        <td>Vista</td>
        <td>92084</td>
        <td>760-643-1896</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>76 # 5091 - Lynnwood</td>
        <td>202 164 St SW</td>
        <td>Lynnwood</td>
        <td>98037</td>
        <td>253-545-1318</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5093 - Wildomar</td>
        <td>33982 Mission Tr</td>
        <td>Wildomar</td>
        <td>92595</td>
        <td>951-245-4210</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5240 - San Bernardino</td>
        <td>3008 N E St</td>
        <td>San Bernardino</td>
        <td>92405</td>
        <td>909-883-0937</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5246 - Oceanside</td>
        <td>3350 College Blvd</td>
        <td>Oceanside</td>
        <td>92056</td>
        <td>760-724-9740</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5249 - Rialto</td>
        <td>105 S Pepper Ave</td>
        <td>Rialto</td>
        <td>92376</td>
        <td>909-820-4735</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5250 - San Marcos</td>
        <td>190 W San Marcos Blvd</td>
        <td>San Marcos</td>
        <td>92069</td>
        <td>760-591-7688</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5402 - Port Orchard</td>
        <td>1350 Bay St</td>
        <td>Port Orchard</td>
        <td>98366</td>
        <td>360-876-1355</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5456 - Portland</td>
        <td>2281 NE 181St Ave</td>
        <td>Portland</td>
        <td>97230</td>
        <td>503-492-8667</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5468 - Springfield</td>
        <td>5720 E Main St</td>
        <td>Springfield</td>
        <td>97478</td>
        <td>458-206-6080</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5470 - Arlington</td>
        <td>2313 SR 530</td>
        <td>Arlington</td>
        <td>98223</td>
        <td>360-652-8700</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5477 - Bellvue</td>
        <td>15615 NE 8th St</td>
        <td>Bellevue</td>
        <td>98008</td>
        <td>425-957-0306</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5478 - Bellvue</td>
        <td>2724 84th Ave NE</td>
        <td>Bellevue</td>
        <td>98004</td>
        <td>425-454-3749</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5480 - Burien</td>
        <td>15846 1st Ave South</td>
        <td>Burien</td>
        <td>98148</td>
        <td>206-242-4344</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5483 - Federal Way</td>
        <td>2535 S 320th St</td>
        <td>Federal Way</td>
        <td>98003</td>
        <td>253-941-5999</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5485 - Federal Way</td>
        <td>33800 1st Ave S</td>
        <td>Federal Way</td>
        <td>98003</td>
        <td>253-927-8003</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5486 - Fife</td>
        <td>5405 Pacific Hwy E</td>
        <td>Fife</td>
        <td>98424</td>
        <td>253-922-9017</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5490 - Kent</td>
        <td>13122 SE 240th St</td>
        <td>Kent</td>
        <td>98031</td>
        <td>253-631-8512</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5491 - Covington</td>
        <td>16405 SE 272nd St</td>
        <td>Covington</td>
        <td>98042</td>
        <td>253-631-1885</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5492 - Kent</td>
        <td>21208 68th Ave S</td>
        <td>Kent</td>
        <td>98032</td>
        <td>253-872-0193</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5494 - Kirkland</td>
        <td>11848 NE 85th St</td>
        <td>Kirkland</td>
        <td>98033</td>
        <td>425-827-3348</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5500 - Mill Creek</td>
        <td>16320 Mill Creek Blvd</td>
        <td>Mill Creek</td>
        <td>98012</td>
        <td>425-745-2510</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5502 - Monroe</td>
        <td>14980 N Kelsey St</td>
        <td>Monroe</td>
        <td>98272</td>
        <td>360-805-0887</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5508 - Renton</td>
        <td>2022 S Puget Dr</td>
        <td>Renton</td>
        <td>98055</td>
        <td>425-271-4376</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5522 - Silverdale</td>
        <td>10023 Old Frontier Rd NW</td>
        <td>Silverdale</td>
        <td>98383</td>
        <td>360-692-9216</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5523 - Silverdale</td>
        <td>10744 Silverdale Way</td>
        <td>Silverdale</td>
        <td>98383</td>
        <td>360-698-0497</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5528 - Tacoma</td>
        <td>15119 Pacific Ave</td>
        <td>Tacoma</td>
        <td>98444</td>
        <td>253-536-7601</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5529 - Tacoma</td>
        <td>2602 N Pearl St</td>
        <td>Tacoma</td>
        <td>98407</td>
        <td>253-759-8684</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5531 - Tacoma</td>
        <td>4813 Bridgeport Way W</td>
        <td>Tacoma</td>
        <td>98467</td>
        <td>253-564-6418</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5535 - Woodinville</td>
        <td>14002 NE 175th St</td>
        <td>Woodinville</td>
        <td>98072</td>
        <td>425-481-0734</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5536 - Silverdale</td>
        <td>9215 Silverdale Way NW</td>
        <td>Silverdale</td>
        <td>98383</td>
        <td>360-692-1214</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5574 - Puyallup</td>
        <td>17506 Meridian E</td>
        <td>Puyallup</td>
        <td>98375</td>
        <td>253-445-0697</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5793 - Murrietta</td>
        <td>41010 California Oaks Rd.</td>
        <td>Murrieta</td>
        <td>92562</td>
        <td>951-461-0217</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5927 - Edmunds</td>
        <td>22625 Hwy 99</td>
        <td>Edmonds</td>
        <td>98026</td>
        <td>425-775-3714</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5928 - Auburn</td>
        <td>601 Auburn Way S</td>
        <td>Auburn</td>
        <td>98002</td>
        <td>253-833-5881</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 5929 - Bothell</td>
        <td>20717 Bothell Everett Hwy Sr 527</td>
        <td>Bothell</td>
        <td>98012</td>
        <td>425-481-7600</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 619 - Inglewood</td>
        <td>8600 Aviation Blvd</td>
        <td>Inglewood</td>
        <td>90301</td>
        <td>310-439-5648</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>76 # 665 - Fontana</td>
        <td>16081 Valley Blvd</td>
        <td>Fontana</td>
        <td>92335</td>
        <td>909-361-4630</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>76 # 667 - Cajon Pass</td>
        <td>8324 Highway 138</td>
        <td>Phelan</td>
        <td>92371</td>
        <td>760-237-8957</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>76 # 686 - Ventura</td>
        <td>774 N Ventura Ave</td>
        <td>Ventura</td>
        <td>93001</td>
        <td>805-222-4575</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>76 # 688 - Camarillo</td>
        <td>100 S Las Posas Road</td>
        <td>Camarillo</td>
        <td>93010</td>
        <td>805-263-4940</td>
        <td>Annual, Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 7960 - Auburn</td>
        <td>5011 S 288th St</td>
        <td>Auburn</td>
        <td>98001</td>
        <td>253-941-8166</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>76 # 7964 - Phelan</td>
        <td>4125 Phelan Rd</td>
        <td>Phelan</td>
        <td>92371</td>
        <td>760-868-5315</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Abbey Rose</td>
        <td>40284 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-878-2239</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Above & Beyond Sports</td>
        <td>32877 Hilltop Blvd</td>
        <td>Arrowbear Lake</td>
        <td>92382</td>
        <td>909-867-5517</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Acton Ace Hardware, Inc.</td>
        <td>31814 Crown Valley Rd</td>
        <td>Acton</td>
        <td>93510</td>
        <td>661-269-4223</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Adams Pack Station</td>
        <td>80 W Sierra Madre Blvd #34</td>
        <td>Sierra Madre</td>
        <td>91025</td>
        <td>626-447-7356</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Alpine Liquor</td>
        <td>41532 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-2824</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Alpine Ranger Station</td>
        <td>3348 Alpine Blvd</td>
        <td>Alpine</td>
        <td>91901</td>
        <td>619-445-6235</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Alpine Ride Shop</td>
        <td>2218 Alpine Blvd</td>
        <td>Alpine</td>
        <td>91901</td>
        <td>619-722-7133</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Altadena Chevron</td>
        <td>907 E Altadena Dr</td>
        <td>Altadena</td>
        <td>91001</td>
        <td>626-797-9221</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Angeles National Forest
            San Gabriel Mountains National Monument</td>
        <td>701 N. Santa Anita Ave</td>
        <td>Arcadia</td>
        <td>91006</td>
        <td>626-574-1613</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Angeles Volunteer Association</td>
        <td>110 N Wabash Ave</td>
        <td>Glendora</td>
        <td>91741</td>
        <td>626-335-4669</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Anza Electric Cooperative</td>
        <td>58470 Hwy 371</td>
        <td>Anza</td>
        <td>92539</td>
        <td>951-763-4333</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Arco AM & PM - Arcadia</td>
        <td>5 West Foothill Blvd</td>
        <td>Arcadia</td>
        <td>91006-2339</td>
        <td>626-355-2749</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Arco AM & PM - Azusa</td>
        <td>295 S Azusa Ave</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-334-5634</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Arco AM & PM - Irwindale</td>
        <td>16000 E Foothill Blvd</td>
        <td>Irwindale</td>
        <td>91702-2812</td>
        <td>626-815-8733</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Arrowbear Liquor & Deli</td>
        <td>32861 Hilltop Blvd</td>
        <td>Running Springs</td>
        <td>92382</td>
        <td>909-867-2410</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Arrowhead Sporting Goods</td>
        <td>28200 Highway 189 #150</td>
        <td>Lake Arrowhead</td>
        <td>92352</td>
        <td>909-336-3059</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Azusa Mobile Mart & Car Wash</td>
        <td>145 N Azusa Ave</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>562-688-6045</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Backroad Market & Liquor</td>
        <td>15488 Spunky Canyon Road</td>
        <td>Green Valley</td>
        <td>91390-4902</td>
        <td>661-270-9569</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Base Camp Caf and Info Lounge</td>
        <td>16311 Askin Dr</td>
        <td>Pine Mountain Club</td>
        <td>93222</td>
        <td>661-805-9327</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Bass Pro Shops</td>
        <td>7777 Victoria Gardens Lane</td>
        <td>Rancho Cucamonga</td>
        <td>91739</td>
        <td>909-922-5500</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Bear Valley Bikes</td>
        <td>40298 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-8000</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Beaumont Do It Best Home Center</td>
        <td>1538 E 6th St</td>
        <td>Beaumont</td>
        <td>92223</td>
        <td>951-845-2293</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Benny's Liquor</td>
        <td>208 N Azusa Ave</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-815-9948</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Best Gas of Big Bear, Inc</td>
        <td>101 W Big Bear Blvd</td>
        <td>Big Bear City</td>
        <td>92314</td>
        <td>909-547-6909</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 003</td>
        <td>364 E H St</td>
        <td>Chula Vista</td>
        <td>91910</td>
        <td>619-427-6900</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 011</td>
        <td>6601 Wilshire Blvd</td>
        <td>Los Angeles</td>
        <td>90048</td>
        <td>323-651-2909</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 013</td>
        <td>7000 Topanga Canyon Blvd</td>
        <td>Canoga Park</td>
        <td>91303</td>
        <td>818-346-3355</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 015</td>
        <td>5247 Lakewood Blvd</td>
        <td>Lakewood</td>
        <td>90712</td>
        <td>562-634-7779</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 018</td>
        <td>4343 Sepulveda Blvd</td>
        <td>Culver City</td>
        <td>90230</td>
        <td>310-397-0645</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 019</td>
        <td>2324 Harbor Blvd</td>
        <td>Costa Mesa</td>
        <td>92626</td>
        <td>714-545-0047</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 023</td>
        <td>520 E First St</td>
        <td>Tustin</td>
        <td>92680</td>
        <td>714-544-9808</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 026</td>
        <td>3600 Peck Rd</td>
        <td>El Monte</td>
        <td>91731</td>
        <td>626-579-6585</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 027</td>
        <td>9100 E Firestone Blvd</td>
        <td>Downey</td>
        <td>90241</td>
        <td>562-861-8719</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 028</td>
        <td>4838 Convoy St</td>
        <td>San Diego</td>
        <td>92111</td>
        <td>858-560-0311</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 033</td>
        <td>3729 Rosecrans St</td>
        <td>San Diego</td>
        <td>92110</td>
        <td>619-298-3350</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 037</td>
        <td>245 North E. St</td>
        <td>San Bernardino</td>
        <td>92401</td>
        <td>909-885-4006</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 038</td>
        <td>2445 N Tustin St</td>
        <td>Orange</td>
        <td>92665</td>
        <td>714-637-9710</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 040</td>
        <td>666 Fletcher Parkway</td>
        <td>El Cajon</td>
        <td>92020</td>
        <td>619-444-8139</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 042</td>
        <td>3214 Ming Ave</td>
        <td>Bakersfield</td>
        <td>93304</td>
        <td>661-832-4161</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 043</td>
        <td>6491 Magnolia Ave</td>
        <td>Riverside</td>
        <td>92506</td>
        <td>951-785-5957</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 056</td>
        <td>24314 Swartz Dr</td>
        <td>El Toro</td>
        <td>92630</td>
        <td>949-951-6311</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 057</td>
        <td>2320 Harbor Blvd</td>
        <td>Anaheim</td>
        <td>92802</td>
        <td>714-750-3055</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 059</td>
        <td>1203 E Los Angeles Ave</td>
        <td>Simi Valley</td>
        <td>93065</td>
        <td>805-522-6101</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 060</td>
        <td>16900 San Fernando Mission Rd</td>
        <td>Granada Hills</td>
        <td>91344</td>
        <td>818-366-3123</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 061</td>
        <td>3121 Wilshire Blvd</td>
        <td>Santa Monica</td>
        <td>90403</td>
        <td>310-453-1747</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 064</td>
        <td>3935 State St</td>
        <td>Santa Barbara</td>
        <td>93105</td>
        <td>805-964-4749</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 066</td>
        <td>7250 Van Nuys Blvd</td>
        <td>Van Nuys</td>
        <td>91405</td>
        <td>818-785-3773</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 070</td>
        <td>1610 W Whittier Blvd</td>
        <td>La Habra</td>
        <td>91786</td>
        <td>562-694-5488</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 073</td>
        <td>2301 Vista Way</td>
        <td>Oceanside</td>
        <td>92054</td>
        <td>760-757-4154</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 076</td>
        <td>17390 Colima Rd</td>
        <td>Rowland Heights</td>
        <td>91748</td>
        <td>626-912-6831</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 077</td>
        <td>3719 E Colorado Blvd</td>
        <td>Pasadena</td>
        <td>91107</td>
        <td>626-795-3111</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 090</td>
        <td>1253 E. Valley Parkway</td>
        <td>Escondido</td>
        <td>92027</td>
        <td>760-480-6860</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 091</td>
        <td>11310 183rd St</td>
        <td>Cerritos</td>
        <td>90701</td>
        <td>562-860-5411</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 094</td>
        <td>2745 Pacific Coast Hwy</td>
        <td>Torrance</td>
        <td>90505</td>
        <td>310-326-9528</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 098</td>
        <td>12033 Ventura Place</td>
        <td>Studio City</td>
        <td>91604</td>
        <td>818-769-5526</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 104</td>
        <td>24329 W Magic Mountain Parkway</td>
        <td>Valencia</td>
        <td>91355</td>
        <td>661-253-1832</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 105</td>
        <td>8990 Knott Ave</td>
        <td>Buena Park</td>
        <td>90620</td>
        <td>714-229-0135</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 106</td>
        <td>14390 Bear Valley Rd</td>
        <td>Victorville</td>
        <td>92392</td>
        <td>760-241-8655</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 108</td>
        <td>96 E Orangethorpe Ave</td>
        <td>Anaheim</td>
        <td>92801</td>
        <td>714-871-3290</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 109</td>
        <td>510 N Victory Blvd</td>
        <td>Burbank</td>
        <td>91502</td>
        <td>818-842-5479</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 110</td>
        <td>5250 Philadelphia St</td>
        <td>Chino</td>
        <td>91710</td>
        <td>909-591-0955</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 111</td>
        <td>10251 Magnolia Ave</td>
        <td>Riverside</td>
        <td>92503</td>
        <td>951-785-5957</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 112</td>
        <td>43521 13th Street West</td>
        <td>Lancaster</td>
        <td>93534</td>
        <td>661-948-4551</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 114</td>
        <td>305 Towne Center West</td>
        <td>Santa Maria</td>
        <td>93454</td>
        <td>805-349-1255</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 115</td>
        <td>1073 West Arrow Highway</td>
        <td>San Dimas</td>
        <td>91773</td>
        <td>909-592-0886</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 116</td>
        <td>9426 Whittier Blvd</td>
        <td>Pico Rivera</td>
        <td>90660</td>
        <td>562-949-6988</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 120</td>
        <td>620 E Valley Blvd</td>
        <td>Alhambra</td>
        <td>91801</td>
        <td>626-281-6753</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 121</td>
        <td>8145 Mira Mesa Blvd</td>
        <td>San Diego</td>
        <td>92126</td>
        <td>858-693-4941</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 127</td>
        <td>6061 El Cajon Blvd</td>
        <td>San Diego</td>
        <td>92115</td>
        <td>619-583-7930</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 131</td>
        <td>9120 Reseda Blvd</td>
        <td>Northridge</td>
        <td>91324</td>
        <td>818-993-5227</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 133</td>
        <td>3831 Alton Parkway Suite A.</td>
        <td>Irvine</td>
        <td>92714</td>
        <td>949-833-0840</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 134</td>
        <td>7111 Eastern Ave</td>
        <td>Bell Gardens</td>
        <td>90201</td>
        <td>323-560-4815</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 137</td>
        <td>2515 El Segundo Blvd</td>
        <td>El Segundo</td>
        <td>90245</td>
        <td>310-297-7777</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 139</td>
        <td>529 S GaffeySt</td>
        <td>San Pedro</td>
        <td>90731</td>
        <td>310-519-1339</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 142</td>
        <td>2150 E Highland Ave</td>
        <td>San Bernardino</td>
        <td>92404</td>
        <td>909-862-1940</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 144</td>
        <td>10570 E Foothill Blvd</td>
        <td>Rancho Cucamonga</td>
        <td>91730</td>
        <td>909-466-7955</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 145</td>
        <td>23901 Sunnymead Blvd</td>
        <td>Moreno Valley</td>
        <td>92553</td>
        <td>951-924-2552</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 146</td>
        <td>16873 Valley Blvd</td>
        <td>Fontana</td>
        <td>92335</td>
        <td>909-350-8973</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 148</td>
        <td>43 W Thousand Oaks Blvd</td>
        <td>Thousand Oaks</td>
        <td>91360</td>
        <td>805-497-3233</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 150</td>
        <td>2062 S Atlantic Blvd</td>
        <td>Monterey Park</td>
        <td>91754</td>
        <td>323-890-0981</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 157</td>
        <td>34101 Doheny Park Rd</td>
        <td>Capistrano Beach</td>
        <td>92624</td>
        <td>949-489-5648</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 162</td>
        <td>905 N Imperial Ave</td>
        <td>El Centro</td>
        <td>92243</td>
        <td>760-370-0530</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 171</td>
        <td>4780 Pacific Coast Hwy</td>
        <td>Long Beach</td>
        <td>90804</td>
        <td>562-498-7994</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 173</td>
        <td>1573 W Redlands Blvd</td>
        <td>Redlands</td>
        <td>92373</td>
        <td>909-335-5950</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 180</td>
        <td>1512 N H St</td>
        <td>Lompoc</td>
        <td>93436</td>
        <td>805-735-1167</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 185</td>
        <td>25274 Madison Ave</td>
        <td>Murrieta</td>
        <td>92562</td>
        <td>951-698-8345</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 188</td>
        <td>17019 Ventura Blvd</td>
        <td>Encino</td>
        <td>91316</td>
        <td>818-905-7213</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 190</td>
        <td>320 N McKinley St</td>
        <td>Corona</td>
        <td>91719</td>
        <td>951-734-9449</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 204</td>
        <td>30682 Santa Margarita Pkwy</td>
        <td>Rancho Santa Margarita</td>
        <td>92688</td>
        <td>949-888-1378</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 209</td>
        <td>2920 W Florida Ave</td>
        <td>Hemet</td>
        <td>92543</td>
        <td>951-929-6140</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 213</td>
        <td>170 Niblik Road</td>
        <td>Paso Robles</td>
        <td>93446</td>
        <td>805-239-2463</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 223</td>
        <td>949 Lomas Santa Fe Dr</td>
        <td>Solana Beach</td>
        <td>92075</td>
        <td>858-755-5953</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 228</td>
        <td>13440 Whittier Blvd</td>
        <td>Whittier</td>
        <td>90605</td>
        <td>562-693-2815</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 230</td>
        <td>16773 Bernardo Center Dr</td>
        <td>Ranch Bernardo</td>
        <td>92128</td>
        <td>858-673-9219</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 259</td>
        <td>20455 Yorba Linda Blvd</td>
        <td>Yorba Linda</td>
        <td>92886</td>
        <td>714-777-1422</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 272</td>
        <td>3203 Mall View Road</td>
        <td>Bakersfield</td>
        <td>93306</td>
        <td>661-872-4947</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 273</td>
        <td>3420 Wilshire Blvd</td>
        <td>Los Angeles</td>
        <td>90010</td>
        <td>213-487-1688</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 283</td>
        <td>37026 47th St East</td>
        <td>Palmdale</td>
        <td>93552</td>
        <td>661-285-1653</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 290</td>
        <td>760 Sycamore Ave</td>
        <td>Vista</td>
        <td>92083</td>
        <td>760-727-2859</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 305</td>
        <td>58111 Twentynine Palms Hwy</td>
        <td>Yucca Valley</td>
        <td>92284</td>
        <td>760-228-1680</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 313</td>
        <td>78710 Highway 111</td>
        <td>La Quinta</td>
        <td>92253</td>
        <td>760-771-6626</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 318</td>
        <td>72284 Highway 111</td>
        <td>Palm Desert</td>
        <td>92260</td>
        <td>760-340-3358</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 325</td>
        <td>9805 Campo Road Ste. 195</td>
        <td>Spring Valley</td>
        <td>91977</td>
        <td>619-644-5733</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 326</td>
        <td>595 Saturn Blvd</td>
        <td>San Diego</td>
        <td>92154</td>
        <td>619-628-0018</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 330</td>
        <td>205 East 4th Street, B-115 </td>
        <td>Long Beach</td>
        <td>90802</td>
        <td>562-495-3034</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 334</td>
        <td>144 N Central Ave</td>
        <td>Glendale</td>
        <td>91203</td>
        <td>818-246-1100</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 337</td>
        <td>20700 S Avalon Blvd</td>
        <td>Carson</td>
        <td>90746</td>
        <td>310-538-5340</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 340</td>
        <td>3975 Grand Ave</td>
        <td>Chino</td>
        <td>91761</td>
        <td>909-464-9735</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 346</td>
        <td>829 N Oak Park Blvd</td>
        <td>Pismo Beach </td>
        <td>92449</td>
        <td>805-473-1709</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 349</td>
        <td>1809 N Hacienda Blvd</td>
        <td>La Puente</td>
        <td>91744</td>
        <td>626-917-6471</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 352</td>
        <td>3740 Crenshaw Blvd</td>
        <td>Los Angeles</td>
        <td>90016</td>
        <td>323-295-9265</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 353</td>
        <td>1421 W 17th St</td>
        <td>Santa Ana</td>
        <td>92706</td>
        <td>714-564-0356</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 364</td>
        <td>33385 Hwy 79 South</td>
        <td>Temecula</td>
        <td>92592</td>
        <td>951-302-9428</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 368</td>
        <td>19403 Victory Blvd Suite 23</td>
        <td>Reseda</td>
        <td>91335</td>
        <td>818-776-1596</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 369</td>
        <td>18298 Collier Avenue</td>
        <td>Lake Elsinore</td>
        <td>92530</td>
        <td>951-471-1362</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 372</td>
        <td>543 N Azusa Ave</td>
        <td>Covina</td>
        <td>91722</td>
        <td>626-966-9487</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 374</td>
        <td>2259 N Fremont St</td>
        <td>Monterey</td>
        <td>93940</td>
        <td>831-375-8800</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 379</td>
        <td>2120 El Camino Real</td>
        <td>Atascadero</td>
        <td>93422</td>
        <td>805-461-0973</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 388</td>
        <td>19083 Bear Valley</td>
        <td>Apple Valley</td>
        <td>93422</td>
        <td>760-240-1896</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 395</td>
        <td>3970 East Main Street</td>
        <td>Ventura</td>
        <td>93003</td>
        <td>805-636-9216</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 396</td>
        <td>7604 Alameda St</td>
        <td>Huntington Park</td>
        <td>90255</td>
        <td>323-588-0615</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 400</td>
        <td>101 W Nuevo Rd</td>
        <td>Perris</td>
        <td>92571</td>
        <td>951-657-5893</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 402</td>
        <td>16963 Sierra Lakes Pkwy</td>
        <td>Fontana</td>
        <td>92336</td>
        <td>909-355-2192</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 414</td>
        <td>19232 Soledad Canyon Road</td>
        <td>Canyon Country</td>
        <td>91351</td>
        <td>661-252-2136</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 417</td>
        <td>685 Tucker Road</td>
        <td>Tehachapi</td>
        <td>93561</td>
        <td>661-822-4197</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 418</td>
        <td>2361 N Oxnard Blvd</td>
        <td>Oxnard</td>
        <td>93036</td>
        <td>805-485-1910</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 429</td>
        <td>2590 Las Posas Rd</td>
        <td>Camarillo</td>
        <td>93010</td>
        <td>805-383-9083</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 430</td>
        <td>11310 Crenshaw Blvd</td>
        <td>Inglewood</td>
        <td>90303</td>
        <td>323-755-2663</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 431</td>
        <td>18621 Main St</td>
        <td>Huntington Beach</td>
        <td>92648</td>
        <td>714-842-1201</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 434</td>
        <td>159 W. Polk St., Ste205</td>
        <td>Coalinga</td>
        <td>93210</td>
        <td>559-934-0739</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 436</td>
        <td>15254 Rosecrans Ave</td>
        <td>La Mirada</td>
        <td>90638</td>
        <td>714-523-3501</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 442</td>
        <td>1312 Main St</td>
        <td>Ramona</td>
        <td>92065</td>
        <td>760-787-0726</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 444</td>
        <td>2465 E Palm Canyon Dr</td>
        <td>Palm Springs</td>
        <td>92664</td>
        <td>760-325-0255</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 450</td>
        <td>80 W Foothill Blvd</td>
        <td>Upland</td>
        <td>91786</td>
        <td>909-982-3050</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 451</td>
        <td>309 E Foothill Blvd</td>
        <td>Pomona</td>
        <td>91767</td>
        <td>909-596-6324</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 456</td>
        <td>41385 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-2730</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 463</td>
        <td>12630 Poway Rd</td>
        <td>Poway</td>
        <td>92064</td>
        <td>858-513-2666</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 467</td>
        <td>49301 Grapefruit Blvd</td>
        <td>Coachella</td>
        <td>92236</td>
        <td>760-398-1383</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 474</td>
        <td>568 W Main St</td>
        <td>Santa Paula</td>
        <td>93060</td>
        <td>805-933-2300</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 477</td>
        <td>720 Woollomes Ave. Ste 104</td>
        <td>Delano</td>
        <td>92315</td>
        <td>661-721-2455</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 478</td>
        <td>3910 Broad Street Ste 3</td>
        <td>San Luis Obispo</td>
        <td>93401</td>
        <td>805-783-2340</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 481</td>
        <td>31033 Data Palm Drive</td>
        <td>Catheral City</td>
        <td>92234</td>
        <td>760-202-6702</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 486</td>
        <td>17542 Hawthorne Blvd</td>
        <td>Torrance</td>
        <td>90504</td>
        <td>310-371-7860</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 489</td>
        <td>6245 Foothill Blvd</td>
        <td>Tujunga</td>
        <td>91042</td>
        <td>818-249-9973</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 490</td>
        <td>6314 N Figueroa St</td>
        <td>Highland Park</td>
        <td>90042</td>
        <td>323-982-9024</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 492</td>
        <td>3239 Camino De Los Coches</td>
        <td>Carlsbad</td>
        <td>92009</td>
        <td>760-753-1330</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 493</td>
        <td>8052 Limonite Ave. Ste 102</td>
        <td>Jurupa Valley</td>
        <td>92509</td>
        <td>951-727-8917</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 496</td>
        <td>2421 W Rosecrans Blvd</td>
        <td>Gardena</td>
        <td>90249</td>
        <td>310-329--2502</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 498</td>
        <td>300 S Highland Springs Ave</td>
        <td>Banning</td>
        <td>92220</td>
        <td>951-769-2622</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 505</td>
        <td>34579 Yucaipa Blvd</td>
        <td>Yucaipa</td>
        <td>92399</td>
        <td>909-790-5682</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 507</td>
        <td>827 1st Street</td>
        <td>Gilory</td>
        <td>95020</td>
        <td>408-842-0092</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 508</td>
        <td>3951 Camino De La Plaza</td>
        <td>San Diego</td>
        <td>92173</td>
        <td>619-428-3681</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 509</td>
        <td>15930 Dam Road Unit A</td>
        <td>Clearlake</td>
        <td>95422</td>
        <td>707-994-4615</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 # 510</td>
        <td>3631 North Freeway Blvd S</td>
        <td>Sacramento</td>
        <td>95834</td>
        <td>916-419-8776</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big 5 Sporting Goods Corp.</td>
        <td>2525 E El Segundo Blvd</td>
        <td>El Segundo</td>
        <td>90245</td>
        <td>310-536-0611</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big Bear Chevron</td>
        <td>40553 W Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-9679</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Big Bear Discovery Center</td>
        <td>40971 North Shore Drive, Highway 38</td>
        <td>Fawnskin</td>
        <td>92333</td>
        <td>909-382-2790</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Big Bear Sporting Goods</td>
        <td>40544 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-3222</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big Bear Sundries 76</td>
        <td>41339 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-8037</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Big Bear Vacations</td>
        <td>41693 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-8200</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Big Bear Visitor Center</td>
        <td>40824 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-6190</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Bills Place</td>
        <td>16374 Sierra Hwy</td>
        <td>Canyon Country</td>
        <td>91387</td>
        <td>661-251-0164</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Blue Jay Lodge</td>
        <td>Sunrise Highway</td>
        <td>Mt. Laguna</td>
        <td>92109</td>
        <td>619-473-8844</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Bob Brown Chevron, Inc.</td>
        <td>704 West Ventura St</td>
        <td>Fillmore</td>
        <td>93015</td>
        <td>805-524-2157</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Boulder Bay Liquor</td>
        <td>39176 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-4420</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Bouquet Plaza Liquor</td>
        <td>28200 Bouquet Cyn Rd</td>
        <td>Saugus</td>
        <td>91390</td>
        <td>661-296-0660</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Bouquet Shell</td>
        <td>26801 Bouquet Canyon Road</td>
        <td>Saugus</td>
        <td>91350</td>
        <td>661-297-7484</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Bungee America</td>
        <td>16654 Soledad Cyn Rd</td>
        <td>Canyon Country</td>
        <td>91387</td>
        <td>310-322-8892</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>C & A Luxor Market</td>
        <td>39470 170th St. E.</td>
        <td>Palmdale</td>
        <td>93591</td>
        <td>661-264-3959</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>C & H Market</td>
        <td>4855 Primero St</td>
        <td>New Cuyama</td>
        <td>93254</td>
        <td>661-766-2761</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Cabins 4 Less</td>
        <td>39212 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-3105</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>California Land Management</td>
        <td>40650 N Shore Lane #102</td>
        <td>Fawnskin</td>
        <td>92333</td>
        <td>909-866-8550</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Camp Williams Caf</td>
        <td>24210 E Fork Road #A</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-910-1126</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Canyon City Liquor</td>
        <td>424 W Foothill Blvd</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-969-2017</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Canyon Market</td>
        <td>7421 Hill Rose St</td>
        <td>Tujunga</td>
        <td>91042</td>
        <td>818-352-0965</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>CAR Enterprises - Cajon Shell</td>
        <td>14949 Hwy 138</td>
        <td>Phelan</td>
        <td>92371</td>
        <td>909-394-4728</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>CAR Enterprises - Eva Shell</td>
        <td>1195 W Foothill Blvd</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-812-9020</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Cedar Glen Trading Post</td>
        <td>28946 Hook Creek Road</td>
        <td>Cedar Glen</td>
        <td>92321</td>
        <td>909-337-3310</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Chaparral Motorsports</td>
        <td>555 S. H St</td>
        <td>San Bernardino</td>
        <td>92410</td>
        <td>909-889-2761</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Chevron # 215 -Anaheim</td>
        <td>1198 S State College Blvd</td>
        <td>Anaheim</td>
        <td>92806</td>
        <td>714-409-3283</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Chevron # 216 - Anaheim</td>
        <td>1200 S Harbor Blvd</td>
        <td>Anaheim</td>
        <td>92805</td>
        <td>714-616-5058</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Chevron # 222 - Seal Beach</td>
        <td>4000 Lampson Ave</td>
        <td>Seal Beach</td>
        <td>90740</td>
        <td>562-286-1205</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>Chevron # 249 - Temecula</td>
        <td>29980 Temecula Parkway</td>
        <td>Temecula</td>
        <td>92592</td>
        <td>951-297-7304</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>Chilao Visitor Center</td>
        <td>Angeles Crest Highway (Hwy 2)</td>
        <td>La Caada</td>
        <td>91011</td>
        <td>626-796-5541</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Chirp Nature Center</td>
        <td>40850 Village Dr</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>888-412-4477</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Clear Creek Information Center</td>
        <td>Angeles Crest Highway (Hwy 2)</td>
        <td>La Caada</td>
        <td>91011</td>
        <td>626-821-6764</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Cleveland National Forest</td>
        <td>10845 Rancho Bernardo Rd</td>
        <td>San Diego</td>
        <td>92127</td>
        <td>858-674-2935</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Conoco Castaic 76</td>
        <td>31786 The Old Road</td>
        <td>Castaic</td>
        <td>91384</td>
        <td>661-257-2497</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Crystal Lake Caf & Store</td>
        <td>9877 Crystal Lake Rd</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-910-1029</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Descanso Trading Post</td>
        <td>8332 Hwy 79</td>
        <td>Descanso</td>
        <td>91916</td>
        <td>619-445-5211</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Desert Map And Aerial</td>
        <td>73612 Hwy 111</td>
        <td>Palm Desert</td>
        <td>92260</td>
        <td>760-346-1101</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>Diana Liquor & Market</td>
        <td>200 W Foothill Blvd., Suite 1</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-812-9534</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Dons Liquor Mart</td>
        <td>616 Monterey Trial</td>
        <td>Frazier Park</td>
        <td>93225</td>
        <td>661-245-1712</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Elkhorn General Store</td>
        <td>40987 Valley of the Falls Dr</td>
        <td>Forest Falls</td>
        <td>92339</td>
        <td>909-794-1212</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Enjoy the Mountain</td>
        <td>29121 Hook Creek Rd</td>
        <td>Cedar Glen</td>
        <td>92321</td>
        <td>909-366-5363</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Fawnskin Market</td>
        <td>39187 N Shore Dr</td>
        <td>Fawnskin</td>
        <td>92333</td>
        <td>909-366-0900</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Fern Valley Emporium</td>
        <td>54965 Pine Crest Ave</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>951-659-1926</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Fisheries Resources Vol. Corp</td>
        <td>Kiosk-Lower San Antonio Fire Station</td>
        <td>Upland</td>
        <td></td>
        <td>626-797-4616</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Forest Service Volunteer Association</td>
        <td>54270 Pinecrest Rd</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>909-659-2117</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Freeway Shell</td>
        <td>400 W Palmdale Blvd</td>
        <td>Palmdale</td>
        <td>92351-4242</td>
        <td>661-273-0212</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Friends Of The Desert Mountains</td>
        <td>51500 Hwy 74</td>
        <td>Palm Desert</td>
        <td>92260</td>
        <td>760-568-9918</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Gallions Castaic Corner</td>
        <td>31515 Ridge Route Rd</td>
        <td>Castaic</td>
        <td>91384-3358</td>
        <td>661-257-3523</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>George's Liquor Store</td>
        <td>3061 N Lincoln Ave</td>
        <td>Altadena</td>
        <td>91001-4534</td>
        <td>626-794-5776</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>GetBoards.com</td>
        <td>40905 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-878-3155</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>GetBoards.com - Boulder Bay</td>
        <td>39166 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-878-3155</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Gold Rush Resort Rentals & Giftshop</td>
        <td>40016 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-5678</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Goose Valley Ranger Station</td>
        <td>1634 Black Canyon Rd</td>
        <td>Ramona</td>
        <td>92065</td>
        <td>760-788-0250</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Gorman Market & Liquor</td>
        <td>49744-2 Gorman Post Rd</td>
        <td>Lebec</td>
        <td>93243</td>
        <td>661-248-6398</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Grassy Hollow Visitor Center</td>
        <td>Angeles Crest Highway (Hwy 2)</td>
        <td>Wrightwood</td>
        <td>92397</td>
        <td>626-821-6737</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Green Valley Market</td>
        <td>16166 Spunky Canyon Rd</td>
        <td>Santa Clarita</td>
        <td>91390</td>
        <td>661-270-0444</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Greenspot Market</td>
        <td>2402 Mill Creek Rd</td>
        <td>Mentone</td>
        <td>92359</td>
        <td>909-794-1511</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Gun Locker</td>
        <td>11873 Hesperia Rd</td>
        <td>Hesperia</td>
        <td>92345</td>
        <td>909-518-4571</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Hafey Farms Mountain Market</td>
        <td>32692 Ortega Hwy </td>
        <td>Lake Elsinore</td>
        <td>92530-6561</td>
        <td>951-579-8289</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>HaramokngnaCultural Center</td>
        <td>HC1 Box 6 Mt Wilson Red Box Rd</td>
        <td>Mount Wilson</td>
        <td>91023</td>
        <td>626-449-8975</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Hesperia Mesa Mart</td>
        <td>18920 Danbury Ave</td>
        <td>Hesperia</td>
        <td>92345</td>
        <td>760-244-7175</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>High Mountain Market</td>
        <td>3221 Mt Pinos Way</td>
        <td>Frazier Park</td>
        <td>93225</td>
        <td>661-245-0770</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Idyllwild Chevron</td>
        <td>25015 Hwy 243</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>951-659-3867</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Idyllwild Shell</td>
        <td>26128 Hwy 243</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>951-659-3437</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Idyllwild Town Crier</td>
        <td>54425 N Circle Dr</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>951-659-2145</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Idyllwild Village Center</td>
        <td>25225 CA-243</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>951-659-3850</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Idyllwild Village Market</td>
        <td>26000 Hwy 243</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>951-659-3800</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Incycle</td>
        <td>175 S Fair Oaks Ave</td>
        <td>Pasadena</td>
        <td>91105-2051</td>
        <td>626-577-0440</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Isabel Clothing</td>
        <td>3608 Arroyo Trail</td>
        <td>Frazier Park</td>
        <td>93225</td>
        <td>661-301-8735</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Jensen's Market - Cedar Glen</td>
        <td>211 N State Hwy 173</td>
        <td>Cedar Glen</td>
        <td>92321</td>
        <td>909-337-3500</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Jensen's Market - Running Springs</td>
        <td>31987 Hilltop Blvd</td>
        <td>Running Springs</td>
        <td>92382</td>
        <td>909-867-2228</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Jensen's Market - Wrightwood</td>
        <td>1340 Hwy 2</td>
        <td>Wrightwood</td>
        <td>92397</td>
        <td>760-249-3322</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Johnny's Ski & Board House</td>
        <td>39769 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315-3309</td>
        <td>909-866-5924</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Johnny's Sports Stop</td>
        <td>1402 Lincoln Ave</td>
        <td>Pasadena</td>
        <td>91103</td>
        <td>626-797-8839</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Julian Chamber of Commerce</td>
        <td>2129 Main Street</td>
        <td>Julian</td>
        <td>92036</td>
        <td>760-765-1857</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Klatch Coffee</td>
        <td>3480 Sierra Ave</td>
        <td>Fontana</td>
        <td>92336</td>
        <td>909-401-2771</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>L & M Mini Market & Gas</td>
        <td>17100 Sierra Hwy</td>
        <td>Canyon Country</td>
        <td>91351</td>
        <td>661-252-5066</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>La Bamba Mexican Grill Big Bear</td>
        <td>587 Bonanza Trail #4</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-7696</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>La CaadaShell</td>
        <td>4530 Angeles Crest Hwy.</td>
        <td>La Caada</td>
        <td>91011</td>
        <td>818-790-3836</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Laguna Mountain Volunteer Association</td>
        <td>310 Trousdale Dr</td>
        <td>Chula Vista</td>
        <td>91910-1016</td>
        <td>619-445-6235</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Laguna Mt. Lodge</td>
        <td>10678 Sunrise Hwy</td>
        <td>Mt. Laguna</td>
        <td>91948</td>
        <td>619-473-8533</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Lake Arrowhead Chamber Of Commerce</td>
        <td>28200 Hwy 189 Suite O1-270</td>
        <td>Lake Arrowhead</td>
        <td>92352</td>
        <td>909-337-3715</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Lake Drive Hardware</td>
        <td>23895 Lake Drive</td>
        <td>Crestline</td>
        <td>92325</td>
        <td>909-336-1547</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Lake Hemet Market</td>
        <td>56571 Hwy 74</td>
        <td>Mountain Center</td>
        <td>92561</td>
        <td>951-760-0556</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Lake Morena Country Market-2</td>
        <td>29801 Oak Drive</td>
        <td>Campo</td>
        <td>91906</td>
        <td>619-478-9067</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Lakeview Market</td>
        <td>40133 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-3912</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Last Chance Bait And Tackle</td>
        <td>3356 Wentworth Dr</td>
        <td>Hemet</td>
        <td>92545</td>
        <td>951-658-7410</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Leroys Shoes & Clothing</td>
        <td>598 Paine Road</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-4887</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Liquor King Inc.</td>
        <td>5564 Fort Tejon Rd</td>
        <td>Palmdale</td>
        <td>93552-5902</td>
        <td>661-533-1626</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Liquor Land #7</td>
        <td>944 N. Azusa Ave</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-334-3912</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Littlerock Home N Ranch Center</td>
        <td>8010 Pearblossom Hwy</td>
        <td>Littlerock</td>
        <td>93543</td>
        <td>661-944-4101</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Littlerock Liquor & Jr. Market</td>
        <td>8062 Pearblossom Hwy</td>
        <td>Littlerock</td>
        <td>93543</td>
        <td>661-944-4200</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Lookout Roadhouse</td>
        <td>32107 Ortega Hwy</td>
        <td>Lake Elsinore</td>
        <td>92530</td>
        <td>951-678-9010</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Los Angeles River Ranger District</td>
        <td>12371 N. Little Tujunga Canyon Road</td>
        <td>San Fernando</td>
        <td>91342</td>
        <td>818-899-1900</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Los Olivos Grocery</td>
        <td>2621 W Highway 154</td>
        <td>Santa Ynez</td>
        <td>93460-9137</td>
        <td>805-688-5115</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Los Padres National Forest</td>
        <td>6755 Hollister Ave</td>
        <td>Goleta</td>
        <td>93117</td>
        <td>805-961-5745</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Lucerne Valley Market</td>
        <td>32946 Hwy 18</td>
        <td>Lucerne Valley</td>
        <td>92356</td>
        <td>760-248-7311</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Lytle Creek Ranger Station</td>
        <td>1209 Lytle Creek Road</td>
        <td>Lytle Creek</td>
        <td>92358</td>
        <td>909-382-2851</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Lytle Creek Watermelon Ranch</td>
        <td>1401 Lytle Creek Rd</td>
        <td>Lytle Creek</td>
        <td>92358</td>
        <td>909-346-2894</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Melodies Place - Scotland Store</td>
        <td>551 Lytle Creek Rd</td>
        <td>Lytle Creek</td>
        <td>92358</td>
        <td>909-880-0606</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Mercado La Cachanilla#2</td>
        <td>246 N Azusa Ave</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-804-3800</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Mercado La Cachanilla#3</td>
        <td>345 N Azusa Ave</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-969-5800</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Midland Oil, Inc.</td>
        <td>3892 Sierra Ave</td>
        <td>Fontana</td>
        <td>92336</td>
        <td>909-429-7886</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Midway Market</td>
        <td>600 East Border St</td>
        <td>Frazier Park</td>
        <td>93225</td>
        <td>661-245-1790</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Mill Creek Visitor Center</td>
        <td>34701 Mill Creek Road</td>
        <td>Mentone</td>
        <td>92359</td>
        <td>909-382-2882</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Mining Supplies & Rock Shop</td>
        <td>9565 C Ave</td>
        <td>Hesperia</td>
        <td>92345</td>
        <td>760-244-9642</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Miss Sunshine's General Store</td>
        <td>54423 Village Center Dr</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>951-659-1212</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Monterey Ranger District</td>
        <td>406 S Mildred</td>
        <td>King City</td>
        <td>93930</td>
        <td>831-385-5434</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Motoworld of El Cajon</td>
        <td>315 N Magnolia Ave</td>
        <td>El Cajon</td>
        <td>92020</td>
        <td>619-442-0941</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Mount Baldy Lodge</td>
        <td>6777 Mt Baldy Rd</td>
        <td>Mt Baldy</td>
        <td>91759-9000</td>
        <td>909-982-1115</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Mount Baldy Visitor Center</td>
        <td>6778 Mt Baldy Road</td>
        <td>Mt Baldy</td>
        <td>91759</td>
        <td>909-982-2829</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Mountain Center Caf</td>
        <td>29470 Hwy 243</td>
        <td>Mountain Center</td>
        <td>92549</td>
        <td>951-206-9671</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Mountain Center Market & Gas</td>
        <td>53660 Hwy 74</td>
        <td>Mountain Center</td>
        <td>92561</td>
        <td>951-659-1100</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Mountain Hardware</td>
        <td>1390 Hwy 2</td>
        <td>Wrightwood</td>
        <td>92397</td>
        <td>760-249-3653</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Mountain Lakes</td>
        <td>277 Lytle Creek Rd.</td>
        <td>Lytle Creek</td>
        <td>92358</td>
        <td>909-887-7070</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Mountain Market</td>
        <td>28914 Old Hwy 80</td>
        <td>Pine Valley</td>
        <td>91962</td>
        <td>619-473-0038</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Mt Pinos Ranger District</td>
        <td>34580 Lockwood Valley Rd</td>
        <td>Frazier Park</td>
        <td>93225</td>
        <td>661-245-3731</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Mt View Market & Deli</td>
        <td>6929 Lockwood Valley Rd</td>
        <td>Frazier Park</td>
        <td>93225</td>
        <td>661-245-1653</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Mt. Baldy Trout Pools</td>
        <td>801 San Antonio Creek Rd</td>
        <td>Mt Baldy</td>
        <td>91759</td>
        <td>909-982-4246</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Myscenicdrives.Com - On-Line Vendor</td>
        <td>4574 36th Ave West</td>
        <td>Seattle</td>
        <td>98199</td>
        <td>855-249-0848</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>Nomad Ventures</td>
        <td>54415 N Circle Dr</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>951-659-4853</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Nomad Ventures- Temecula</td>
        <td>28780 Old Town Front St</td>
        <td>Temecula</td>
        <td>92590</td>
        <td>951-659-4853</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>North Shore Trading Company</td>
        <td>39128 N Shore Dr</td>
        <td>Fawnskin</td>
        <td>92333</td>
        <td>909-866-3414</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Oak View Shell</td>
        <td>905 N Ventura Ave</td>
        <td>Oak View</td>
        <td>93022</td>
        <td>805-649-2268</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Ojai Chapter, LPFA</td>
        <td>17017 Maricopa Hwy</td>
        <td>Ojai</td>
        <td>93023</td>
        <td>805-640-9060</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Ojai Ranger District</td>
        <td>1190 E Ojai Ave</td>
        <td>Ojai</td>
        <td>93023</td>
        <td>805-646-4348</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Old Julian Drug Store</td>
        <td>2134 Main St</td>
        <td>Julian</td>
        <td>92036</td>
        <td>760-765-0298</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Ortega Oaks Candy Store & Goods</td>
        <td>34950 Ortega Hwy</td>
        <td>Lake Elsinore</td>
        <td>92530</td>
        <td>909-749-8611</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Our Town Liquor</td>
        <td>40568 Village Drive, #A</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-866-2330</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Papa's Country Store</td>
        <td>17518 Elizabeth Lake Road</td>
        <td>Lake Hughes</td>
        <td>93532</td>
        <td>661-724-1634</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Pasadena Cyclery</td>
        <td>1670 E Walnut St</td>
        <td>Pasadena</td>
        <td>91106</td>
        <td>626-584-6391</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Perkins Store</td>
        <td>24680 Viejas Grade</td>
        <td>Descanso</td>
        <td>91916</td>
        <td>619-445-2578</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Petrolink, Inc.</td>
        <td>8324 Hwy 138</td>
        <td>Phelan</td>
        <td>92371</td>
        <td>760-249-6105</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Phelan Gun Range</td>
        <td>9539 Johnson Rd</td>
        <td>Phelan</td>
        <td>92371</td>
        <td>760-868-3167</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Phillips 66 # 6503 - Longmont</td>
        <td>1801 Hover Road</td>
        <td>Longmont</td>
        <td>80501</td>
        <td>303-651-0868</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>Phillips 66 # 6505 - Boulder</td>
        <td>3375 28th St</td>
        <td>Boulder</td>
        <td>80301</td>
        <td>303-443-0970</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>Phillips 66 # 6507 - Monument</td>
        <td>534 State Hwy 105</td>
        <td>Monument</td>
        <td>80132</td>
        <td>719-488-2700</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>Phillips 66 # 6510 - Boulder</td>
        <td>3000 28th Street</td>
        <td>Boulder</td>
        <td>80301</td>
        <td>303-442-8545</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>Phillips 66 # 6513 - Colorado Springs</td>
        <td>507 Garden Of The Gods Rd</td>
        <td>Colorado Springs</td>
        <td>80907</td>
        <td>719-265-6836</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>Phillips 66 # 6548 - Morrison</td>
        <td>16283 Morrison Road</td>
        <td>Morrison</td>
        <td>80465</td>
        <td>303-697-3998</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>Pine Cove Market</td>
        <td>23235 Hwy 243</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>951-468-4162</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Pine Valley Store</td>
        <td>28820 Old Hwy 80</td>
        <td>Pine Valley</td>
        <td>91962</td>
        <td>619-473-8723</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>R Country Market-Los Olivos</td>
        <td>2948 Grand Ave</td>
        <td>Los Olivos</td>
        <td>93441</td>
        <td>805-688-6750</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Ramco Petroleum, Lap</td>
        <td>741 Hwy 78 </td>
        <td>Ramona</td>
        <td>92065</td>
        <td>760-788-9885</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Ramona Chevron</td>
        <td>802 Main St</td>
        <td>Ramona</td>
        <td>92065</td>
        <td>760-789-6583</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Ranchers Market</td>
        <td>9001 Elizabeth Lake Rd</td>
        <td>Leona Valley</td>
        <td>93551</td>
        <td>661-270-0615</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>REI - GOODYEAR DISTRIBUTION CENTER</td>
        <td>4877 N Cotton Ave</td>
        <td>Goodyear</td>
        <td>85395-9216</td>
        <td>800-426-4840</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>REI #107 Santa Monica</td>
        <td>402 Santa Monica Blvd</td>
        <td>Santa Monica</td>
        <td>90401</td>
        <td>310-458-4370</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>REI #132 Oxnard</td>
        <td>2700 Seaglass Way</td>
        <td>Oxnard</td>
        <td>93036</td>
        <td>805-981-1938</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>REI #134 Santa Barbara</td>
        <td>321 Anacapa St</td>
        <td>Santa Barbara</td>
        <td>93101-2338</td>
        <td>805-560-1938</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>REI #14 Manhattan Beach</td>
        <td>1800 Rosecrans Ave</td>
        <td>Manhattan Beach</td>
        <td>90266</td>
        <td>310-727-0728</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>REI #148 Woodland Hills</td>
        <td>6220 Topanga Canyon Blvd</td>
        <td>Woodland Hills</td>
        <td>91367</td>
        <td>818-703-5300</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>REI #17 Tustin</td>
        <td>2962 El Camino Real</td>
        <td>Tustin</td>
        <td>92782</td>
        <td>714-505-0205</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>REI #183 Burbank</td>
        <td>1900 W Empire Ave Ste R12</td>
        <td>Burbank</td>
        <td>91504</td>
        <td>818-847-9509</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>REI #29 San Diego</td>
        <td>5556 Copley Drive</td>
        <td>San Diego</td>
        <td>92111</td>
        <td>858-279-4400</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>REI #39 Northridge</td>
        <td>18605 Devonshire St</td>
        <td>Northridge</td>
        <td>91324</td>
        <td>818-831-5558</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>REI #63 Arcadia</td>
        <td>214 N Santa Anita Ave</td>
        <td>Arcadia</td>
        <td>91006</td>
        <td>626-447-1062</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>REI #88 Huntington Beach</td>
        <td>7777 Edinger Ave, Ste 138</td>
        <td>Huntington Beach</td>
        <td>92647</td>
        <td>714-379-1938</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>REI #90 Encinitas</td>
        <td>1590 Leucadia Blvd.</td>
        <td>Encinitas</td>
        <td>92024</td>
        <td>760-944-9020</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>REI #93 Rancho Cucamonga</td>
        <td>12218 Foothill Blvd</td>
        <td>Rancho Cucamonga</td>
        <td>91739</td>
        <td>909-646-8360</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Rim Of The World Interpretive Assoc.</td>
        <td>1958 Lake Arrowhead</td>
        <td>Lake Arrowhead</td>
        <td>92352</td>
        <td>909-338-4163</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Rio Cafe & Groceries</td>
        <td>9411 Soledad Canyon Rd</td>
        <td>Agua Dulce</td>
        <td>91310</td>
        <td>661-268-0643</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Rough Riders Sporting Goods</td>
        <td>54245 North Circle Dr</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>951-659-4043</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Saddleback Ace Hardware</td>
        <td>16921 E Ave O</td>
        <td>Palmdale</td>
        <td>93591</td>
        <td>661-264-1178</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Sams Liquor& Junior Market</td>
        <td>239 Frazier Mt Rd</td>
        <td>Lebec</td>
        <td>93243</td>
        <td>661-248-5277</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>San Bernardino National Forest</td>
        <td>602 S Tippecanoe Ave</td>
        <td>San Bernardino</td>
        <td>92408</td>
        <td>909-382-2600</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>San Gabriel Canyon Gateway Center</td>
        <td>1960 N. San Gabriel Canyon Road</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-969-1012</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>San Gabriel Mountains National Monument</td>
        <td>110 N. Wabash Ave</td>
        <td>Glendora</td>
        <td>91741</td>
        <td>626-335-1251</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>San Gabriel Mtn Heritage Association</td>
        <td>USFS Mt Baldy Visitor Center</td>
        <td>Mt Baldy</td>
        <td>91759</td>
        <td>909-982-2879</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>San Gorgonio Wilderness Association</td>
        <td>34701 Mill Creek Road</td>
        <td>Mentone</td>
        <td>92359</td>
        <td>909-794-4861</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>San Jacinto Ranger Station</td>
        <td>54270 Pine Crest</td>
        <td>Idyllwild</td>
        <td>92549</td>
        <td>909-382-2921</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Sand Canyon Mobile</td>
        <td>16411 Delone Street</td>
        <td>Santa Clarita</td>
        <td>91387</td>
        <td>661-251-1162</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Sand to Snow National Monument</td>
        <td></td>
        <td></td>
        <td></td>
        <td>909-382-2600</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Santa Anita Wine And Spirits, Inc.</td>
        <td>1002 N Santa Anita Ave</td>
        <td>Arcadia</td>
        <td>91006</td>
        <td>626-623-6035</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Santa Barbara Pistachio Co.</td>
        <td>3380 Highway 33</td>
        <td>Maricopa</td>
        <td>93252</td>
        <td>661-766-2177</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Santa Barbara Ranger District</td>
        <td>3505 Paradise Rd</td>
        <td>Santa Barbara</td>
        <td>93105</td>
        <td>805-967-3481</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Santa Clara-Mojave Rivers Ranger District</td>
        <td>33708 Crown Valley Road</td>
        <td>Acton</td>
        <td>93510</td>
        <td>661-269-2825</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Santa Lucia Ranger District</td>
        <td>1616 N Carlotti Dr</td>
        <td>Santa Maria</td>
        <td>93454</td>
        <td>805-925-9538</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Santa Rosa & San Jacinto Mountains National Monument Visitor Center</td>
        <td>51500 Highway 74</td>
        <td>Palm Desert</td>
        <td>92260</td>
        <td>760-862-9984</td>
        <td>Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Sheldon Entertainment Company</td>
        <td>6069 Park Dr</td>
        <td>Wrightwood</td>
        <td>92397</td>
        <td>760-249-4400</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Shell # 208 - Lakewood</td>
        <td>6819 E Carson St</td>
        <td>Lakewood</td>
        <td>90713</td>
        <td>562-541-8352</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>Shell # 251 - Madera</td>
        <td>18463 Road 23</td>
        <td>Madera</td>
        <td>93637</td>
        <td>559-664-8831</td>
        <td>Interagency Annual</td>
    </tr>
    <tr>
        <td>Shell # 53 - Torrance</td>
        <td>3101 Artesia Blvd</td>
        <td>Torrance</td>
        <td>90504</td>
        <td>310-436-3900</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>Shell Tavern Road </td>
        <td>1140 Tavern Road</td>
        <td>Alpine</td>
        <td>91901</td>
        <td>619-445-0200</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Shop & Go Mini Mart</td>
        <td>166 W Sierra Madre Ave</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-334-3489</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Short Stop Mini Market</td>
        <td>1001 E Donovan Rd</td>
        <td>Santa Maria</td>
        <td>93454</td>
        <td>805-925-5661</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Sierra Liquor</td>
        <td>17800 Sierra Hwy</td>
        <td>Canyon Country</td>
        <td>91351</td>
        <td>661-298-0860</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Silverado Canyon Market</td>
        <td>28192 Silverado Canyon Rd</td>
        <td>Silverado</td>
        <td>92676</td>
        <td>714-649-9056</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Silverwood Gas Mart</td>
        <td>12077 Hwy 138</td>
        <td>Summit Valley</td>
        <td>92345</td>
        <td>760-389-2423</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Snow Valley Ski Resort</td>
        <td>35100 Hwy 18</td>
        <td>Running Springs</td>
        <td>92382</td>
        <td>909-867-2751</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Snowcrest Lodge</td>
        <td>7930 Mt Baldy Rd</td>
        <td>Mt Baldy</td>
        <td>91759</td>
        <td>909-350-0185</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Southern CA Nordic Ski Patrol</td>
        <td></td>
        <td>Frazier Park</td>
        <td>93225</td>
        <td>661-245-3731</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Southern California Mountains Foundation</td>
        <td>40971 Highway 38/North Shore Drive</td>
        <td>Fawnskin</td>
        <td>92333</td>
        <td>909-382-2790</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Speedway Shell</td>
        <td>3864 Sierra Ave</td>
        <td>Fontana</td>
        <td>92336</td>
        <td>909-356-8762</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Star Cycle USA</td>
        <td>355 Frazier Mtn Park Rd</td>
        <td>Lebec</td>
        <td>93243</td>
        <td>661-248-1400</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Sunshine Liquor</td>
        <td>34253 Yucaipa Blvd</td>
        <td>Yucaipa</td>
        <td>92399</td>
        <td>909-797-1668</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>The Chrome Stop</td>
        <td>40277 Big Bear Blvd</td>
        <td>Big Bear Lake</td>
        <td>92315</td>
        <td>909-878-4900</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>The Cosmic Cafe-Mt Wilson Observatory</td>
        <td>307 Observatory Dr</td>
        <td>Mt Wilson</td>
        <td>91023</td>
        <td>626-440-9018</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>The Country Store</td>
        <td>37686 State Highway 38</td>
        <td>Angelus Oaks</td>
        <td>92305</td>
        <td>909-728-0379</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>The San Gabriel Mountains Trail Builders</td>
        <td>Gateway Entrance </td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-303-1078</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Top Market</td>
        <td>503 N Azusa Ave</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-202-3782</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Topanga Creek Outpost</td>
        <td>1273 N Topanga Canyon Blvd</td>
        <td>Topanga</td>
        <td>90290-4270</td>
        <td>310-455-2111</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Town & Country Market</td>
        <td>13012 Pearblossom Hwy</td>
        <td>Pearblossom</td>
        <td>93553-3002</td>
        <td>661-944-4136</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Trabuco General Store</td>
        <td>31021 Trabuco Canyon</td>
        <td>Trabuco Canyon</td>
        <td>92678</td>
        <td>949-709-5960</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Trabuco Ranger Station</td>
        <td>1147 E 6th St</td>
        <td>Corona</td>
        <td>92879</td>
        <td>951-736-1811</td>
        <td>Annual, Daily, Secondary, Interagency Annual, Senior, Access</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman # ?</td>
        <td>14311 Bear Valley Rd #102</td>
        <td>Victorville</td>
        <td>92392</td>
        <td>760-244-1999</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #1</td>
        <td>2201 E. Willow St., Suite M</td>
        <td>Signal Hill</td>
        <td>90755</td>
        <td>562-492-6694</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #10</td>
        <td>835 S. Arroyo Parkway</td>
        <td>Pasadena</td>
        <td>91105</td>
        <td>626-578-0843</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #11</td>
        <td>18305 Hawthorne Blvd</td>
        <td>Torrance</td>
        <td>90504-4510</td>
        <td>310-214-8724</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #12</td>
        <td>491 Orange Show Rd.</td>
        <td>San Bernardino</td>
        <td>92408</td>
        <td>909-388-1090</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #13</td>
        <td>8199 Claremont Mesa Blvd, Ste E</td>
        <td>Kearny Mesa</td>
        <td>92111</td>
        <td>858-278-8005</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #16</td>
        <td>2085 Montiel St., Ste #104</td>
        <td>San Marcos</td>
        <td>92069</td>
        <td>760-741-1570</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #18 </td>
        <td>4200 Chino Hills Parkway, Suite 600</td>
        <td>Chino Hills</td>
        <td>91709</td>
        <td>909-606-1831</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #19- Corp. Office</td>
        <td>11738 San Marino St. Suite A</td>
        <td>Rancho Cucamonga</td>
        <td>91730</td>
        <td>909-923-4466</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #2</td>
        <td>19329 Vanowen St.</td>
        <td>Reseda</td>
        <td>91335</td>
        <td>818-996-1864</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #3</td>
        <td>1932 N. Tustin Ave.</td>
        <td>Orange</td>
        <td>92685</td>
        <td>714-974-0600</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #4</td>
        <td>357 N. Azusa Ave</td>
        <td>West Covina</td>
        <td>91791</td>
        <td>626-858-8948</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #7</td>
        <td>2246 Griffin Way</td>
        <td>Corona</td>
        <td>92879</td>
        <td>951-736-8007</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #8</td>
        <td>11336 Firestone Blvd.</td>
        <td>Norwalk</td>
        <td>90650</td>
        <td>562-864-0774</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Turner's Outdoorsman #9 </td>
        <td>18808 Brookhurst St.</td>
        <td>Fountain Valley</td>
        <td>92708</td>
        <td>714-963-3299</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>United Oil # 179 - Carson</td>
        <td>22235 Figueroa St</td>
        <td>Carson</td>
        <td>90745</td>
        <td>310-782-8128</td>
        <td>Annual, Daily, Secondary, Interagency Annual</td>
    </tr>
    <tr>
        <td>United Oil # 204 - Vista</td>
        <td>1740 E Vista Way</td>
        <td>Vista</td>
        <td>92084</td>
        <td>760-410-6109</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>United Oil # 5313 - Escondido</td>
        <td>1061 W El Norte Pkwy</td>
        <td>Escondido</td>
        <td>92026</td>
        <td>760-480-1342</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>United Pacific</td>
        <td>4130 Cover St</td>
        <td>Long Beach</td>
        <td>90808</td>
        <td>310-323-3992</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Upland Fuel</td>
        <td>2401 N Euclid Ave</td>
        <td>Upland</td>
        <td>91784</td>
        <td>909-946-6158</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>US Hendy Oil, Inc</td>
        <td>100 N Azusa Ave</td>
        <td>Azusa</td>
        <td>91702</td>
        <td>626-334-2103</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>US Petro Inc</td>
        <td>3870 Sierra Ave</td>
        <td>Fontana</td>
        <td>92336</td>
        <td>909-429-0464</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Valero Depot #1 - Running Springs</td>
        <td>32755 Highway 18</td>
        <td>Running Springs</td>
        <td>92382</td>
        <td>909-867-2221</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Valero Depot #3 - Rimforest</td>
        <td>26599 Pine Ave</td>
        <td>Rimforest</td>
        <td>92378</td>
        <td>909-336-0084</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Valero-Fontana </td>
        <td>3740 Sierra Ave</td>
        <td>Fontana</td>
        <td>92336</td>
        <td>909-428-0222</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Valle Vista Mobil</td>
        <td>44462 Hwy 74</td>
        <td>Hemet</td>
        <td>92544</td>
        <td>951-927-1048</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Volunteers Of The Angeles National Forest</td>
        <td>Grassy Hollow Visitor Center</td>
        <td>Wrightwood</td>
        <td>92397</td>
        <td>626-821-6737</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Wake And Wheel</td>
        <td>27278-A Hwy 189</td>
        <td>Blue Jay</td>
        <td>92317</td>
        <td>909-337-7433</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Wal-Mart #2099</td>
        <td>180 Niblick Rd</td>
        <td>Paso Robles</td>
        <td>93446</td>
        <td>805-238-1212</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Wal-Mart #2950</td>
        <td>37140 47th St East</td>
        <td>Palmdale</td>
        <td>93552</td>
        <td>661-533-0248</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Wal-Mart #2951</td>
        <td>1731 East Avenue J</td>
        <td>Lancaster</td>
        <td>93535</td>
        <td>661-945-7848</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
    <tr>
        <td>Western Auto/Firearms</td>
        <td>6621 S Atlantic Ave</td>
        <td>Bell</td>
        <td>90201</td>
        <td>323-560-0560</td>
        <td>Annual, Daily</td>
    </tr>
    <tr>
        <td>Wrightwood Auto Service</td>
        <td>1415 State Hwy. 2</td>
        <td>Wrightwood</td>
        <td>92397</td>
        <td>760-249-5335</td>
        <td>Daily</td>
    </tr>
    <tr>
        <td>Wrightwood Market</td>
        <td>1315 Hwy 2</td>
        <td>Wrightwood</td>
        <td>92397</td>
        <td>760-249-6115</td>
        <td>Annual, Daily, Secondary</td>
    </tr>
</tbody>
</table>`);

const getColNames = (dom) => {
  const thead = dom.window.document.querySelector("thead");
  const theadNodes = thead.querySelectorAll("th");

  let colNames = [...theadNodes].map((elm) => elm.innerText);

  colNames = colNames.map((elm) => {
    const lower = elm.toLowerCase();
    const noSpace = lower.replace(/\s/, "");
    return noSpace;
  });

  // console.log(colNames);
  return colNames;
};

const getRows = (dom) => {
  const tbody = dom.window.document.querySelector("tbody");
  const trNodeArr = [...tbody.querySelectorAll("tr")];

  const trArr = [];

  for (const rowNode of trNodeArr) {
    const row = [...rowNode.children];
    const subArr = [];

    for (const data of row) {
      subArr.push(data.innerText);
    }

    trArr.push(subArr);
  }

  console.log(trArr);
  return trArr;
};

// DOMParser async(?)
const sequential = async () => {
  // const adventureHTML = await fetchHTML("./adventure-pass-vendors-list.html");

  const colNamesArr = getColNames(dom);

  const rowArr = getRows(dom);

  const tableArr = [];

  for (const [i, row] of rowArr.entries()) {
    const rowObj = {};

    for (const [i, data] of row.entries()) {
      const prop = colNamesArr[i];
      rowObj[prop] = data;
    }

    tableArr.push(rowObj);
  }

  console.log(tableArr);
};

const tableData = sequential();

export const tableDataJSON = JSON.stringify(tableData);

console.log(tableData)