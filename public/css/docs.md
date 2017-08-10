# Dome Devices

## Door/Window Sensor
![Dome Door/Window Sensor](/images/dw-3-4ths.png)


### Description & Features
The Dome Door/Window Sensor is a battery powered Z-Wave Plus magnetic reed switch that can monitor the status of doors, windows, and anything else that opens and closes.  The Door/Window Sensor consists of two parts - the “sensor,” and the “magnet.”  The sensor has a “reed switch” inside, which is sensitive to the magnet’s presense when aligned properly and within the defined distance.  When the sensor and magnet are brought together or pulled apart, the sensor will report its open/close status to its Z-Wave controller.  


**Key Features**


* Z-Wave Plus Certified
* Up to 150’ range
* Three-Year Battery Life
* Low Battery Indication
* 0.5” Max distance between sensor & magnet
* Monitor doors, windows, medicine cabinets, drawers, garage doors, and many other openings


### Specifications
**Technical Specifications**

Spec | Value
----:|----
Radio protocol  | Z-Wave(500 series)
Power supply  | Single CR14250 (1/2AA) 3.6V battery
Standby current | 2.5uA
Working current | 35mA
Operating temperature | 32 - 104 °F (0 - 40 °C)
Radio frequency | 908.4 MHz US
Range | Up to 150’ depending on environment
Dimensions (L x W x H)  | Sensor: 2.75” x 0.8” x 0.8” (70 x 20 x 20 mm) <br> Magnet: 1.3” x 0.5” x 0.5” (40 x 11 x 11 mm)
Package Contents   |   User Manual, Sensor, Magnet, Battery, 4x Screws, 4x Wall Anchors, Double Stick Tape






### Inclusion & Exclusion

> <img src="/images/dw-exploded-view.svg" class="line-art" alt="Door/Window Sensor Exploded View">
> <span class="caption"> Figure 1 - Exploded View</span>

**Inclusion**

1. For proper inclusion, bring the Door/Window Sensor to the final location where it will be used.*
2. Remove the SENSOR COVER.
3. Remove the BATTERY TAB.
4. Press the BUTTON quickly 3 times in a row.  

A red LED will flash five times indicating inclusion.

<aside class="notice">
*For non Z-Wave Plus networks, please consult the owner’s manual for your primary controller to determine the best method and location for adding the Door/Window Sensor to your Z-Wave network.
</aside>

**Exclusion**

Follow the instructions for your Z-Wave Certified Conto enter exclusion mode.  When prompted by the controller:

1. Remove the SENSOR COVER.
2. Press the BUTTON button quickly 3 times in a row.

A red LED will flash five times indicating exclusion/disconnection.

### Factory Reset & Misc. Functions

**Resetting the Door/Window Sensor**

If needed, the Door/Window Sensor can be reset locally by following these steps.  

<aside class="warning">
Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system
</aside>

1. Remove the SENSOR COVER and confirm that your Door/Window Sensor is powered up.
2. Press and hold the BUTTON for at least 10 seconds then release.  A flashing light indicates a successful factory reset.

The Door/Window Sensor’s memory will be erased to factory settings.

**Waking Up the Door/Window Sensor**

Because the Door/Window Sensor is a battery powered device, it wakes up on regular intervals to give battery and other status updates to the controller, as well as to accept configuration settings from the controller.  This helps to extend the battery life.  The device can be forced to wake up to submit these reports or accept new settings immediately by simply pressing and holding the BUTTON for half a second.  The LED INDICATOR will flash once indicating successful wake up.

### Physical Installation

The Door/Window Sensor can be secured with the pre-applied double stick tape or the provided hardware.  The device should already be included in your Z-Wave system before continuing further.

> ![Installing the Door/Window Sensor](/images/dw-installation.png)
> <span class="caption"> Figures 3 & 4 - Showing the Door/Window Sensor Installation Location and Sensor Alignment</span>

**Pre-Installation Checklist**

* The MAGNET and SENSOR should be less than 1/2” apart when closed (Figure 4.)
* Hold the magnet and sensor in place by hand where you wish to install them, move them in and out of the closed position, and make sure the INDICATOR LED blinks in response.  This will confirm that the door and frame are spaced correctly to accommodate the sensor.  
* Make sure the SENSOR COVER RELEASE BUTTON will be accessible in the final position.
* Finally, confirm that you are still within range of your Z-Wave controller.



**Installation Using Double-Stick Tape**

1. Wipe the door and doorframe clean of dust and anything else that will interfere with the tape’s stickiness.
2. Peel the double-stick tape and adhere the SENSOR to the door surface.
3. Repeat the process for the MAGNET, making sure the MAGNET and SENSOR are no more than 1/2” apart when closed.  The lines on the sides of the MAGNET and SENSOR should be in line.
4. Open and close the door to make sure the sensor works as expected (the INDICATOR LED blinks) and that the signal reaches your Z-Wave controller.

**Installation Using Screws**

> <img src="/images/dw-w-screws.svg" class="line-art" alt="Installing the Door/Window Sensor with Screws">
> <span class="caption"> Figure 5 - Installing the Door/Window Sensor with Screws.</span>

1. Remove the SENSOR COVER and BATTERY from the SENSOR BASE and the MAGNET COVER from the MAGNET BASE.
2. Hold the SENSOR BASE in place and drive the included screws through the screw holes into the door.
3. Repeat the process for the MAGNET, making sure the MAGNET and SENSOR are no more than 1/2” apart when the door is closed.  The lines on the sides of the MAGNET and SENSOR should be in line.
4. Replace the BATTERY, SENSOR COVER, and MAGNET COVER.
5. Open and close the door to make sure the sensor works as expected (the INDICATOR LED blinks) and that the signal reaches your Z-Wave controller.




### LED Behavior


<table class="tg">
  <tr>
    <th class="tg-yw4l">Color</th>
    <th class="tg-yw4l">Behavior</th>
    <th class="tg-yw4l">This happens when...</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="6">Red</td>
    <td class="tg-yw4l">Blink 5 times in 5 seconds (slow)</td>
    <td class="tg-yw4l">…the Door/Window Sensor was just powered on, but is not yet included in a system.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink 5 times in 2.5 seconds (medium)</td>
    <td class="tg-yw4l">…the BUTTON is pressed 3 times quickly (regardless of inclusion status.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink 5 times in 1.5 seconds (fast)</td>
    <td class="tg-yw4l">…the Door/Window Sensor is powered on, and already included in a system.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Stay on for 2+ seconds straight</td>
    <td class="tg-yw4l">…the BUTTON is pressed and held for 10+ seconds, resetting Door/Window Sensor to factory settings.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blinks once for 1 second</td>
    <td class="tg-yw4l">…the SENSOR detects the MAGNET getting close or moving away (when the door opens or closes.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blinks once</td>
    <td class="tg-yw4l">…the BUTTON is pushed once.</td>
  </tr>
</table>

<span class="caption-dark"> Table 2 - LED Behavior</span>
### Button Behavior

<table class="tg">
  <tr>
    <th  class="tg-yw4l">Action</th>
    <th  class="tg-yw4l">Condition</th>
    <th  class="tg-yw4l">Result</th>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and hold BUTTON for 2 seconds</td>
    <td  class="tg-yw4l">Door/Window Sensor Already Included in System</td>
    <td  class="tg-yw4l">Device sends a wake up notification to its controller, awaits further instructions, and blinks the LED Indicator once</td>
  </tr>
  <tr>
    <td  class="tg-yw4l" rowspan="3">Push BUTTON 3 Times</td>
    <td  class="tg-yw4l">Door/Window Sensor Already Included in System</td>
    <td  class="tg-yw4l">Device sends node info to Group 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Door/Window Sensor Already Included, and Controller is in Exclusion Mode</td>
    <td  class="tg-yw4l">Device is excluded from the system and removes the Home ID from its memory</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Door/Window Sensor Not Yet Included in System, and Controller is in Inclusion Mode</td>
    <td  class="tg-yw4l">Device enters inclusion mode and includes into whichever network is also in inclusion mode</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and hold BUTTON for 10+ seconds</td>
    <td  class="tg-yw4l">Door/Window Sensor Already Included in System</td>
    <td  class="tg-yw4l">Device will be reset to factory settings, and a DEVICE_RESET_LOCALLY command will be sent to Node 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and Hold for 10+ seconds</td>
    <td  class="tg-yw4l">Any condition (as long as the device has power)</td>
    <td  class="tg-yw4l">The device’s memory will erase to factory default settings and any associations, configuration parameters, and other locally saved data will be lost</td>
  </tr>
</table>

<span class="caption-dark"> Table 3 - Button Behavior</span>

### Compatible Command Classes

<table class="tg">
  <tr>
    <th class="tg-yw42">Command Class</th>
    <th class="tg-yw43">Notes</th>
  </tr>
  <tr>
    <td class="tg-yw42">Device Reset Locally V1 (5A)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Powerlevel V1 (73)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Battery V1(80)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Association Group Information V1 (59)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Z-Wave Plus Info V2 (5E)</td>
    <td class="tg-yw43">

      <strong>Returned Value: 01 06 00 0C 06 0C 06</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Plus Version</td>
        <td>01</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Role Type</td>
        <td>06 <span class="subnote">(Slave Sleeping Reporting)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Node Type</td>
        <td>00 <span class="subnote">(Z-Wave Plus Node)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Installer Icon Type</td>
        <td>0C 06 <span class="subnote">(Access Control Alarm)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">User Icon Type</td>
        <td>0C 06 <span class="subnote">(Access Control Alarm)</span></td>
      </tr>
    </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Version V2 (86)</td>
    <td class="tg-yw43">

      <center><strong>Returned Value: 06 04 05 03 3D 41 00</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Library Type</td>
        <td>06 <span class="subnote">(Routing Slave)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Version</td>
        <td>04 05</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Sub-Version</td>
        <td>03 3D </td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Version</td>
        <td>41</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Sub-Version</td>
        <td>00</td>
      </tr>
    </table>


    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Manufacturer Specific V2 (72)</td>
    <td class="tg-yw43">
      <center><strong>Returned Value: 02 1F 00 03 01 01</strong></center>
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Manufacturer ID</td>
          <td>02 1F</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product Type</td>
          <td>00 03</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product ID</td>
          <td>01 01</td>
        </tr>
      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Binary Sensor (30)</td>
    <td class="tg-yw43">
      The Door/Window Sensor also sends a Binary Sensor Report when opened or closed.  See below for the SENSOR_BINARY_REPORT parameters sent:
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Sensor Type</td>
          <td>0A <span class="subnote">(Door/Window)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">OPEN Value</td>
          <td>FF</td>
        </tr>
        <tr>
          <td  class="tg-yw42">CLOSE Value</td>
          <td>00</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Association V2 (85)</td>
    <td class="tg-yw43">
      <p>
        <strong>Group 1</strong>
        <br>
        Group 1 is the “Lifeline” group, which can hold five members, typically including the main Z-Wave controller.  The Door/Window Sensor sends this group a Notification Report and a Binary Sensor Report when it is opened or closed.  It also sends this group a Battery Report in reponse to Battery Get commands.
      </p>
      <p>
        <strong>Group 2</strong>
        <br>
        The Door/Window Sensor sends a Basic Set command to Association Group 2 (or the Control Group) to directly trigger devices (like a light, chime, etc.) in response to events. Then, after a preset delay, a BASIC_SET(00) command is sent to reset the device (e.g. turn off the light.) The value of the Basic Set command (e.g. brightness of the lamp,) and the delay time before the BASIC_SET(00) is sent is configured using configuration parameters 1 and 2 respectively.  
      </p>
      <p>
        <strong>Group 3</strong>
        <br>
        Group 3 supports up to 5 members and the Door/Window Sensor sends it a NOTIFICATION_REPORT when the door either opens or closes.
      </p>
      <p>
        <strong>Group 4</strong>
        <br>
        Group 4 supports up to 5 members and the Door/Window Sensor sends it a SENSOR_BINARY_REPORT when the door either opens or closes.
      </p>    
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Wake Up V2 (84)</td>
    <td class="tg-yw43">The wake-up interval is set in seconds, and is 43,200 seconds (12 hours) by default.  The wake-up interval can be set to any value from 300s (5 minutes) to 16,777,200s (about 190 days) in 60-second increments.</td>
  </tr>
  <tr>
    <td class="tg-yw42">Notification V4 (71)</td>
    <td class="tg-yw43">
      The Door/Window Sensor sends a Notification Report to the main controller whenever the door is opened and closed.
      <br>
      <center><strong>Returned Value: 00 00 00 FF 06 XX 00 00</strong></center>
      <br>
       <table>
        <tr>
          <td  class="tg-yw42">V1 Alarm Type</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">V1 Alarm Level</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Reserved</td>
          <td>00 <span class="subnote">(Reserved)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Notification Status</td>
          <td>FF <span class="subnote">(Unsolicited Reporting is Enabled)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Type</td>
          <td>06 <span class="subnote">(Access Control)</span></td>
        </tr>
        </tr>
        <tr>
          <td  class="tg-yw42">Door Open Event <br> Door Closed Event</td>
          <td>16 <span class="subnote">(Window/Door is Open)</span> <br> 17 <span class="subnote">(Window/Door is Closed)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Sequence/Reserved/Event Parameters Length</td>
          <td>00</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Event Parameters</td>
          <td>00 <span class="subnote">(No Event Parameters)</span></td>
        </tr>

      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Configuration V1(70)</td>
    <td class="tg-yw43">See “Configuration” Command Class Parameters”.</td>
  </tr>

</table>
<span class="caption-dark"> Table 4 - Compatible Command Classes</span>


### “Configuration” Command Class Parameters
<p>Configuration parameters are sent using a standard syntax to ensure interoperability between all manufacturers’ products.  All values are represented using the hexadecimal number system.  
<br>Typical syntax is as shown below. Note that the value sent must be the exact size, in bytes, as accepted by the setting.  The “extra” spaces should be filled with zeros (see the “value” column below.) </p>
<p>Example Configuration Parameter: 02 02 00 0A
  <br>
  <table>
    <tr>
      <td  class="tg-yw4l">Param #</td>
      <td  class="tg-yw4l">Size</td>
      <td  class="tg-yw4l">Value</td>
    </tr>
    <tr>
      <td  class="tg-yw41">02<br><span class="subnote">(Param #2)</span></td>
      <td  class="tg-yw4l">02<br><span class="subnote">(2 Bytes)</span></td>
      <td  class="tg-yw4l">00 0A<br><span class="subnote">(Value)</span></td>
    </tr>
  </table>
</p>


<table class="tg">
  <tr>
    <th class="tg-yw4l">Param #</th>
    <th class="tg-yw4l">Size</th>
    <th class="tg-yw4l">Name</th>
    <th class="tg-yw4l">Available Values</th>
    <th class="tg-yw4l">Default Value</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">01</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the delay time from when the Door/Window Sensor sends the BASIC_SET command to Association Group 2 and when the BASIC_SET(0) is sent.,It accepts a value up to 65,535, in seconds.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">02</td>
    <td class="tg-yw4l">BASIC_SET Off Delay</td>
    <td class="tg-yw4l">00 01 ~ FF FF <br> <span class="subnote">(1 ~ 65,535 in Seconds)</span></td>
    <td class="tg-yw4l">1E <br> <span class="subnote"> (30 sec) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">02</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the value sent by the BASIC_SET command to Association Group 2 (for more information, see “Assocation Groups”.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">BASIC_SET Level</td>
    <td class="tg-yw4l">00 <span class="subnote">(0/Turn Off Device)</span> <br> 01 ~ 63 <span class="subnote">(1 ~ 99)</span> <br> FF <span class="subnote">(-1/Turn On Device)</span>  </td>
    <td class="tg-yw4l">FF <br> <span class="subnote"> (-1/Turn On Device) </span></td>
  </tr>

</table>

<span class="caption-dark"> Table 5 - "Configuration" Command Class Parameters</span>






## Siren

![Dome Siren](/images/siren-front.png)
### Description & Features
The Dome Siren is a battery powered Z-Wave Plus device that alerts the user to events detected by the connected Z-Wave Controller using an audible alarm. In addition to a DECIBEL dB audible alarm for critical events, the Siren has a secondary chime to signal other events like movement or doors opening.



**Key Features**


* Z-Wave Plus Certified
* Up to 150’ range
* Three-Year Battery Life
* Low Battery Indication
* 80 dB Audible Alarm
* Visual indicator with built-in LED ring
* Secondary Chime
* Customizable notifications and volume levels

### Specifications
**Technical Specifications**

Spec | Value
----:|----
Radio protocol  | Z-Wave(500 series)
Power supply  | 2x CR123 3.0V battery  
Power Consumption | 2W
Working current | 35mA
Operating temperature | 32 - 104 °F (0 - 40 °C)
Radio frequency | 908.4 MHz US
Range | Up to 150’ depending on environment
Dimensions (L x W x H)  | Ø2.75" x 1.2"
Package Contents   |   User Manual, Siren, 2x Battery, 1x Screw, 1x Wall Anchor, Double Stick Tape

###Inclusion & Exclusion

> <img src="/images/siren-exploded-view.svg" class="line-art" alt="Siren Exploded View">
> <span class="caption"> Figure 1 - Exploded View</span>
> <img src="/images/siren-bottom.svg" class="line-art" alt="Showing individual parts A. Inside the Siren and B. Underneath the Siren.">
> <span class="caption"> Figure 2 - Showing individual parts A. Inside the Siren and B. Underneath the Siren.</span>


**Inclusion**

1. For proper inclusion, bring the Siren to the final location where it will be used.*
2. Remove the BACK COVER.
3. Remove the BATTERY TABS.
4. Press the BUTTON quickly 3 times in a row.  

The LED Ring will flash five times indicating inclusion.

<aside class="notice">
*For non Z-Wave Plus networks, please consult the owner’s manual for your primary controller to determine the best method and location for adding the Door/Window Sensor to your Z-Wave network.
</aside>

**Exclusion**

Follow the instructions for your Z-Wave Certified Conto enter exclusion mode.  When prompted by the controller:

1. Remove the BACK  COVER.
2. Press the BUTTON button quickly 3 times in a row.

The LED Ring will flash five times indicating exclusion/disconnection.

### Factory Reset & Misc. Functions

**Resetting the Siren**

If needed, the Siren can be reset locally by following these steps.  

<aside class="warning">
Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system
</aside>

1. Remove the BACK COVER and confirm that your Siren is powered up.
2. Press and hold the BUTTON for at least 10 seconds then release.  A flashing light indicates a successful factory reset.

The Siren’s memory will be erased to factory settings.


###Physical Installation###

**Pre-Installation Checklist**

* The Siren can be mounted on a wall or placed on shelf or tabletop
* The Siren is loud enough to be audible from inside a drawer
* The BACK COVER twists CLOCKWISE to be removed
* The Siren should be included in your Z-Wave System prior to installation  
* Confirm that your device can communicate with your Z-Wave Controller from the final installed location before proceeding

**Installation Using Double-Stick Tape**

1. Wipe the surface you wish to attach the Siren to clean of any residue.
2. With the Siren completely assembled, peel the preapplied adhesive backing and firmly push it against the wall.

**Installation—Using Keyhole Slot**

1. Drive a screw into the surface the Siren will be attached to, leaving it 1/8” away from being completely flush.
2. Slide the fully assembled Siren around the screw, into the keyhole slot, and pull it down to completely secure the device around the screw.

**Installation—With Screws**

1. Remove the BACK COVER by twisting it clockwise.
2. Hold the BACK COVER on the surface it will be attached to, and drive two of the included screws through indentations on the BACK COVER.  You may optionally install anchors in the wall for added support.
3. Twist the MAIN BODY counter clockwise onto the BACK COVER.


### LED Behavior

<table class="tg">
  <tr>
    <th class="tg-yw4l">Color</th>
    <th class="tg-yw4l">Behavior</th>
    <th class="tg-yw4l">This happens when...</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="5">Red</td>
    <td class="tg-yw4l">Blink 5 times in 1 second</td>
    <td class="tg-yw4l">…the device powers on, but is not yet included in a Z-Wave Network.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink 5 times in 500ms</td>
    <td class="tg-yw4l">…the CONNECT BUTTON is pushed 3 times, either resulting in the Siren sending its NodeInfo, or being included or excluded from a Z-Wave network.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink 5 times in 300ms</td>
    <td class="tg-yw4l">…the device powers on, and is arleady included in a Z-wave network.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink Once</td>
    <td class="tg-yw4l">…the CONNECT BUTTON is pressed for an extended period of time, resetting the Siren to factory default settings.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Flashing and Spinning</td>
    <td class="tg-yw4l">…the Siren is sounding its alarm.</td>
  </tr>
</table>

<span class="caption-dark"> Table 2 - LED Behavior</span>

### Button Behavior

<table class="tg">
  <tr>
    <th  class="tg-yw4l">Action</th>
    <th  class="tg-yw4l">Condition</th>
    <th  class="tg-yw4l">Result</th>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and hold BUTTON for 2 seconds</td>
    <td  class="tg-yw4l">Siren Already Included in System</td>
    <td  class="tg-yw4l">Device sends a wake up notification to its controller, awaits further instructions, and blinks the LED Ring once</td>
  </tr>
  <tr>
    <td  class="tg-yw4l" rowspan="3">Push BUTTON 3 Times</td>
    <td  class="tg-yw4l">Siren Already Included in System</td>
    <td  class="tg-yw4l">Device sends node info to Group 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Siren Already Included, and Controller is in Exclusion Mode</td>
    <td  class="tg-yw4l">Device is excluded from the system and removes the Home ID from its memory</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Siren Not Yet Included in System, and Controller is in Inclusion Mode</td>
    <td  class="tg-yw4l">Device enters inclusion mode and includes into whichever network is also in inclusion mode</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and hold BUTTON for 10+ seconds</td>
    <td  class="tg-yw4l">Siren Already Included in System</td>
    <td  class="tg-yw4l">Device will be reset to factory settings, and a DEVICE_RESET_LOCALLY command will be sent to Node 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and Hold for 10+ seconds</td>
    <td  class="tg-yw4l">Any condition (as long as the device has power)</td>
    <td  class="tg-yw4l">The device’s memory will erase to factory default settings and any associations, configuration parameters, and other locally saved data will be lost</td>
  </tr>
</table>

<span class="caption-dark"> Table 3 - Button Behavior</span>

### Compatible Command Classes

<table class="tg">
  <tr>
    <th class="tg-yw42">Command Class</th>
    <th class="tg-yw43">Notes</th>
  </tr>
  <tr>
    <td class="tg-yw42">Device Reset Locally V1 (5A)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Powerlevel V1 (73)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Battery V1(80)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Association Group Information V1 (59)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Z-Wave Plus Info V2 (5E)</td>
    <td class="tg-yw43">

      <strong>Returned Value: 01 07 00 0F 00 0F 00</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Plus Version</td>
        <td>01</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Role Type</td>
        <td>07 <span class="subnote">(Slave Sleeping Listening)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Node Type</td>
        <td>00 <span class="subnote">(Z-Wave Plus Node)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Installer Icon Type</td>
        <td>0F 00 <span class="subnote">(Siren)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">User Icon Type</td>
        <td>0F <span class="subnote">(Siren)</span></td>
      </tr>
    </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Version V2 (86)</td>
    <td class="tg-yw43">

      <center><strong>Returned Value: 06 04 05 02 39 10 00</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Library Type</td>
        <td>06 <span class="subnote">(Routing Slave)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Version</td>
        <td>04 05</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Sub-Version</td>
        <td>02 39</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Version</td>
        <td>10</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Sub-Version</td>
        <td>00</td>
      </tr>
    </table>


    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Manufacturer Specific V2 (72)</td>
    <td class="tg-yw43">
      <center><strong>Returned Value: 02 1F 00 03 01 02</strong></center>
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Manufacturer ID</td>
          <td>02 1F</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product Type</td>
          <td>00 03</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product ID</td>
          <td>00 881</td>
        </tr>
      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Association V2 (85)</td>
    <td class="tg-yw43">
      <p>
        <strong>Group 1</strong>
        <br>
        Group 1 is the “Lifeline” group, which can hold five members, typically including the main Z-Wave controller.  The Siren sends this group a Notification Report and a Binary Switch Report when the siren is turned on or off.  It also sends this group a Battery Report in reponse to Battery Get commands and a Locally Reset Notification upon local reset.
      </p>
      <p>
        <strong>Group 2</strong>
        <br>
        Group 2 can hold five members, and the Siren sends a single command to this Association Group, the Binary Switch Report, whenever the Siren is turned on or off.
      </p>
      <p>
        <strong>Group 3</strong>
        <br>
        Group 2 can hold five members, and the Siren sends a single command to this Association Group, a Notification Report, whenever the Siren is turned on or off.
      </p>   
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Notification V4 (71)</td>
    <td class="tg-yw43">
      The Siren sends a Notification Report whenever it is turned on, and another report when the sound is turned off (either by the user, or by timing out; see Configuration Parameters 2 and 3.)  The Sequence Byte is used to help the Controller keep track of multiple siren events—if a chime is sounded while another chime is active, the sequence numbers will increment with each event, resetting back to 01 when no chime events are active.  See below for the NOTIFICATION_REPORT parameters sent:

      <br>
      <center><strong>Returned Value: 00 00 00 FF 0E XX 8X XX XX</strong></center>
      <br>
       <table>
        <tr>
          <td  class="tg-yw42">V1 Alarm Type</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">V1 Alarm Level</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Reserved</td>
          <td>00 <span class="subnote">(Reserved)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Notification Status</td>
          <td>FF <span class="subnote">(Unsolicited Reporting is Enabled)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Type</td>
          <td>0E <span class="subnote">(Siren)</span></td>
        </tr>
        </tr>
        <tr>
          <td  class="tg-yw42">Siren Active Event <br> Siren Off Event</td>
          <td>01 <span class="subnote">(Siren Active)</span> <br> 00 <span class="subnote">(Event Inactive)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Sequence/Reserved/Event Parameters Length<td>
          <td>00</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Event Parameters</td>
          <td>00 <span class="subnote">(No Event Parameters)</span></td>
        </tr>

      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Configuration V1(70)</td>
    <td class="tg-yw43">See “Configuration” Command Class Parameters”.</td>
  </tr>

</table>
<span class="caption-dark"> Table 4 - Compatible Command Classes</span>

### “Configuration” Command Class Parameters
<p>Configuration parameters are sent using a standard syntax to ensure interoperability between all manufacturers’ products.  All values are represented using the hexadecimal number system.  
<br>Typical syntax is as shown below. Note that the value sent must be the exact size, in bytes, as accepted by the setting.  The “extra” spaces should be filled with zeros (see the “value” column below.) </p>
<p>Example Configuration Parameter: 02 02 00 0A
  <br>
  <table>
    <tr>
      <td  class="tg-yw4l">Param #</td>
      <td  class="tg-yw4l">Size</td>
      <td  class="tg-yw4l">Value</td>
    </tr>
    <tr>
      <td  class="tg-yw41">02<br><span class="subnote">(Param #2)</span></td>
      <td  class="tg-yw4l">02<br><span class="subnote">(2 Bytes)</span></td>
      <td  class="tg-yw4l">00 0A<br><span class="subnote">(Value)</span></td>
    </tr>
  </table>
</p>


<table class="tg">
  <tr>
    <th class="tg-yw4l">Param #</th>
    <th class="tg-yw4l">Size</th>
    <th class="tg-yw4l">Name</th>
    <th class="tg-yw4l">Available Values</th>
    <th class="tg-yw4l">Default Value</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">01</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the volume of the Siren (primary) sound.  There are three possible volume levels available. </td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Primary Notification Volume Level</td>
    <td class="tg-yw4l">01 <span class="subnote">(Low Volume)</span><br>02 <span class="subnote">(Medium Volume)</span><br>03 <span class="subnote">(High Volume)</span></td>
    <td class="tg-yw4l">03<br><span class="subnote">(High Volume)</span>
</td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">02</td>
    <td class="tg-yw4l" colspan="4">This parameter defines the length of the Alarm/primary notification.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Primary Notification Length</td>
    <td class="tg-yw4l">01 <span class="subnote">(30 Seconds)</span><br>02 <span class="subnote">(1 Minute)</span><br>03 <span class="subnote">(5 Minutes)</span><br>FF <span class="subnote">(Plays Until Battery is Depleted)</span></td>
    <td class="tg-yw4l">02 <br> <span class="subnote"> (1 Minute) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">03</td>
    <td class="tg-yw4l" colspan="4">This parameter defines the number of times the Chime/Secondary Notification will play.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Secondary Notification Length</td>
    <td class="tg-yw4l">00 <span class="subnote">(Chime Will Not Play)</span><br>01~FE <span class="subnote">(1~254 Cycles)</span><br>FF <span class="subnote">(Does Not Stop)</span></td>
    <td class="tg-yw4l">01 <br> <span class="subnote"> (Chime Plays Once) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">04</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the volume of the Chime (secondary) sound.  There are three possible volume levels available.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Secondary Notification Volume Level</td>
    <td class="tg-yw4l">01 <span class="subnote">(Low Volume)</span><br>02 <span class="subnote">(Medium Volume)</span><br>3 <span class="subnote">(High Volume)</span></td>
    <td class="tg-yw4l">01 <br> <span class="subnote"> (Low Volume) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">05</td>
    <td class="tg-yw4l" colspan="4">The Siren offers ten different sounds to use as the Siren (primary) notification.  This parameter sets the Siren (primary) notification sound.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Primary Notification Sound</td>
    <td class="tg-yw4l">01 ~ 0A <span class="subnote">(Sound Index Number)</span></td>
    <td class="tg-yw4l">0A</td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">06</td>
    <td class="tg-yw4l" colspan="4">If Parameter 7 is set to 02, the Siren will play a secondary chime sound instead of the main alarm. The Siren offers ten different sounds to use as the Chime (secondary) notification.  This parameter sets the Chime (secondary) notification sound.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Secondary Notification Sound</td>
    <td class="tg-yw4l">01 ~ 0A <span class="subnote">(Sound Index Number)</span></td>
    <td class="tg-yw4l">09</td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">07</td>
    <td class="tg-yw4l" colspan="4">This Parameter toggles between the Primary and Secondary notification sound to be played when the Siren receives a BINARY_SWITCH_SET(FF) command.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Toggle Secondary Chime</td>
    <td class="tg-yw4l">01 <span class="subnote">(Primary Notification Will Play)</span><br>02 <span class="subnote">(Secondary Notification Will Play)</span></td>
    <td class="tg-yw4l">01 <br><span class="subnote">(Primary Notification Will Play)</span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">08</td>
    <td class="tg-yw4l" colspan="4">This Parameter enables or disables the Flashing LED Ring (strobe) accompanying the Primary Notification.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable Primary Notification Strobe</td>
    <td class="tg-yw4l">00 <span class="subnote">(LED Ring Will Not Flash)</span><br>02 <span class="subnote">(LED Ring Will Flash)</span></td>
    <td class="tg-yw4l">01 <br><span class="subnote">(LED Ring Will Flash)</span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">09</td>
    <td class="tg-yw4l" colspan="4">This Parameter enables or disables the Flashing LED Ring (strobe) accompanying the Secondary Notification.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable Secondary Notification Strobe</td>
    <td class="tg-yw4l">00 <span class="subnote">(LED Ring Will Not Flash)</span><br>02 <span class="subnote">(LED Ring Will Flash)</span></td>
    <td class="tg-yw4l">00 <br><span class="subnote">(LED Ring Will Not Flash)</span></td>
  </tr>

</table>

<span class="caption-dark"> Table 5 - "Configuration" Command Class Parameters</span>


## Motion Detector

![Dome Motion Detector](/images/motion-detector-3-4ths.png)

### Description & Features
The Dome Motion Detector is a Z-Wave Plus device that monitors areas for movement. It does this using a sensor which detects changes in infrared light. Similar to how lightbulbs “glow” in the “visible” light spectrum, humans and other mammals “glow” in the “infrared” light spectrum, so it is easy to detect this type of movement. The Motion Detector can either be wall mounted or placed on any flat horizontal surface.  The MOUNT uses a spherical magnet to hold the SENSOR, so it can point in any direction.   The Motion Detector also monitors ambient light levels and reports the data to your Z-Wave Hub.


**Key Features**

* Z-Wave Plus Certified
* Ambient Light Sensor
* Flexible Mounting Options
* 110° Extra-Wide Coverage Area
* Up to 150’ range
* Three-Year Battery Life
* Low Battery Indication


### Specifications
**Technical Specifications**

Spec | Value
----:|----
Radio protocol  | Z-Wave(500 series)
Power supply  | Single CR123A 3.0V battery  
Working current | 35mA
Power Consumption | 0.15W
Radio frequency | 908.4 MHz US
Range | Up to 150’ depending on environment
Dimensions (L x W x H)  | Sensor: 1.75" Sphere
Package Contents   |   User Manual, Sensor, Battery, 2x Screws, 2x Wall Anchors, Double-Stick Tape

### Inclusion & Exclusion

> <img src="/images/motion-detector-exploded-view.svg" class="line-art" alt="Motion Detector Exploded View">
> <span class="caption"> Figure 1 - Exploded View</span>
> <img src="/images/motion-detector-bottom.svg" class="line-art" alt="Parts of the Motion Detector">
> <span class="caption"> Figure 2 - Parts of the A. Sensor Base Front, B. Sensor Base Rear, and C. Mount (Wall Mount)</span>

**Inclusion**

1. For proper inclusion, bring the Motion Detector to the final location where it will be used.*
2. Remove the SENSOR COVER by twisting it counterclockwise.
3. Remove the BATTERY TAB.
4. Press the BUTTON quickly 3 times in a row.  

The LED Indicator will flash five times indicating inclusion.

<aside class="notice">
*For non Z-Wave Plus networks, please consult the owner’s manual for your primary controller to determine the best method and location for adding the Motion Detector to your Z-Wave network.
</aside>

**Exclusion**

Follow the instructions for your Z-Wave Certified Conto enter exclusion mode.  When prompted by the controller:

1. Remove the SENSOR COVER.
2. Press the BUTTON button quickly 3 times in a row.

The LED Indicator will flash five times indicating exclusion/disconnection.

### Factory Reset & Misc. Functions

**Resetting the Motion Detector**

If needed, the Motion Detector can be reset locally by following these steps.  

<aside class="warning">
Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system
</aside>

1. Remove the SENSOR COVER and confirm that your Motion Detector is powered up.
2. Press and hold the BUTTON for at least 10 seconds then release.  A flashing light indicates a successful factory reset.

The Motion Detector’s memory will be erased to factory settings.

**Waking Up the Motion Detector**

Because the Motion Detector is a battery powered device, it wakes up on regular intervals to give battery and other status updates to the controller, as well as to accept configuration settings from the controller.  This helps to extend the battery life.  The device can be forced to wake up to submit these reports or accept new settings immediately by simply pressing and holding the BUTTON for half a second.  The LED INDICATOR will flash once indicating successful wake up.

### Physical Installation

**How to Use - Tabletop**

> <img src="/images/pir-tabletop.svg" class="line-art" alt="Using the Motion Detector on a tabletop">
> <span class="caption"> Figure 3 - Using the Motion Detector on a tabletop</span>

You can use the facets on the Sensor Body to properly angle the Motion Sensor on a table top or bookshelf to monitor a room.

1. Remove the Magnetic Cradle and store it for later use if needed.
2. Make sure your device is powered on and that there is enough Z-Wave coverage in your installation location.
3. Follow Figure 3 and place the Sensor Body on a flat horizontal surface with an unobstructed view of the area you wish to monitor.

**How to Use - Wall Mount**

> <img src="/images/pir-wall-mount.svg" class="line-art" alt="Motion Detector Wall Mount Configurations">
> <span class="caption"> Figure 4 - Motion Detector Wall Mount Configurations</span>

You can mount the Motion Detector on any wall with a central line-of-sight perspective of the area you wish to monitor. See Figure 4 to visualize the Motion Sensor’s coverage area and its optimal positioning.  It is best to mount the Motion Detector as high as possible to avoid limiting its effective range with obstacles like tables and chairs.

**Installation - With Double-Stick Tape**

1. Find a good location (Fig 4) with adequate Z-Wave coverage to mount your Motion Sensor.
2. Wipe your wall clean of any dirt and grease.
3. Peel-and-stick the MOUNT to your wall using the included double-stick tape.
4. Place the SENSOR on the MOUNT (MAGNET) at an angle to properly monitor your room, and the magnet will hold the SENSOR in place.

**Installation—With Screws**

1. Find a good location (Fig 4) with adequate Z-Wave coverage to mount your Motion Detector.
2. Twist the MOUNT counterclockwise to separate the MOUNT (MAGNET) from the MOUNT (WALL MOUNT).
3. Hold the MOUNT (WALL MOUNT)  to your wall and drive the included screws through the SCREW HOLES.
4. Reattach the MOUNT (MAGNET) to the MOUNT (WALL MOUNT).
5. Place the SENSOR on the MOUNT (MAGNET) at an angle to properly monitor your room, and the magnet will hold the SENSOR in place.

### LED Behavior


<table class="tg">
  <tr>
    <th class="tg-yw4l">Color</th>
    <th class="tg-yw4l">Behavior</th>
    <th class="tg-yw4l">This happens when...</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="5">Red</td>
    <td class="tg-yw4l">Blink 5 times in 5 seconds (slow)</td>
    <td class="tg-yw4l">…the Motion Detector was just powered on, but is not yet included in a system.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink 5 times in 2.5 seconds (medium)</td>
    <td class="tg-yw4l">…the BUTTON is pressed 3 times quickly (regardless of inclusion status.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink 5 times in 1.5 seconds (fast)</td>
    <td class="tg-yw4l">…the Motion Detector is powered on, and already included in a system.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Stay on for 2+ seconds straight</td>
    <td class="tg-yw4l">…the BUTTON is pressed and held for 10+ seconds, resetting Motion Detector to factory settings.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blinks once for 1 second</td>
    <td class="tg-yw4l">…the SENSOR detects motion OR the BUTTON is pushed once. </td>
  </tr>
</table>

<span class="caption-dark"> Table 2 - LED Behavior</span>

### Button Behavior

<table class="tg">
  <tr>
    <th  class="tg-yw4l">Action</th>
    <th  class="tg-yw4l">Condition</th>
    <th  class="tg-yw4l">Result</th>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and hold BUTTON for 2 seconds</td>
    <td  class="tg-yw4l">Motion Detector Already Included in System</td>
    <td  class="tg-yw4l">Device sends a wake up notification to its controller, awaits further instructions, and blinks the LED Indicator once</td>
  </tr>
  <tr>
    <td  class="tg-yw4l" rowspan="3">Push BUTTON 3 Times</td>
    <td  class="tg-yw4l">Motion Detector Already Included in System</td>
    <td  class="tg-yw4l">Device sends node info to Group 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Motion Detector Already Included, and Controller is in Exclusion Mode</td>
    <td  class="tg-yw4l">Device is excluded from the system and removes the Home ID from its memory</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Motion Detector Not Yet Included in System, and Controller is in Inclusion Mode</td>
    <td  class="tg-yw4l">Device enters inclusion mode</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and hold BUTTON for 10+ seconds</td>
    <td  class="tg-yw4l">Motion Detector Already Included in System</td>
    <td  class="tg-yw4l">Device will be reset to factory settings, and a DEVICE_RESET_LOCALLY command will be sent to Node 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and Hold for 10+ seconds</td>
    <td  class="tg-yw4l">Any condition (as long as the device has power)</td>
    <td  class="tg-yw4l">The device’s memory will erase to factory default settings and any associations, configuration parameters, and other locally saved data will be lost</td>
  </tr>
</table>

<span class="caption-dark"> Table 3 - Button Behavior</span>

### Compatible Command Classes

<table class="tg">
  <tr>
    <th class="tg-yw42">Command Class</th>
    <th class="tg-yw43">Notes</th>
  </tr>
  <tr>
    <td class="tg-yw42">Device Reset Locally V1 (5A)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Powerlevel V1 (73)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Battery V1(80)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Association Group Information V1 (59)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Z-Wave Plus Info V2 (5E)</td>
    <td class="tg-yw43">

      <strong>Returned Value: 01 06 00 0C 07 0C 07</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Plus Version</td>
        <td>01</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Role Type</td>
        <td>06 <span class="subnote">(Slave Sleeping Reporting)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Node Type</td>
        <td>00 <span class="subnote">(Z-Wave Plus Node)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Installer Icon Type</td>
        <td>0C 07 <span class="subnote">(Home Security Alarm)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">User Icon Type</td>
        <td>0C 07 <span class="subnote">(Home Security Alarm)</span></td>
      </tr>
    </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Version V2 (86)</td>
    <td class="tg-yw43">

      <center><strong>Returned Value: 03 04 05 03 50 42 00</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Library Type</td>
        <td>02 <span class="subnote">(Enhanced Slave)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Version</td>
        <td>04 05</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Sub-Version</td>
        <td>03 50 </td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Version</td>
        <td>42</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Sub-Version</td>
        <td>00</td>
      </tr>
    </table>


    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Manufacturer Specific V2 (72)</td>
    <td class="tg-yw43">
      <center><strong>Returned Value: 02 1F 00 03 01 01</strong></center>
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Manufacturer ID</td>
          <td>02 1F</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product Type</td>
          <td>00 03</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product ID</td>
          <td>00 83</td>
        </tr>
      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Multilevel Sensor (31)</td>
    <td class="tg-yw43">
      The Motion Detector monitors ambient light levels and reports this data to the main controller using the Multilevel Sensor command class. The light is measured everytime motion is detected and periodically (every 180 s by default; see Parameter 07.)  Each time the device wakes up or checks the light level, the Param 7 clock is reset.  A report is sent only if the light is at least 100 Lux more intense than the last reported value.
      <br>
      <center><strong>Returned Value: 03 0A XX XX</strong></center>
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Sensor Type</td>
          <td>03 <span class="subnote">(Luminance)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Precision/Scale/Size</td>
          <td>0A <span class="subnote">(Precision = 000; Scale = 01; Size = 010)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Sensor Data</td>
          <td>00 00 ~ FF FF <span class="subnote">(0 ~ 65,535 in Lux)</span></td>
        </tr>
      </table>

    </td>
  </tr>

  <tr>
    <td class="tg-yw42">Binary Sensor (30)</td>
    <td class="tg-yw43">
      The Motion Detector also sends a Binary Sensor Report when motion is detected or cleared.  See below for the Binary Sensor Report parameters sent:
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Sensor Type</td>
          <td>0C <span class="subnote">(Motion)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Motion Detected Value</td>
          <td>FF</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Motion Cleared Value</td>
          <td>00</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Association V2 (85)</td>
    <td class="tg-yw43">
      <p>
        <strong>Group 1</strong>
        <br>
        Group 1 is the “Lifeline” group, which can hold five devices.  The Motion Detector sends this group a Notification Report and Binary Sensor Report whenever motion is detected and when it stops.  It also sends a Multilevel Sensor Report incrementally based on time (see Param 7,) or when a relative change in light level is detected (see Param 9.)  Finally, the Motion Detector sends this group Battery Reports and a Device Reset Locally notification to remove itself from the Z-Wave network.  
      </p>
      <p>
        <strong>Group 2</strong>
        <br>
        The Motion Detector sends a BASIC_SET command to Association Group 2 to directly trigger devices (like a siren, chime, etc.) when motion is detected and when it stops.  Optionally, the Motion Detector can be set to only send this when ambient light levels fall below a predetermined level (see Configuration Parameters 5 and 8.)  See Configuration Parameters 2, 3, 5, and 8 for more details regarding Association Group 2.  
      </p>
      <p>
        <strong>Group 3</strong>
        <br>
        Group 3 supports up to 5 members and the Motion Detector sends it a NOTIFICATION_REPORT when motion is detected and when it stops.
      </p>
      <p>
        <strong>Group 4</strong>
        <br>
        Group 4 supports up to 5 members and the Motion Detector sends it a SENSOR_BINARY_REPORT when motion is detected and when it stops.
      </p>    
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Wake Up V2 (84)</td>
    <td class="tg-yw43">The wake-up interval is set in seconds, and is 43,200 seconds (12 hours) by default.  The wake-up interval can be set to any value from 300s (5 minutes) to 16,777,200s (about 190 days) in 60-second increments.</td>
  </tr>
  <tr>
    <td class="tg-yw42">Notification V4 (71)</td>
    <td class="tg-yw43">
      The Motion Detector sends a Notification Report whenever motion is detected. If no motion is detected for the amount of time set by Configuration Parameter 2, the device will send another Notification Report  to the main controller.
      <br>
      <center><strong>Returned Value: 00 00 00 FF 07 XX 00 00</strong></center>
      <br>
       <table>
        <tr>
          <td  class="tg-yw42">V1 Alarm Type</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">V1 Alarm Level</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Reserved</td>
          <td>00 <span class="subnote">(Reserved)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Notification Status</td>
          <td>FF <span class="subnote">(Unsolicited Reporting is Enabled)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Type</td>
          <td>07 <span class="subnote">(Home Security)</span></td>
        </tr>
        </tr>
        <tr>
          <td  class="tg-yw42">Motion Detected Event <br>Motion Cleared Event</td>
          <td>08 <span class="subnote">(Motion Detected, Unknown Location)</span> <br> 17 <span class="subnote">(Event Inactive)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Sequence/Reserved/Event Parameters Length</td>
          <td>00</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Event Parameters</td>
          <td>00 <span class="subnote">(No Event Parameters)</span></td>
        </tr>

      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Configuration V1(70)</td>
    <td class="tg-yw43">See “Configuration” Command Class Parameters”.</td>
  </tr>

</table>
<span class="caption-dark"> Table 4 - Compatible Command Classes</span>


### “Configuration” Command Class Parameters
<p>Configuration parameters are sent using a standard syntax to ensure interoperability between all manufacturers’ products.  All values are represented using the hexadecimal number system.  
<br>Typical syntax is as shown below. Note that the value sent must be the exact size, in bytes, as accepted by the setting.  The “extra” spaces should be filled with zeros (see the “value” column below.) </p>
<p>Example Configuration Parameter: 02 02 00 0A
  <br>
  <table>
    <tr>
      <td  class="tg-yw4l">Param #</td>
      <td  class="tg-yw4l">Size</td>
      <td  class="tg-yw4l">Value</td>
    </tr>
    <tr>
      <td  class="tg-yw41">02<br><span class="subnote">(Param #2)</span></td>
      <td  class="tg-yw4l">02<br><span class="subnote">(2 Bytes)</span></td>
      <td  class="tg-yw4l">00 0A<br><span class="subnote">(Value)</span></td>
    </tr>
  </table>
</p>


<table class="tg">
  <tr>
    <th class="tg-yw4l">Param #</th>
    <th class="tg-yw4l">Size</th>
    <th class="tg-yw4l">Name</th>
    <th class="tg-yw4l">Available Values</th>
    <th class="tg-yw4l">Default Value</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">01</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the sensitivity of the Motion Detector. It is a unitless parameter ranging in values from 8 up to 255, with 8 being the highest sensitivity level and 255 being the lowest.  After physical installation, make sure the farthest part of the coverage area is still “visible” to the  Motion Detector by adjusting this parameter.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Sensitivity Level</td>
    <td class="tg-yw4l">08 ~ FF <br> <span class="subnote">(8 ~ 255)</span></td>
    <td class="tg-yw4l">0C <br> <span class="subnote"> (12) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">02</td>
    <td class="tg-yw4l" colspan="4">This parameters sets the amount of time after a motion event before the Motion Detector reports no activity to the main controller (see “Notification” and “Binary Sensor” command classes on page 14-15 for more information.)  This also sets the amount of time before a BASIC_SET(00) command is sent to Association Group 2 to turn off any activated devices.  This value must be higher than the value of Parameter 6, and if this parameter is reset to default settings, Parameter 6 will also be reset.  See “Group 2” on page <?> for more information.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">02</td>
    <td class="tg-yw4l">Motion Cleared Time Delay</td>
    <td class="tg-yw4l">00 05 ~ 02 58 <span class="subnote">(5 ~ 600 in Seconds)</span></td>
    <td class="tg-yw4l">1E <br> <span class="subnote"> (30 Sec) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">03</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the value sent by the BASIC_SET command to Association Group 2 (for more information, see “Association Group Info”.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">BASIC_SET Level</td>
    <td class="tg-yw4l">00 <span class="subnote">(0/Turn Off Device)</span><br>01 ~ 63 <span class="subnote">(0-99)</span><br>FF <span class="subnote">(255/Turn On Device)</span></td>
    <td class="tg-yw4l">FF <br> <span class="subnote"> (255/Turn On Device) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">04</td>
    <td class="tg-yw4l" colspan="4">This setting enables or disables motion detection and light reporting.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable Motion Detector</td>
    <td class="tg-yw4l">00 <span class="subnote">(Motion Detection Disabled )</span><br>01 <span class="subnote">(Motion Detection Enabled)</span></td>
    <td class="tg-yw4l">01 <br> <span class="subnote"> (Motion Detection Enabled) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">05</td>
    <td class="tg-yw4l" colspan="4">If Parameter 8 is enabled, this setting sets the light level below which the Motion Detector will send BASIC_SET commands to Association Group 2 when motion is detected.  For more information, see  "Association Group Info".</td>
  </tr>
  <tr>
    <td class="tg-yw4l">02</td>
    <td class="tg-yw4l">Group 2 Ambient Light Threshold</td>
    <td class="tg-yw4l">00 05 ~ 03 E8 <br><span class="subnote">(5 ~ 1,000 in Lux)</span></td>
    <td class="tg-yw4l">00 64 <br> <span class="subnote"> (100 Lux) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">06</td>
    <td class="tg-yw4l" colspan="4">After each motion event, the Motion Detector is disabled for the amount of time set by this parameter before it can send out another “Motion Detected” Notification Report/Binary Sensor Report.  This value must be lower than the value of Parameter 2, and if this parameter is reset to default settings, Parameter 2 will also be reset.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Retrigger Interval</td>
    <td class="tg-yw4l">01 ~ 08<br><span class="subnote">(1 ~ 8  in seconds)</span></td>
    <td class="tg-yw4l">8 <br> <span class="subnote"> (8 seconds) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">07</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the amount of time between each successive ambient light level reading that is sent.  This value must be less than the Wakeup Interval Time (which is 43,200 seconds or 12 hours by default.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">02</td>
    <td class="tg-yw4l">Light Sensing Interval</td>
    <td class="tg-yw4l">00 3C ~ 8C A0<br><span class="subnote">(60 ~ 36,000 in seconds)</span></td>
    <td class="tg-yw4l">00 B4<br> <span class="subnote"> (180 sec) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">08</td>
    <td class="tg-yw4l" colspan="4">If this parameter is enabled, the Motion Detector will only send Basic Set commands to Associon Group 2 if the ambient light level is below the value set in Parameter 05.  For more information, see “Association Group Info."</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable Group 2 Ambient Light Threshold</td>
    <td class="tg-yw4l">00<span class="subnote">(Group 2 Ambient Light Threshold Disabled)</span><br>01<span class="subnote">(Group 2 Ambient Light Threshold Enabled)</span></td>
    <td class="tg-yw4l">00<br> <span class="subnote"> (Ambient Light Threshold Disabled) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">09</td>
    <td class="tg-yw4l" colspan="4">This Parameter sets the minimum change in ambient light level (in lux) the Motion Detector must detect before a Multilevel Sensor Report is sent to the main controller.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Ambient Light Sensitivity Level</td>
    <td class="tg-yw4l">00 ~ FF<br><span class="subnote">(0 ~ 255 in Lux)</span></td>
    <td class="tg-yw4l">64<br> <span class="subnote"> (100 Lux) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">0A</td>
    <td class="tg-yw4l" colspan="4">If this parameter is enabled, the LED INDICATOR will flash everytime there motion is detected.  If this is disabled, the LED INDICATOR will not flash to indicate motion events.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable LED INDICATOR</td>
    <td class="tg-yw4l">00<span class="subnote">(LED Disabled)</span><br>01<span class="subnote">(LED Enabled)</span></td>
    <td class="tg-yw4l">01<br> <span class="subnote"> (LED Enabled) </span></td>
  </tr>

</table>

<span class="caption-dark"> Table 5 - "Configuration" Command Class Parameters</span>



## Leak Sensor

![Dome Leak Sensor](/images/leak-front.png)

### Description & Features
The Dome Leak Sensor is a battery powered Z-Wave Plus device that can detect wetness and send a notification when it does so.  The Leak Sensor consists of two parts—the “SENSOR ASSEMBLY,” and the optional “REMOTE SENSOR PROBE.”  They both detect water similarly, using three visible “LEAD.”  The moment water touches any of the LEAD, the device will beep and send a notification with its moisture status to its Z-Wave controller.  The REMOTE SENSOR PROBE is used to monitor confined or otherwise difficult to reach places.


**Key Features**

* Z-Wave Plus Certified
* Beeps and sends Z-Wave notification when water is detected
* Thin profile—can fit under appliances
* Remote Sensor Probe with 4’ extension for hard-to-reach areas
* Up to 150’ range
* Three-Year Battery Life
* Low Battery Indication
* Good to place near washing machines, dishwashers, sinks, toilets, or your indoor garden to alert you of any leaky accidents!


### Specifications
**Technical Specifications**

Spec | Value
----:|----
Radio protocol  | Z-Wave(500 series)
Power supply  | Single CR2 3.0V battery  
Working current | 35mA
Power Consumption | 0.13W
Radio frequency | 908.4 MHz US
Range | Up to 150’ depending on environment
Dimensions (L x W x H)  | Sensor: Ø2.63” x 1”
Package Contents   |   User Manual, Sensor, Sensor Cradle, Remote Sensor Prove, Battery, 1x Screws, 1x Wall Anchors

### Inclusion & Exclusion

> <img src="/images/leak-exploded-view.svg" class="line-art" alt="Leak Sensor Exploded View">
> <span class="caption"> Figure 1 - Exploded View</span>
> <img src="/images/leak-side-by-side.svg" class="line-art" alt="Parts of the Leak Sensor">
> <span class="caption"> Figure 2 - Parts of the A. Main Body Base, B. Main Body Cover, and C. Main Body Cradle</span>

**Inclusion**

1. For proper inclusion, bring the Leak Sensor to the final location where it will be used.*
2. Remove the MAIN BODY COVER by twisting it counterclockwise.
3. Remove the BATTERY TAB.
4. Press the BUTTON quickly 3 times in a row.  

The LED Indicator will flash five times indicating inclusion.

<aside class="notice">
*For non Z-Wave Plus networks, please consult the owner’s manual for your primary controller to determine the best method and location for adding the Leak Sensor to your Z-Wave network.
</aside>

**Exclusion**

Follow the instructions for your Z-Wave Certified Conto enter exclusion mode.  When prompted by the controller:

1. Remove the MAIN BODY COVER.
2. Press the BUTTON button quickly 3 times in a row.

The LED Indicator will flash five times indicating exclusion/disconnection.

### Factory Reset & Misc. Functions

**Resetting the Leak Sensor**

If needed, the Leak Sensor can be reset locally by following these steps.  

<aside class="warning">
Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system
</aside>

1. Remove the MAIN BODY COVER and confirm that your Leak Sensor is powered up.
2. Press and hold the BUTTON for at least 10 seconds then release.  A flashing light indicates a successful factory reset.

The Leak Sensor's memory will be erased to factory settings.

**Waking Up the Leak Sensor**

Because the Leak Sensor is a battery powered device, it wakes up on regular intervals to give battery and other status updates to the controller, as well as to accept configuration settings from the controller.  This helps to extend the battery life.  The device can be forced to wake up to submit these reports or accept new settings immediately by simply pressing and holding the BUTTON for half a second.  The LED INDICATOR will flash once indicating successful wake up.

###Physical Installation###

The device should already be included in your Z-Wave system before continuing further.  Study the Pre-Installation Checklist below for a broad overview of installation options and other notes to bear in mind.

**Pre-Installation Checklist**

* The MAIN BODY CRADLE and REMOTE SENSOR PROBE are optional, to help monitor hard-to-reach areas—study Figures 3 and 4 to understand when, where, and why to use the REMOTE SENSOR PROBE
* The Leak Sensor detects moisture the moment water contacts the METAL FEET on the REMOTE SENSOR PROBE or the MAIN BODY BASE
* To monitor a pipe or appliance for leaks, place the Leak Sensor nearby on a flat surface where water is likely to accumulate during a leak
* If there is not enough space for the SENSOR ASSEMBLY to fit, use the optional REMOTE SENSOR PROBE
* When using the REMOTE SENSOR PROBE, the SENSOR ASSEMBLY will rest in the MAIN BODY CRADLE
* All three METAL FEET should contact the surface
* The REMOTE SENSOR PROBE can also hang mid-air to monitor rising water levels (for example in a sump pump pit)

> <img src="/images/toilet-and-appliance-leak.svg" class="line-art" alt="Installing the Leak Sensor Near a Toilet or Appliance">
> <span class="caption"> Figures 3 & 4 - Installing the Leak Sensor Near a Toilet or Appliance.</span>

**Installation—Without the REMOTE SENSOR PROBE**

1. Make sure the Leak Sensor is already included in your Z-Wave System and bring it to your desired installation location.  
2. Confirm that your device can communicate with your Z-Wave Controller from the final installed location before proceeding.
3. Place the SENSOR ASSEMBLY on a flat surface near the device to be monitored (see “Pre-Installation Checklist” on page <?> for proper placement instructions.)
4. Double-check that your Z-Wave Controller can still communicate with the Leak Sensor, and pour a small amount of water on the floor to emulate a leak and confirm that the device beeps and reports the event to your Controller.


**Installation—With the REMOTE SENSOR PROBE**

Hard to reach areas can be monitored for leaks using the included REMOTE SENSOR PROBE (see “Pre-Installation Checklist” on page <?>.)

1. Mount the MAIN BODY CRADLE on a wall near the location you wish to monitor, making sure the REMOTE SENSOR PROBE’s cable will reach it comfortably.  You may optionally rest the MAIN BODY CRADLE, unmounted, on a table, shelf, or other surface.
2. Snap the SENSOR ASSEMBLY into the MAIN BODY CRADLE, making sure the METAL FEET on the SENSOR ASSEMBLY line up with their mates on the MAIN BODY CRADLE.
3. Plug the REMOTE SENSOR PROBE into the MAIN BODY CRADLE and place the other end of the PROBE in the area to monitor, making sure the METAL FEET are flat on the surface.

### LED Behavior

<table class="tg">
  <tr>
    <th class="tg-yw4l">Color</th>
    <th class="tg-yw4l">Behavior</th>
    <th class="tg-yw4l">This happens when...</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="6">Red</td>
    <td class="tg-yw4l">Blink 5 times in 5 seconds (slow)</td>
    <td class="tg-yw4l">…the Leak Sensor was just powered on, but is not yet included in a system.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink 5 times in 2.5 seconds (medium)</td>
    <td class="tg-yw4l">…the CONNECT BUTTON is pressed 3 times quickly (regardless of inclusion status.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink 5 times in 1.5 seconds (fast)</td>
    <td class="tg-yw4l">…the Leak Sensor is powered on, and already included in a system.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Stay on for 2+ seconds straight</td>
    <td class="tg-yw4l">…the CONNECT BUTTON is pressed and held for 10+ seconds, resetting Leak Sensor to factory settings.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blinks while Beeping</td>
    <td class="tg-yw4l">…the SENSOR detects a leak.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blinks once</td>
    <td class="tg-yw4l">…the CONNECT BUTTON is pushed once.</td>
  </tr>
</table>

<span class="caption-dark"> Table 2 - LED Behavior</span>

### Button Behavior

<table class="tg">
  <tr>
    <th  class="tg-yw4l">Action</th>
    <th  class="tg-yw4l">Condition</th>
    <th  class="tg-yw4l">Result</th>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press  the CONNECT BUTTON for 0.5 second</td>
    <td  class="tg-yw4l">Leak Sensor Already Included in System</td>
    <td  class="tg-yw4l">Device sends a wake up notification to its controller, awaits further instructions, and blinks the LED Indicator once</td>
  </tr>
  <tr>
    <td  class="tg-yw4l" rowspan="3">Push CONNECT BUTTON 3 Times</td>
    <td  class="tg-yw4l">Leak Sensor Already Included in System</td>
    <td  class="tg-yw4l">Device sends node info to Group 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Leak Sensor Already Included, and Controller is in Exclusion Mode</td>
    <td  class="tg-yw4l">Device is excluded from the system and removes the Home ID from its memory</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Leak Sensor Not Yet Included in System, and Controller is in Inclusion Mode</td>
    <td  class="tg-yw4l">Device enters inclusion mode and includes into whichever network is also in inclusion mode</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and hold CONNECT BUTTON for 10+ seconds</td>
    <td  class="tg-yw4l">Leak Sensor Already Included in System</td>
    <td  class="tg-yw4l">Device will be reset to factory settings, and a DEVICE_RESET_LOCALLY command will be sent to Node 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and Hold for 10+ seconds</td>
    <td  class="tg-yw4l">Any condition (as long as the device has power)</td>
    <td  class="tg-yw4l">The device’s memory will erase to factory default settings and any associations, configuration parameters, and other locally saved data will be lost</td>
  </tr>
</table>

<span class="caption-dark"> Table 3 - Button Behavior</span>

### Compatible Command Classes

<table class="tg">
  <tr>
    <th class="tg-yw42">Command Class</th>
    <th class="tg-yw43">Notes</th>
  </tr>
  <tr>
    <td class="tg-yw42">Device Reset Locally V1 (5A)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Powerlevel V1 (73)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Battery V1(80)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Association Group Information V1 (59)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Z-Wave Plus Info V2 (5E)</td>
    <td class="tg-yw43">

      <strong>Returned Value: 01 06 00 0C 05 0C 05</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Plus Version</td>
        <td>01</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Role Type</td>
        <td>06 <span class="subnote">(Slave Sleeping Reporting)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Node Type</td>
        <td>00 <span class="subnote">(Z-Wave Plus Node)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Installer Icon Type</td>
        <td>0C 05 <span class="subnote">(Water Alarm))</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">User Icon Type</td>
        <td>0C 05 <span class="subnote">(Water Alarm))</span></td>
      </tr>
    </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Version V2 (86)</td>
    <td class="tg-yw43">

      <center><strong>Returned Value: 06 04 05 02 28 10 00</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Library Type</td>
        <td>06 <span class="subnote">(Routing Slave)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Version</td>
        <td>04 05</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Sub-Version</td>
        <td>02 28 </td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Version</td>
        <td>10</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Sub-Version</td>
        <td>00</td>
      </tr>
    </table>


    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Manufacturer Specific V2 (72)</td>
    <td class="tg-yw43">
      <center><strong>Returned Value: 02 1F 00 03 01 85</strong></center>
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Manufacturer ID</td>
          <td>02 1F</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product Type</td>
          <td>00 03</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product ID</td>
          <td>00 85</td>
        </tr>
      </table>

    </td>
  </tr>
   <tr>
    <td class="tg-yw42">Binary Sensor (30)</td>
    <td class="tg-yw43">
      The Leak Sensor also sends a Binary Sensor Report when a leak is detected or removed.  See below for the SENSOR_BINARY_REPORT parameters sent:
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Sensor Type</td>
          <td>6 <span class="subnote">(Water)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Leak Detected Value</td>
          <td>FF</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Leak Removed Value</td>
          <td>00</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Association V2 (85)</td>
    <td class="tg-yw43">
      <p>
        <strong>Group 1</strong>
        <br>
      Group 1 is the “Lifeline” group, which can hold five members, typically including the main Z-Wave controller.  The Leak Sensor sends this group a Notification Report and a Binary Sensor Report when water is detected or removed.  It also sends this group a Battery Report in reponse to Battery Get commands and a Locally Reset Notification upon local reset.
      </p>
      <p>
        <strong>Group 2</strong>
        <br>
        The Leak Sensor sends a Basic Set command to Association Group 2 (or the Control Group) to directly trigger devices (like a light, chime, etc.) in response to a detected leak. Then, after the leak is no longer detected, a BASIC_SET(0x00) command is sent to reset the device (e.g. turn off the light.) The value of the Basic Set command (e.g. brightness of the lamp) is configured using configuration parameter 7.    
      </p>
      <p>
        <strong>Group 3</strong>
        <br>
        Group 3 supports up to 5 members and the Leak Sensor sends it a NOTIFICATION_REPORT when water is detected or removed.
      </p>
      <p>
        <strong>Group 4</strong>
        <br>
        Group 4 supports up to 5 members and the Leak Sensor sends it a SENSOR_BINARY_REPORT when water is detected or removed.
      </p>    
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Wake Up V2 (84)</td>
    <td class="tg-yw43">The wake-up interval is set in seconds, and is 43,200 seconds (12 hours) by default.  The wake-up interval can be set to any value from 300s (5 minutes) to 16,777,200s (about 190 days) in 60-second increments.</td>
  </tr>
  <tr>
    <td class="tg-yw42">Notification V4 (71)</td>
    <td class="tg-yw43">
      The Leak Sensor sends a Notification Report whenever  a leak is detected or removed.  
      <br>
      <center><strong>Returned Value: 00 00 00 FF 05 XX 00 00</strong></center>
      <br>
       <table>
        <tr>
          <td  class="tg-yw42">V1 Alarm Type</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">V1 Alarm Level</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Reserved</td>
          <td>00 <span class="subnote">(Reserved)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Notification Status</td>
          <td>FF <span class="subnote">(Unsolicited Reporting is Enabled)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Type</td>
          <td>05 <span class="subnote">(Water Alarm)</span></td>
        </tr>
        </tr>
        <tr>
          <td  class="tg-yw42">Leak Detected Event <br>Leak Removed Event</td>
          <td>02 <span class="subnote">(Water Leak Detected, Unknown Location)</span> <br> 00 <span class="subnote">(Event Inactive)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Sequence/Reserved/Event Parameters Length</td>
          <td>00</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Event Parameters</td>
          <td>00 <span class="subnote">(No Event Parameters)</span></td>
        </tr>

      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Configuration V1(70)</td>
    <td class="tg-yw43">See “Configuration” Command Class Parameters”.</td>
  </tr>

</table>
<span class="caption-dark"> Table 4 - Compatible Command Classes</span>

### “Configuration” Command Class Parameters
<p>Configuration parameters are sent using a standard syntax to ensure interoperability between all manufacturers’ products.  All values are represented using the hexadecimal number system.  
<br>Typical syntax is as shown below. Note that the value sent must be the exact size, in bytes, as accepted by the setting.  The “extra” spaces should be filled with zeros (see the “value” column below.) </p>
<p>Example Configuration Parameter: 02 02 00 0A
  <br>
  <table>
    <tr>
      <td  class="tg-yw4l">Param #</td>
      <td  class="tg-yw4l">Size</td>
      <td  class="tg-yw4l">Value</td>
    </tr>
    <tr>
      <td  class="tg-yw41">02<br><span class="subnote">(Param #2)</span></td>
      <td  class="tg-yw4l">02<br><span class="subnote">(2 Bytes)</span></td>
      <td  class="tg-yw4l">00 0A<br><span class="subnote">(Value)</span></td>
    </tr>
  </table>
</p>

When the Leak Sensor detects a leak, it beeps intermittently in the pattern shown in Figure 5. Total Alarm Duration, Mute Time, Initial Alarm, and Reminder Alarm duration times are all configurable using Configuration Parameters 1, 2, 3, and 4 respectively.  

> <img src="/images/leak-graph.svg" class="line-art" alt="Leak Sensor Audible Alarm Behavior">
> <span class="caption"> Figures 5 - Leak Sensor Audible Alarm Behavior.</span>

<table class="tg">
  <tr>
    <th class="tg-yw4l">Param #</th>
    <th class="tg-yw4l">Size</th>
    <th class="tg-yw4l">Name</th>
    <th class="tg-yw4l">Available Values</th>
    <th class="tg-yw4l">Default Value</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">01</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the total amount of time the Leak Sensor will beep and light its LED in the event of a leak (see Figure 5.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Total Alarm Duration</td>
    <td class="tg-yw4l">00 <span class="subnote">(Leak Sensor beeps until water is removed)</span><br>01 ~ FF <span class="subnote"> (1 ~ 255 in Minutes) </span></td>
    <td class="tg-yw4l">78 <br> <span class="subnote">(120 min)</span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">02</td>
    <td class="tg-yw4l" colspan="4">This parameter defines the amount of time the Leak Sensor remains quiet between each Reminder Alarm (see Fig 5.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Mute Time</td>
    <td class="tg-yw4l">01 ~ FF <br><span class="subnote">(1 ~ 255 minutes)</span></td>
    <td class="tg-yw4l">01 <br> <span class="subnote"> (1 min) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">03</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the amount of time the Leak Sensor beeps before it is muted (see Fig 5.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Initial Alarm</td>
    <td class="tg-yw4l">0A ~ FF <br> <span class="subnote">(0/Turn Off Device)</span></td>
    <td class="tg-yw4l">3C <br> <span class="subnote"> (60 sec)</span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">04</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the length of each beep after the Initial Alarm (see Fig 5.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Reminder Alarm</td>
    <td class="tg-yw4l">05 ~ FF <br><span class="subnote">(5 ~ 255 seconds)</span></td>
    <td class="tg-yw4l">05 <br> <span class="subnote"> (5 sec) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">05</td>
    <td class="tg-yw4l" colspan="4">This parameter enables or disables the audible alarm (“beeping”) functionality of the Leak Sensor.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable Audible Alarm</td>
    <td class="tg-yw4l">00 <span class="subnote">(Audible Alarm Disabled)</span><br>01 <span class="subnote">(Audible Alarm Enabled)</span></td>
    <td class="tg-yw4l">01 <br> <span class="subnote"> (Audible Alarm Enabled) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">06</td>
    <td class="tg-yw4l" colspan="4">This parameter enables or disables the Leak Sensor - if disabled, the device will not respond in any way to detected leaks.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable Water Detection</td>
    <td class="tg-yw4l">00 <span class="subnote">(Water Detection Disabled)</span><br>01 <span class="subnote">(Water Detection Enabled)</span></td>
    <td class="tg-yw4l">01 <br> <span class="subnote"> (Water Detection Enabled) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">07</td>
    <td class="tg-yw4l" colspan="4">This parameter defines the value sent by the BASIC_SET command to Association Group 2 (for more information, see “Assocation Groups”.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Basic Set Level</td>
    <td class="tg-yw4l">00 <span class="subnote">(0/Turn Off Device)</span><br>01 ~ 63 <span class="subnote">(0-99)</span><br>FF <span class="subnote">(-1/Turn On Device)</span></td>
    <td class="tg-yw4l">FF <br> <span class="subnote"> (-1/Turn On Device) </span></td>
  </tr>

</table>

<span class="caption-dark"> Table 5 - "Configuration" Command Class Parameters</span>


## On/Off Plug-In Switch

![Dome On/Off Plug-In Switch](/images/plug-3-4ths.png)

### Description & Features
The Dome On/Off Plug-In Switch is a Z-Wave Plus device that plugs into a standard 3-prong power outlet and lets you turn on or off any connected electronic device.  The On/Off Plug-In Switch also monitors how much energy the attached device uses, and reports the data to your Z-Wave Hub.


**Key Features**

* Z-Wave Plus Certified
* Turns on or off any plugged-in device
* Extends the range of your Z-Wave system
* Up to 150’ range
* Small size - won’t block the adjacent outlet!
* Fits any standard 3-prong American power outlet
* Reports energy consumption data
* Overload protection
* Max current - 13 A



### Specifications
**Technical Specifications**

Spec | Value
----:|----
Radio protocol  | Z-Wave(500 series)
Power supply  | 110-230V AC 50/60Hz  
Max current | 13A
Power Consumption | 0.13W
Radio frequency | 908.4 MHz US
Range | Up to 150’ depending on environment
Dimensions (L x W x H)  | Sensor: 1.8" x 1.8" x 1.8”
Package Contents   |   User Manual, On/Off Plug-In Switch

### Inclusion & Exclusion

> <img src="/images/plug-parts.svg" class="line-art" alt="Parts of the On/Off Plug-In Switch">
> <span class="caption"> Figure 1 - Parts of the On/Off Plug-In Switch</span>


**Inclusion**

Follow the instructions for your Z-Wave Certified Conto enter inclusion mode.  When prompted by the controller:

1. For proper inclusion, plug the On/Off Plug-In Switch into the outlet where it will be used.*
2. When prompted by the controller, quickly press the BUTTON 3 times.
3. A yellow LED will flash five times indicating inclusion.

<aside class="notice">
*For non Z-Wave Plus networks, please consult the owner’s manual for your primary controller to determine the best method and location for adding the Leak Sensor to your Z-Wave network.
</aside>

**Exclusion**

Follow the instructions for your Z-Wave Certified Conto enter exclusion mode.  When prompted by the controller:

1. Plug the On/Off Plug-In Switch into an outlet.
2. Press the BUTTON button quickly 3 times in a row.

A yellow LED will flash five times indicating exclusion/disconnection.

### Factory Reset & Misc. Functions

**Resetting the On/Off Plug-In Switch**

If needed, the On/Off Plug-In Switch can be reset locally by following these steps.  

<aside class="warning">
Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system
</aside>

1. Confirm that your On/Off Plug-In Switch is powered up.
2. Press and hold the BUTTON for at least 10 seconds then release.  The LED will blink once in a red color followed by 5 times in a pink color indicating a successful factory reset.

The On/Off Plug-In Switch’s memory will be erased to factory settings.

###Physical Installation###

The On/Off Plug-In Switch can be installed in any standard 3-prong American power outlet.  To control or monitor an electronic device, simply plug it into the DEVICE PORT.  Make sure there is sufficient Z-Wave coverage in your desired installation location.

### LED Behavior

<table class="tg">
  <tr>
    <th class="tg-yw4l">Color</th>
    <th class="tg-yw4l">Behavior</th>
    <th class="tg-yw4l">This happens when...</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">Pink</td>
    <td class="tg-yw4l">Blink 5 times in 1 second</td>
    <td class="tg-yw4l">…the device powers on, but is not yet included in a Z-Wave Network.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink 5 times in 500ms</td>
    <td class="tg-yw4l">…the BUTTON is pushed 3 times after the On/Off Plug-In Switch is already in a Z-Wave network, and the device sends a notification with its Node Info.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blue</td>
    <td class="tg-yw4l">Blink 5 times in 300ms</td>
    <td class="tg-yw4l">…the device powers on, and is arleady included in a Z-wave network.</td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">Yellow</td>
    <td class="tg-yw4l">Blink 5 times in 500ms</td>
    <td class="tg-yw4l">…the BUTTON is pushed three times, including the On/Off Plug-In Switch into a Z-Wave network.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Always On</td>
    <td class="tg-yw4l">…the current is above the limit set in Param 4 (12A by default.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">Red</td>
    <td class="tg-yw4l">Blink Once</td>
    <td class="tg-yw4l">…the BUTTON is pressed for an extended period of time, resetting the On/Off Plug-In Switch to factory default settings.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink Once a Second</td>
    <td class="tg-yw4l">…the current is above the limit set in Param 3 (13A by default.)  Power will be shut off; LED and power will return to normal when the current drops below the level set in Param 3 and the BUTTON is pushed once.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Green</td>
    <td class="tg-yw4l">Always On</td>
    <td class="tg-yw4l">…the On/Off Plug-In Switch is powered on.</td>
  </tr>
</table>

<span class="caption-dark"> Table 2 - LED Behavior</span>

### Button Behavior

<table class="tg">
  <tr>
    <th  class="tg-yw4l">Action</th>
    <th  class="tg-yw4l">Condition</th>
    <th  class="tg-yw4l">Result</th>
  </tr>
  <tr>
    <td  class="tg-yw4l" rowspan="2">Press  the BUTTON Once</td>
    <td  class="tg-yw4l">Param 10 = 1</td>
    <td  class="tg-yw4l">Turn Device on or off</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Param 10 = 0</td>
    <td  class="tg-yw4l">Nothing</td>
  </tr>
  <tr>
    <td  class="tg-yw4l" rowspan="3">Push CONNECT BUTTON 3 Times</td>
    <td  class="tg-yw4l">On/Off Plug-In Switch Already Included in System</td>
    <td  class="tg-yw4l">Device sends node info to Group 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">On/Off Plug-In Switch Already Included in System and Controller is in Exclusion Mode</td>
    <td  class="tg-yw4l">Device is excluded from the system and removes the Home ID from its memory</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">On/Off Plug Not Yet Included in System</td>
    <td  class="tg-yw4l">Device enters inclusion mode and includes into whichever network is also in inclusion mode</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and hold CONNECT BUTTON for 10+ seconds</td>
    <td  class="tg-yw4l">All conditions</td>
    <td  class="tg-yw4l">Device will be reset to factory settings, and a DEVICE_RESET_LOCALLY command will be sent to Node 1</td>
  </tr>
</table>

<span class="caption-dark"> Table 3 - Button Behavior</span>

### Compatible Command Classes

<table class="tg">
  <tr>
    <th class="tg-yw42">Command Class</th>
    <th class="tg-yw43">Notes</th>
  </tr>
  <tr>
    <td class="tg-yw42">Device Reset Locally V1 (5A)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Powerlevel V1 (73)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Association Group Information V1 (59)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Binary Switch V1 (25)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">All Switch V1 (27)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Basic V1 (20)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Z-Wave Plus Info V2 (5E)</td>
    <td class="tg-yw43">

      <strong>Returned Value: 01 05 00 07 00 07 00</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Plus Version</td>
        <td>01</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Role Type</td>
        <td>05 <span class="subnote">(Slave - Always On)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Node Type</td>
        <td>00 <span class="subnote">(Z-Wave Plus Node)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Installer Icon Type</td>
        <td>07 00 <span class="subnote">(Generic Relay Device))</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">User Icon Type</td>
        <td>07 00 <span class="subnote">(Generic Relay Device))</span></td>
      </tr>
    </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Version V2 (86)</td>
    <td class="tg-yw43">

      <center><strong>Returned Value: 03 04 05 03 46 41 00</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Library Type</td>
        <td>03 <span class="subnote">(Enhanced Slave)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Version</td>
        <td>04 05</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Sub-Version</td>
        <td>03 46 </td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Version</td>
        <td>41</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Sub-Version</td>
        <td>00</td>
      </tr>
    </table>


    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Manufacturer Specific V2 (72)</td>
    <td class="tg-yw43">
      <center><strong>Returned Value: 02 1F 00 03 00 87</strong></center>
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Manufacturer ID</td>
          <td>02 1F</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product Type</td>
          <td>00 03</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product ID</td>
          <td>00 87</td>
        </tr>
      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Association V2 (85)</td>
    <td class="tg-yw43">
      <p>
        <strong>Group 1</strong>
        <br>
      Group 1 is the “Lifeline” group, which can hold five devices.  The On/Off Plug-In Switch sends this group a Notification Report and Binary Switch Report whenever it is turned on or off.  It also sends a Meter Report incrementally based on time (see Param 2,) or when a relative change in power usage is detected (see Param 6.)  Finally, the On/Off Plug-In Switch sends this group a Device Reset Locally notification to remove itself from the Z-Wave network.  
      </p>
      <p>
        <strong>Group 2</strong>
        <br>
        The On/Off Plug-In Switch sends a BASIC_SET(FF) command to Association Group 2 to directly trigger devices (like a siren, chime, etc.) when the current passes above the level set in Parameter 3.  When the current drops below the level again, a BASIC_SET(00) command is sent to reset the device (e.g. turn off the siren.)  This Group can hold five devices.    
      </p>
      <p>
        <strong>Group 3</strong>
        <br>
        The On/Off Plug-In Switch sends Notification Reports to Group 3, and it can hold five devices.
      </p>
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Notification V4 (71)</td>
    <td class="tg-yw43">

      The On/Off Plug-In Switch sends a NOTIFICATION_REPORT to Group 1 when the current load passes the level set in Param 3, and another report when it drops back below this level. See below for the NOTIFICATION_REPORT parameters sent:  

      <center><strong>Returned Value: 00 00 00 FF 08 XX 00 00</strong></center>
      <br>
       <table>
        <tr>
          <td  class="tg-yw42">V1 Alarm Type</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">V1 Alarm Level</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Reserved</td>
          <td>00 <span class="subnote">(Reserved)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Notification Status</td>
          <td>FF <span class="subnote">(Unsolicited Reporting is Enabled)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Type</td>
          <td>08 <span class="subnote">(Power Management)</span></td>
        </tr>
        </tr>
        <tr>
          <td  class="tg-yw42">Overload Detected Event <br>No More Overload Event</td>
          <td>08 <span class="subnote">(Overload)</span> <br> 00 <span class="subnote">(Event Inactive)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Sequence/Reserved/Event Parameters Length</td>
          <td>00</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Event Parameters</td>
          <td>00 <span class="subnote">(No Event Parameters)</span></td>
        </tr>

      </table>

    </td>
  </tr>
 <tr>
    <td class="tg-yw42">Meter V4 (32)</td>
    <td class="tg-yw43">

      When enabled (see Param 1,) the On/Off Plug-In Switch sends period updates with various usage information to Group 1 using the Meter Command Class.  These reports are sent periodically (every 300s by default - see Param 2) as well as when a change in current is detected (see Param 6.)

      Voltage—The voltage currently being supplied by the plug (in V)
      Current—The current being supplied by the plug (in A)
      Power—The power supplied by the plug instantaneously (in W)
      Energy—The amount of energy supplied per unit time (in kWh)  

      <center><strong>Returned Value: 21 44 XX XX XX XX YY YY ZZ ZZ ZZ ZZ 00</strong></center>

      <br>
       <table>
        <tr>
          <td  class="tg-yw42">Scale/Rate Type/Meter Type/Size/Precision</td>
          <td>
            21 44 <span class="subnote">(0010 0001 0100 0100)</span>
            <br>
            Scale (2)—0
            <br>
            Rate Type—01 <span class="subnote"> (Import [Consumed])</span>
            <br>
            Meter Type—0 0001 <span class="subnote"> (Electric Meter)</span>
            <br>
            Precision—010 <span class="subnote"> (2 decimal places)</span>
            <br>
            Scale (1:0)—0 0
            <br>
            Size—100 <span class="subnote"> (4 Bytes)</span>
            <br>
            Scale (Summed)—0 0 0 <span class="subnote"> (Kilowatt-Hours)</span>
          </td>
        </tr>
        <tr>
          <td  class="tg-yw42">Meter Value</td>
          <td>80 00 00 00 ~ 7F FF FF FF<span class="subnote"> (-2,147,483,648 ~ 2,147,483,647 in kWh)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Delta Time</td>
          <td>00 00 ~ FF FF<span class="subnote"> (0 ~ 65,535 in seconds)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Previous Value</td>
          <td>80 00 00 00 ~ 7F FF FF FF<span class="subnote"> (-2,147,483,648 ~ 2,147,483,647 in kWh)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Scale 2</td>
          <td>00</td>
        </tr>
        </table>


      <center><strong>Returned Value: 21 54 XX XX XX XX YY YY ZZ ZZ ZZ ZZ 00</strong></center>

      <br>
       <table>
        <tr>
          <td  class="tg-yw42">Scale/Rate Type/Meter Type/Size/Precision</td>
          <td>
          21 54 <span class="subnote">(0010 0001 0101 0100)</span>
          <br>
          Scale (2)—0
          <br>
          Rate Type—01 <span class="subnote"> (Import [Consumed])</span>
          <br>
          Meter Type—0 0001 <span class="subnote"> (Electric Meter)</span>
          <br>
          Precision—010 <span class="subnote"> (2 decimal places)</span>
          <br>
          Scale (1:0)—1 0
          <br>
          Size—100 <span class="subnote"> (4 Bytes)</span>
          <br>
          Scale (Summed)—0 1 0 <span class="subnote"> (Watts)</span>
          </td>
        </tr>
        <tr>
          <td  class="tg-yw42">Meter Value</td>
          <td>80 00 00 00 ~ 7F FF FF FF<span class="subnote"> (-2,147,483,648 ~ 2,147,483,647 in W)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Delta Time</td>
          <td>00 00 ~ FF FF<span class="subnote"> (0 ~ 65,535 in seconds)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Previous Value</td>
          <td>80 00 00 00 ~ 7F FF FF FF<span class="subnote"> (-2,147,483,648 ~ 2,147,483,647 in W)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Scale 2</td>
          <td>00</td>
        </tr>
        </table>



      <center><strong>Returned Value: A1 42 XX XX YY YY ZZ ZZ 00</strong></center>

      <br>
       <table>
        <tr>
          <td  class="tg-yw42">Scale/Rate Type/Meter Type/Size/Precision</td>
          <td>
          A1 42 <span class="subnote">(1010 0001 0100 0010)</span>
          <br>
          Scale (2)—1
          <br>
          Rate Type—01 <span class="subnote"> (Import [Consumed])</span>
          <br>
          Meter Type—0 0001 <span class="subnote"> (Electric Meter)</span>
          <br>
          Precision—010 <span class="subnote"> (2 decimal places)</span>
          <br>
          Scale (1:0)—0 0
          <br>
          Size—010 <span class="subnote"> (2 Bytes)</span>
          <br>
          Scale (Summed)—1 0 0 <span class="subnote"> (Volts)</span>
          </td>
        </tr>
        <tr>
          <td  class="tg-yw42">Meter Value</td>
          <td>80 00 ~ 7F FF<span class="subnote"> (-32,768 ~ 32,767 in V)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Delta Time</td>
          <td>00 00 ~ FF FF<span class="subnote"> (0 ~ 65,535 in seconds)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Previous Value</td>
          <td>80 00 ~ 7F FF<span class="subnote"> (-32,768 ~ 32,767 in V)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Scale 2</td>
          <td>00</td>
        </tr>
        </table>



      <center><strong>Returned Value: A1 4A XX XX YY YY ZZ ZZ 00</strong></center>

      <br>
       <table>
        <tr>
          <td  class="tg-yw42">Scale/Rate Type/Meter Type/Size/Precision</td>
          <td>
          A1 4A <span class="subnote">(1010 0001 0100 1010)</span>
          <br>
          Scale (2)—1
          <br>
          Rate Type—01 <span class="subnote"> (Import [Consumed])</span>
          <br>
          Meter Type—0 0001 <span class="subnote"> (Electric Meter)</span>
          <br>
          Precision—010 <span class="subnote"> (2 decimal places)</span>
          <br>
          Scale (1:0)—0 1
          <br>
          Size—010 <span class="subnote"> (2 Bytes)</span>
          <br>
          Scale (Summed)—1 0 1 <span class="subnote"> (Amperes)</span>
          </td>
        </tr>
        <tr>
          <td  class="tg-yw42">Meter Value</td>
          <td>80 00 ~ 7F FF<span class="subnote"> (-32,768 ~ 32,767 in A)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Delta Time</td>
          <td>00 00 ~ FF FF<span class="subnote"> (0 ~ 65,535 in seconds)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Previous Value</td>
          <td>80 00 ~ 7F FF<span class="subnote"> (-32,768 ~ 32,767 in A)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Scale 2</td>
          <td>00</td>
        </tr>
        </table>
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Configuration V1(70)</td>
    <td class="tg-yw43">See “Configuration” Command Class Parameters”.</td>
  </tr>

</table>
<span class="caption-dark"> Table 4 - Compatible Command Classes</span>

### “Configuration” Command Class Parameters
<p>Configuration parameters are sent using a standard syntax to ensure interoperability between all manufacturers’ products.  All values are represented using the hexadecimal number system.  
<br>Typical syntax is as shown below. Note that the value sent must be the exact size, in bytes, as accepted by the setting.  The “extra” spaces should be filled with zeros (see the “value” column below.) </p>
<p>Example Configuration Parameter: 02 02 00 0A
  <br>
  <table>
    <tr>
      <td  class="tg-yw4l">Param #</td>
      <td  class="tg-yw4l">Size</td>
      <td  class="tg-yw4l">Value</td>
    </tr>
    <tr>
      <td  class="tg-yw41">02<br><span class="subnote">(Param #2)</span></td>
      <td  class="tg-yw4l">02<br><span class="subnote">(2 Bytes)</span></td>
      <td  class="tg-yw4l">00 0A<br><span class="subnote">(Value)</span></td>
    </tr>
  </table>
</p>


<table class="tg">
  <tr>
    <th class="tg-yw4l">Param #</th>
    <th class="tg-yw4l">Size</th>
    <th class="tg-yw4l">Name</th>
    <th class="tg-yw4l">Available Values</th>
    <th class="tg-yw4l">Default Value</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">01</td>
    <td class="tg-yw4l" colspan="4">This parameter enables/disables the METER_REPORT function, which sends periodic reports to Group1 members with information on line voltage, current load, and power & energy consumption.  Also see Param 2 & 6.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable METER_REPORT</td>
    <td class="tg-yw4l">00 <span class="subnote">(Disable Meter Functionality)</span><br>01 <span class="subnote">(Enable Meter Functionality)</span></td>
    <td class="tg-yw4l">01 <br> <span class="subnote"> (Meter Enabled) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">02</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the amount of time between each successive METER_REPORT signal sent to Group 1 (also see Param 1 & 6.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">02</td>
    <td class="tg-yw4l">METER_REPORT Interval</td>
    <td class="tg-yw4l">00 01 ~ FF FF <span class="subnote">(1 ~ 65,535 in Seconds)</span></td>
    <td class="tg-yw4l">01 2C <br> <span class="subnote"> (300 Sec) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">03</td>
    <td class="tg-yw4l" colspan="4">Sets the maximum current the plug will pass before it cuts off power and sends a NOTIFICATION_EVENT_POWER_MANAGEMENT_OVER_LOAD_DETECTED signal to Group 1 and a BASIC_SET(FF) to Group 2.  The LED will then blink red once per second until the notification is cleared after the current returns to normal.  To clear the NOTIFICATION and start monitoring again, the BUTTON must be pushed once (only after the current is back to normal) or a BINARY_SWITCH_SET(FF) command must be sent.  
NOTE: this value must be higher than Param 4</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Set “Overload” Current Level</td>
    <td class="tg-yw4l">01 ~ 10 <br><span class="subnote">(1 ~ 16 in Amps)</span></td>
    <td class="tg-yw4l">0D <br> <span class="subnote"> (13 Amps) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">04</td>
    <td class="tg-yw4l" colspan="4">Sets the current level at which the On/Off Plug-In Switch will flash its LED yellow, until the current returns to below this level.  It will NOT cut off current to the device; this functions as a visible warning to the user.
NOTE: this value must be lower than Param 3</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Set “Alert” Current Level</td>
    <td class="tg-yw4l">01 ~ Param(3) <br><span class="subnote">(in Amps)</span></td>
    <td class="tg-yw4l">0C <br> <span class="subnote"> (12 Amps) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">05</td>
    <td class="tg-yw4l" colspan="4">This parameter enables or disables the indicator LED.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable Indicator LED</td>
    <td class="tg-yw4l">00 <span class="subnote">(Disable LED)</span><br>01 <span class="subnote">(Enable LED)</span></td>
    <td class="tg-yw4l">01 <br> <span class="subnote"> (LED Enabled) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">06</td>
    <td class="tg-yw4l" colspan="4">In addition to sending a METER_REPORT to Group 1 in the time interval set by Param 2, the On/Off Plug-In Switch also sends a METER_REPORT when it detects a relative change in current flow.  This parameter sets this minimum current change amount, in percent, at which point the On/Off Plug-In Switch will send a METER_REPORT to Group 1.  Also see Param 1 & 2.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Current change METER_REPORT level</td>
    <td class="tg-yw4l">01 ~ 64<br><span class="subnote">(1 ~ 100 in % change in Amps)</span></td>
    <td class="tg-yw4l">05 <br> <span class="subnote"> (5%) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">07</td>
    <td class="tg-yw4l" colspan="4">This parameter sets whether or not the On/Off Plug-In Switch will remember if it was turned on or off when it was last plugged in.  If enabled, whenever the device is rebooted (plugged in and out of the main outlet,) it will resume its state from before the reboot.  If disabled, it will turn on everytime the device is rebooted.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Remember On/Off Status</td>
    <td class="tg-yw4l">00 <span class="subnote">(Don't Remember On/Off Status)</span><br>01 <span class="subnote">(Remember On/Off Status)</span></td>
    <td class="tg-yw4l">01<br> <span class="subnote"> (Remember Status) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">08</td>
    <td class="tg-yw4l" colspan="4">If this parameter is enabled, whenever the On/Off Plug-In Switch is turned on, it will automatically turn off after a set amount of time (set in Param 9.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable Timer Function</td>
    <td class="tg-yw4l">00<span class="subnote">(Disable Timer Functionality)</span><br>01<span class="subnote">(Enable Timer Functionality)</span></td>
    <td class="tg-yw4l">00<br> <span class="subnote"> (Timer Disabled) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">09</td>
    <td class="tg-yw4l" colspan="4">Sets the time interval before the On/Off Plug-In Switch automatically shuts off.  See Param 8.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">02</td>
    <td class="tg-yw4l">Set Timer Time Interval</td>
    <td class="tg-yw4l">00 01 ~ FF FF<br><span class="subnote">(1 ~ 65,535 in Minutes)</span></td>
    <td class="tg-yw4l">00 96<br> <span class="subnote"> (150 Min) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">0A</td>
    <td class="tg-yw4l" colspan="4">If this parameter is enabled, the user can turn the device on or off using the BUTTON.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable BUTTON</td>
    <td class="tg-yw4l">00<span class="subnote">(Disable Button)</span><br>01<span class="subnote">(Enable Button)</span></td>
    <td class="tg-yw4l">01<br> <span class="subnote"> (Button Enabled) </span></td>
  </tr>

</table>

<span class="caption-dark"> Table 5 - "Configuration" Command Class Parameters</span>

## Mouser

![Dome Mouser](/images/mouser-3-4ths.png)

### Description & Features
The Dome Mouser is a battery powered Z-Wave Plus enabled mousetrap that works by electrocution and is designed to be humane and painless to the rodent.  After a mouse is caught, the Mouser will send a Z-Wave signal to its controller to notify the user, and will not retrigger until the trap is reset.  


**Key Features**

* Z-Wave Plus Certified
* Up to 150’ wireless range, depending on environment
* Quick and painless for both the mouse and the human
* Mess-free rodent removal
* Will work with or without Z-Wave connectivity
* Physical arm/disarm button for added safety
* Two-Year Battery Life—equivalent to 50+ zaps
* Low Battery Indication


### Specifications
**Technical Specifications**

Spec | Value
----:|----
Radio protocol  | Z-Wave(500 series)
Power supply  | 4x 1.5V AA Size Batteries  
Working current | 100mA
Power Consumption | 0.6W
Radio frequency | 908.4 MHz US
Range | Up to 150’ depending on environment
Dimensions (L x W x H)  | Sensor: 8.5” x 4.5” x 5”
Package Contents   |   User Manual, Mouser

### Inclusion & Exclusion

> <img src="/images/mouser-side-by-side.png" class="line-art" alt="Parts of the Mouser">
> <span class="caption"> Figure 1 - Parts of the Mouser</span>
> <img src="/images/mouser-bait-holder.png" class="line-art" alt="Removing the Bait Holder">
> <span class="caption"> Figure 2 - Removing the Bait Holder</span>

**Inclusion**

1. For proper inclusion, bring the Mouser to the final location where it will be used.*
2. Remove top cover by sliding it back and lifting up.
3. Insert batteries.
4. Press the CONNECT BUTTON quickly 3 times in a row.

The LED Indicator will flash five times indicating inclusion.

<aside class="notice">
*For non Z-Wave Plus networks, please consult the owner’s manual for your primary controller to determine the best method and location for adding the Leak Sensor to your Z-Wave network.
</aside>

**Exclusion**

Follow the instructions for your Z-Wave Certified Conto enter exclusion mode.  When prompted by the controller:

1. Remove top cover by sliding it back and lifting up.
2. Press the CONNECT BUTTON button quickly 3 times in a row.

The LED Indicator will flash five times indicating exclusion/disconnection.

### Factory Reset & Misc. Functions

**Resetting the Mouser**

If needed, the Mouser can be reset locally by following these steps.  

<aside class="warning">
Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system
</aside>

1. Remove the TOP COVER and confirm that your Mouser is powered up.
2. Press and hold the CONNECT BUTTON for at least 10 seconds then release.  A flashing LED INDICATOR indicates a successful factory reset.
3. The Mouser’s memory will be erased to factory settings.   

The Mouser's memory will be erased to factory settings.

**Waking Up the Mouser**

Because the Mouser is a battery powered device, it wakes up on regular intervals to give battery and other status updates to the controller, as well as to accept configuration settings from the controller.  This helps to extend the battery life.  The device can be forced to wake up to submit these reports or accept new settings immediately by simply pressing and holding the BUTTON for half a second.  The LED INDICATOR will flash once indicating successful wake up.

###Physical Installation###

**How to Use—Baiting the Trap**

1. Lift the BAIT HOLDER from the Mouser.
2. Add bait - dry foods (like peanuts) leave less mess.
3. Replace the BAIT HOLDER.

**How to Use—Setting the Trap**

1. Bait the Mouser.
2. Place the Mouser in the desired location - rodents usually scurry around walls and other corners.
3. Flip On/Off Button to the On position - the LED will stay lit for two seconds indicating the Mouser is armed. A flashing LED indicates low battery.
4. When the Mouser is tripped. the LED will blink every five seconds, and an alert will be sent to your Z-Wave Controller.
5. Flip the On/Off Button to the Off position to empty the Mouser, andit is ready to use again immediately.

### LED Behavior

<table class="tg">
  <tr>
    <th class="tg-yw4l">Color</th>
    <th class="tg-yw4l">Behavior</th>
    <th class="tg-yw4l">This happens when...</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="8">Red</td>
    <td class="tg-yw4l">Blink 5 times in 5 seconds (slow)</td>
    <td class="tg-yw4l">…the Mouser was just powered on, but is not yet included in a system.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink 5 times in 2.5 seconds (medium)</td>
    <td class="tg-yw4l">…the CONNECT BUTTON is pressed 3 times quickly (regardless of inclusion status.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blink 5 times in 1.5 seconds (fast)</td>
    <td class="tg-yw4l">…the Mouser is powered on, and already included in a system.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Stay on for 2+ seconds straight</td>
    <td class="tg-yw4l">…the CONNECT BUTTON is pressed and held for 10+ seconds, resetting Mouser to factory settings OR the CONNECT BUTTON is pushed once.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blinks once every 3 seconds</td>
    <td class="tg-yw4l">…the trap is tripped and needs to be emptied.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Stays on for 2 seconds</td>
    <td class="tg-yw4l">...Battery is high when the ARM/DISARM BUTTON is pushed to the “Arm” Position</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blinks three times</td>
    <td class="tg-yw4l">...Battery is low when the ARM/DISARM BUTTON is pushed to the “Arm” Position</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Stays on constantly</td>
    <td class="tg-yw4l">...Battery is about to die when the ARM/DISARM BUTTON is pushed to the “Arm” Position</td>
  </tr>
</table>

<span class="caption-dark"> Table 2 - LED Behavior</span>

### Button Behavior

<table class="tg">
  <tr>
    <th  class="tg-yw4l">Action</th>
    <th  class="tg-yw4l">Condition</th>
    <th  class="tg-yw4l">Result</th>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press  the CONNECT BUTTON for 0.5 second</td>
    <td  class="tg-yw4l">Mouser Already Included in System</td>
    <td  class="tg-yw4l">Device sends a wake up notification to its controller, awaits further instructions, and blinks the LED Indicator once</td>
  </tr>
  <tr>
    <td  class="tg-yw4l" rowspan="3">Push CONNECT BUTTON 3 Times</td>
    <td  class="tg-yw4l">Mouser Already Included in System</td>
    <td  class="tg-yw4l">Device sends node info to Group 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Mouser Already Included, and Controller is in Exclusion Mode</td>
    <td  class="tg-yw4l">Device is excluded from the system and removes the Home ID from its memory</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Mouser Not Yet Included in System, and Controller is in Inclusion Mode</td>
    <td  class="tg-yw4l">Device enters inclusion mode and includes into whichever network is also in inclusion mode</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and hold CONNECT BUTTON for 10+ seconds</td>
    <td  class="tg-yw4l">Mouser Already Included in System</td>
    <td  class="tg-yw4l">Device will be reset to factory settings, and a DEVICE_RESET_LOCALLY command will be sent to Node 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and Hold for 10+ seconds</td>
    <td  class="tg-yw4l">Any condition (as long as the device has power)</td>
    <td  class="tg-yw4l">The device’s memory will erase to factory default settings and any associations, configuration parameters, and other locally saved data will be lost</td>
  </tr>
</table>

<span class="caption-dark"> Table 3 - Button Behavior</span>


### Compatible Command Classes

<table class="tg">
  <tr>
    <th class="tg-yw42">Command Class</th>
    <th class="tg-yw43">Notes</th>
  </tr>
  <tr>
    <td class="tg-yw42">Device Reset Locally V1 (5A)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Powerlevel V1 (73)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Battery V1(80)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Association Group Information V1 (59)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Z-Wave Plus Info V2 (5E)</td>
    <td class="tg-yw43">

      <strong>Returned Value:  01 06 00 0C 07 0C 07</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Plus Version</td>
        <td>01</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Role Type</td>
        <td>06 <span class="subnote">(Slave Sleeping Reporting)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Node Type</td>
        <td>00 <span class="subnote">(Z-Wave Plus Node)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Installer Icon Type</td>
        <td>0C 07 <span class="subnote">(Home Security Alarm))</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">User Icon Type</td>
        <td>0C 07 <span class="subnote">(Home Security Alarm))</span></td>
      </tr>
    </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Version V2 (86)</td>
    <td class="tg-yw43">

      <center><strong>Returned Value: 06 04 05 03 10 52 00</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Library Type</td>
        <td>06 <span class="subnote">(Routing Slave)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Version</td>
        <td>04 05</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Sub-Version</td>
        <td>03 10 </td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Version</td>
        <td>52</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Sub-Version</td>
        <td>00</td>
      </tr>
    </table>


    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Manufacturer Specific V2 (72)</td>
    <td class="tg-yw43">
      <center><strong>Returned Value: 02 1F 00 03 01 04</strong></center>
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Manufacturer ID</td>
          <td>02 1F</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product Type</td>
          <td>00 03</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product ID</td>
          <td>01 04</td>
        </tr>
      </table>

    </td>
  </tr>

  <tr>
    <td class="tg-yw42">Association V2 (85)</td>
    <td class="tg-yw43">
      <p>
        <strong>Group 1</strong>
        <br>
      Group 1 is the “Lifeline” group, which can hold five members, typically including the main Z-Wave controller.  The Door/Window Sensor sends this group a Notification Report and a Binary Sensor Report when it is tripped, reset, armed, and disarmed.  It also sends this group a Battery Report in reponse to Battery Get commands.
      </p>
      <p>
        <strong>Group 2</strong>
        <br>
        The Mouser sends a Basic Set command to Association Group 2 (or the Control Group) to directly trigger devices (like a light, chime, etc.) when it is tripped. After the trap is reset, a BASIC_SET(00) command is sent to reset the device (e.g. turn off the light.) The value of the Basic Set command (e.g. brightness of the lamp) is configured using configuration parameter 1.      
      </p>
      <p>
        <strong>Group 3</strong>
        <br>
        Group 3 supports up to 5 members and the Mouser sends it a NOTIFICATION_REPORT when tripped, reset, armed, and disarmed.

      </p>
      <p>
        <strong>Group 4</strong>
        <br>
        Group 4 supports up to 5 members and the Mouser sends it a SENSOR_BINARY_REPORT when tripped, reset, armed, and disarmed.
      </p>    
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Wake Up V2 (84)</td>
    <td class="tg-yw43">The wake-up interval is set in seconds, and is 43,200 seconds (12 hours) by default.  The wake-up interval can be set to any value from 300s (5 minutes) to 16,777,200s (about 190 days) in 60-second increments.</td>
  </tr>
  <tr>
    <td class="tg-yw42">Notification V4 (71)</td>
    <td class="tg-yw43">
      The Mouser sends a Notification Report when the trap is triggered, reset, armed, and disarmed.  It primarily uses the Pest Control Notification Type, but also sends a Home Security, Motion Detected (Unknown Location) Report when the trap is triggered and a Home Security, Event Inactive when the trap is reset to ensure compatibility with all Z-Wave Controllers.  
      <br>
      <center><strong>Returned Value: 00 00 00 FF 13 XX 00 00</strong></center>
      <br>
       <table>
        <tr>
          <td  class="tg-yw42">V1 Alarm Type</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">V1 Alarm Level</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Reserved</td>
          <td>00 <span class="subnote">(Reserved)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Notification Status</td>
          <td>FF <span class="subnote">(Unsolicited Reporting is Enabled)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Type</td>
          <td>13 <span class="subnote">(Pest Control)</span></td>
        </tr>
        </tr>
        <tr>
          <td  class="tg-yw42">Pest Exterminated Event <br>Pest Removed Event <br>Trap Armed Event <br>Trap Unarmed Event </td>
          <td>08 <span class="subnote">(Pest Exterminated, Unknown Location)</span> <br> 00 <span class="subnote">(State Cleared)</span><br> 02 <span class="subnote">(Trap Armed, Unknown Location)</span><br> 04 <span class="subnote">(Trap Re-Arm Required, Unknown Location)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Sequence/Reserved/Event Parameters Length</td>
          <td>00</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Event Parameters</td>
          <td>00 <span class="subnote">(No Event Parameters)</span></td>
        </tr>

      </table>

      <br>
      <center><strong>Returned Value: 00 00 00 FF 07 XX 00 00</strong></center>
      <br>
       <table>
        <tr>
          <td  class="tg-yw42">V1 Alarm Type</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">V1 Alarm Level</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Reserved</td>
          <td>00 <span class="subnote">(Reserved)</span></td>
        </tr>
          <tr>
          <td  class="tg-yw42">Notification Status</td>
          <td>FF <span class="subnote">(Unsolicited Reporting is Enabled)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Type</td>
          <td>07 <span class="subnote">(Home Security)</span></td>
        </tr>
        </tr>
        <tr>
          <td  class="tg-yw42">Pest Exterminated Event <br>Pest Removed Event</td>
          <td>08 <span class="subnote">(Motion Detected, Unknown Location)</span> <br> 00 <span class="subnote">(Event Inactive)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Sequence/Reserved/Event Parameters Length</td>
          <td>00</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Event Parameters</td>
          <td>00 <span class="subnote">(No Event Parameters)</span></td>
        </tr>

      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Configuration V1(70)</td>
    <td class="tg-yw43">See “Configuration” Command Class Parameters”.</td>
  </tr>

</table>
<span class="caption-dark"> Table 4 - Compatible Command Classes</span>

### “Configuration” Command Class Parameters
<p>Configuration parameters are sent using a standard syntax to ensure interoperability between all manufacturers’ products.  All values are represented using the hexadecimal number system.  
<br>Typical syntax is as shown below. Note that the value sent must be the exact size, in bytes, as accepted by the setting.  The “extra” spaces should be filled with zeros (see the “value” column below.) </p>
<p>Example Configuration Parameter: 02 02 00 0A
  <br>
  <table>
    <tr>
      <td  class="tg-yw4l">Param #</td>
      <td  class="tg-yw4l">Size</td>
      <td  class="tg-yw4l">Value</td>
    </tr>
    <tr>
      <td  class="tg-yw41">02<br><span class="subnote">(Param #2)</span></td>
      <td  class="tg-yw4l">02<br><span class="subnote">(2 Bytes)</span></td>
      <td  class="tg-yw4l">00 0A<br><span class="subnote">(Value)</span></td>
    </tr>
  </table>
</p>


<table class="tg">
  <tr>
    <th class="tg-yw4l">Param #</th>
    <th class="tg-yw4l">Size</th>
    <th class="tg-yw4l">Name</th>
    <th class="tg-yw4l">Available Values</th>
    <th class="tg-yw4l">Default Value</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">01</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the value sent by the BASIC_SET command to Association Group 2 (for more information, see “Assocation Groups”.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">BASIC_SET Level</td>
    <td class="tg-yw4l">00 <span class="subnote">(0/Turn Off Device)</span><br>01 ~ 63 <span class="subnote">(0 ~ 99)</span><br>FF <span class="subnote">(-1/Turn On Device)</span></td>
    <td class="tg-yw4l">FF <br> <span class="subnote"> (-1/Turn On Device) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">02</td>
    <td class="tg-yw4l" colspan="4">This parameter sets “firing mode” of the Mouser.  Two firing modes are available: in the first (Continuous Fire,) electricity is passed continuously for the entire duration, and in the second (Burst Fire,) electricity is passed continuously only for the first minute and  it is pulsed  at approximately 400 beats per minute for the remainder of the time.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Set Firing Mode</td>
    <td class="tg-yw4l">01 <span class="subnote">(Continuous Fire)</span><br>02 <span class="subnote">(Burst Fire)</span></td>
    <td class="tg-yw4l">02 <br> <span class="subnote"> (Burst Fire) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">03</td>
    <td class="tg-yw4l" colspan="4">This parameter defines how long the Mouser will fire continuously before it starts to burst-fire (see parameter 2.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">02</td>
    <td class="tg-yw4l">High Voltage Duration Time</td>
    <td class="tg-yw4l">00 64~01 68 <br> <span class="subnote">(100~360 in Seconds)</span></td>
    <td class="tg-yw4l">64 <br> <span class="subnote"> (100 Seconds) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">04</td>
    <td class="tg-yw4l" colspan="4">This parameter enables or disables the indicator LED alarm when the trap is tripped.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable LED Alarm</td>
    <td class="tg-yw4l">00 <span class="subnote">(LED Alarm Disabled)</span><br>01 <span class="subnote">(LED Alarm Enabled)</span></td>
    <td class="tg-yw4l">01 <br> <span class="subnote"> (LED Alarm Enabled) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">05</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the amount of time the LED Indicator blinks after the trap is tripped.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">LED Alarm Duration</td>
    <td class="tg-yw4l">00 <span class="subnote">(LED Alarm Blinks Until Trap is  Cleared)</span><br>01~FF <span class="subnote">(1~255 in Hours)</span></td>
    <td class="tg-yw4l">00 <br> <span class="subnote"> (LED Alarm Blinks Until Cleared) </span></td>
  </tr>


</table>

<span class="caption-dark"> Table 5 - "Configuration" Command Class Parameters</span>


## Water Main Shut-Off

![Dome Water Main Shut-Off](/images/valve-front.png)

### Description & Features
The Dome Water Main Shut-Off is a Z-Wave Plus Certified device that installs over any standard 1/2” to 1-1/2” ball valve, and opens or closes the valve when given a signal.  The Water Main Shut-Off consists of three main parts - the “MOTOR ASSEMBLY,” the “MOUNTING BRACKET,” and the “CONTROL ARM.”  The MOUNTING BRACKET is clamped onto the pipe with HOSE CLAMPS and the CONTROL ARM secures around the VALVE HANDLE to control the valve, while the MOTOR ASSEMBLY connects to your home automation system and ties everything together.

**Key Features**

* Open or close any valve remotely
* Single-tool installation
* Install over existing valve - no need for a plumber!
* Use with 1/2” to 1 1/2” size 1/4-turn flat handle brass ball valves
* Z-Wave Plus Certified
* Up to 150’ range
* Pair with Flood Sensors to automatically shut off your water when there is a leak anywhere in your home.


### Specifications
**Technical Specifications**

Spec | Value
----:|----
Radio protocol  | Z-Wave(500 series)
Power supply  | 12VDC  
Working current | 35mA
Power Consumption | 0.13W
Operating Temperature | 32 - 112 °F
Radio frequency | 908.4 MHz US
Range | Up to 150’ depending on environment
Dimensions (L x W x H)  | Sensor:  2.5” x 3.5” x 6”
Package Contents   |   User Manual, Water Main Shut-Off, Power Supply

### Inclusion & Exclusion

> <img src="/images/valve-parts.svg" class="line-art" alt="Main Parts of the Water Main Shut-Off">
> <span class="caption"> Figure 1 - Main Parts of the Water Main Shut-Off</span>
> <img src="/images/valve-bottom.svg" class="line-art" alt="Underside of the Water Main Shut-Off">
> <span class="caption"> Figure 2 - Underside of the Water Main Shut-Off</span>

**Inclusion**

1. For proper inclusion, bring the Water Main Shut-Off to the final location where it will be used. *

<aside class="warning">
Upon inclusion, the motor will engage and start turning automatically.  To avoid serious injury, keep your fingers and hands clear of the CONTROL ARM and its path, only gripping the unit firmly by either the MOUNTING BRACKET or the top of the MOTOR ASSEMBLY
</aside>

2. Follow the instructions for your Z-Wave controller to enter inclusion mode.
3. Make sure the Water Main Shut-Off is powered on, and when prompted by your controller, press the “open/close” button quickly 3 times in a row.  The LED will stop blinking and stay on continuously upon successful inclusion.

<aside class="notice">
*For non Z-Wave Plus networks, please consult the owner’s manual for your primary controller to determine the best method and location for adding the Leak Sensor to your Z-Wave network.
</aside>

**Exclusion**

1. Follow the instructions for your Z-Wave certified Controller to enter exclusion mode.
2. When prompted, press the “open/close” button on the Shut-Off quickly 3 times in a row.  

The LED Indicator will flash five times indicating exclusion/disconnection.

### Factory Reset & Misc. Functions

**Resetting the Water Main Shut-Off**

If needed, the Water Main Shut-Off can be reset locally by following these steps.  

<aside class="warning">
Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system
</aside>

1. Confirm that your Water Main Shut-Off is powered up.
2. Press and hold the OPEN/CLOSE BUTTON for at least 10 seconds then release.  A flashing LED INDICATOR indicates a successful factory reset.
3. The Water Main Shut-Off's memory will be erased to factory settings.   

**Emergency Operation**

The Water Main Shut-Off can be operated manually in the event of a power outage, loss of communication with your Z-Wave Hub, or some other emergency.  Follow these instructions to manually operate the Shut-Off:


> <img src="/images/valve-bottom.svg" class="line-art" alt="Finding the Motor Clutch">
> <span class="caption"> Figure 3 - Finding the Motor Clutch</span>

1. Unplug the power from your device.
2. Locate the MOTOR CLUTCH on the underside of your device (Fig 3,) and pull it outward by the keychain ring.  The CONTROL ARM will disengage from the motor and move freely.  

###Physical Installation###

Review the Pre-Installation Checklist below to make sure the Water Main Shut-Off can be used for your application.  The device should already be included in your Z-Wave system before continuing further.

**Pre-Installation Checklist**

> <img src="/images/valve-clearance.svg" class="line-art" alt="Required Clearance for the Water Main Shut-Off">
> <span class="caption"> Figure 4 - Required Clearance for the Water Main Shut-Off.</span>

* The Water Main Shut-Off can be installed on any 1/2” to 1-1/2” brass ball valve
* Make sure the VALVE HANDLE is comfortably usable by hand prior to installation
* The valve should be 5” away from any walls or other obstructions (Figure 3)
* Make sure the OPEN/CLOSE BUTTON is accessible in the final position
* Make sure there is a working power outlet (that will always be powered on) reachable with a 10’ cord from the valve
* Finally, confirm that you are still within range of your Z-Wave controller.




**Installation Process**

> <img src="/images/valve-installation.svg" class="line-art" alt="Installing the Water Main Shut-Off">
> <span class="caption"> Figure 5 - Installing the Water Main Shut-Off</span>
> <img src="/images/valve-alignment.svg" class="line-art" alt="Aligning the Water Main Shut-Off">
> <span class="caption"> Figure 6 - Aligning the Water Main Shut-Off</span>


1. Make sure the installed valve is comfortably usable by hand before continuing further.
2. Open both HOSE CLAMPS completely so their ends are free, insert both of them into the slots in the MOUNTING BRACKET, and let them hang loosely.
3. Remove the protective film covering the screws on the CONTROL ARM and spread the CONTROL ARM.
4. Make sure both the valve and the Water Main Shut-Offare in the “open” position (where the handle is in line with the pipe, not at a right angle to it,) and slide the CONTROL ARM around the valve’s handle.
5. Loosely tighten the hose clamps around the pipe on the opposite side of the valve handle so it remains moveable.  
6. Position the bolt of the Water Main Shut-Off directly above the bolt of the ball valve, and tighten the HOSE CLAMPS until the Shut-Off is completely secure (Figure 5.)

<aside class="warning">
It is absolutely critical that the axes for both the valve and Water Main Shut-Off are aligned. Improper installation will result in unreliable performance. Examine Figure 5 for more details and please visit www.domeha.com/support if you require further assistance.
</aside>

7. Squeeze the CONTROL ARM closed around the valve handle and secure it tightly with the four screws previously covered by the protective film.
8. To test for proper installation, power up the device and press the OPEN/CLOSE BUTTON.  The motor will engage and your valve will close.


### LED Behavior

<table class="tg">
  <tr>
    <th class="tg-yw4l">Color</th>
    <th class="tg-yw4l">Behavior</th>
    <th class="tg-yw4l">This happens when...</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="3">Blue</td>
    <td class="tg-yw4l">Blink Continuously</td>
    <td class="tg-yw4l">…the device is not yet included in a Z-Wave Network.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">On Continulously</td>
    <td class="tg-yw4l">…the device is included in a Z-Wave Network and is in the “Closed” position.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Off Continuously</td>
    <td class="tg-yw4l">…the device isincluded in a Z-Wave Network and is in the “Open” position.</td>
  </tr>
</table>

<span class="caption-dark"> Table 2 - LED Behavior</span>

### Button Behavior

<table class="tg">
  <tr>
    <th  class="tg-yw4l">Action</th>
    <th  class="tg-yw4l">Condition</th>
    <th  class="tg-yw4l">Result</th>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press  the Button Once </td>
    <td  class="tg-yw4l">All Conditions</td>
    <td  class="tg-yw4l">Open or Close Valve</td>
  </tr>
  <tr>
    <td  class="tg-yw4l" rowspan="3">Push OPEN/CLOSE BUTTON 3 Times</td>
    <td  class="tg-yw4l">Water Main Shut-Off Already Included in System</td>
    <td  class="tg-yw4l">Device sends node info to Group 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Water Main Shut-Off Already Included in System and Controller is in Exclusion Mode</td>
    <td  class="tg-yw4l">Device is excluded from the system and removes the Home ID from its memory</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Water Main Shut-Off Not Yet Included in System</td>
    <td  class="tg-yw4l">Device enters inclusion mode and includes into whichever network is also in inclusion mode</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press and hold OPEN/CLOSE BUTTON for 10+ seconds</td>
    <td  class="tg-yw4l">All Conditions</td>
    <td  class="tg-yw4l">Device will be reset to factory settings, and a DEVICE_RESET_LOCALLY command will be sent to Node 1</td>
  </tr>
</table>

<span class="caption-dark"> Table 3 - Button Behavior</span>

### Compatible Command Classes

<table class="tg">
  <tr>
    <th class="tg-yw42">Command Class</th>
    <th class="tg-yw43">Notes</th>
  </tr>
  <tr>
    <td class="tg-yw42">Device Reset Locally V1 (5A)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Powerlevel V1 (73)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Association Group Information V1 (59)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Basic V1 (20)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Binary Switch V1 (25)</td>
    <td class="tg-yw43">
      Binary Switch commands will open and close the Water Main Shut-Off.  Binary Switch Report commands are also used to communicate changes in device status (e.g. the Valve opening/closing) to the controller.  See below for Binary Switch status values and their corresponding meaning within the Shut-Off:
      <br>
      Valve Open: FF
      <br>
      Valve Closed: 00
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">All Switch V1 (27)</td>
    <td class="tg-yw43">
      All Switch commands open and close the Water Main Shut-Off along with any other device included in your Z-Wave Network.  See the Z-Wave Command Class specifications for details on  how the All Switch command class is typically implemented. See below for All Switch status values and their corresponding meaning within the Shut-Off:
      <br>
      Valve Open: FF
      <br>
      Valve Closed: 00
    </td>
  </tr>

  <tr>
    <td class="tg-yw42">Z-Wave Plus Info V2 (5E)</td>
    <td class="tg-yw43">

      <strong>Returned Value: 01 05 00 0F 00 0F 00</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Plus Version</td>
        <td>01</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Role Type</td>
        <td>05 <span class="subnote">(Slave - Always On)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Node Type</td>
        <td>00 <span class="subnote">(Z-Wave Plus Node)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Installer Icon Type</td>
        <td>07 00 <span class="subnote">(Generic Relay Device))</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">User Icon Type</td>
        <td>07 00 <span class="subnote">(Generic Relay Device))</span></td>
      </tr>
    </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Version V2 (86)</td>
    <td class="tg-yw43">

      <center><strong>Returned Value: 06 04 05 00 02 02 00</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Library Type</td>
        <td>06</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Version</td>
        <td>04 05</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Sub-Version</td>
        <td>00 02 </td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Version</td>
        <td>02</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Sub-Version</td>
        <td>00</td>
      </tr>
    </table>


    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Manufacturer Specific V2 (72)</td>
    <td class="tg-yw43">
      <center><strong>Returned Value: 02 1F 00 03 00 02</strong></center>
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Manufacturer ID</td>
          <td>02 1F</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product Type</td>
          <td>00 03</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product ID</td>
          <td>00 02</td>
        </tr>
      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Association V2 (85)</td>
    <td class="tg-yw43">
      <p>
        <strong>Group 1</strong>
        <br>
      Group 1 is the “Lifeline” group, which can hold five devices.  The Water Main Shut-Off sends this group a Binary Switch Report whenever it is turned on or off.  The Water Main Shut-Off also sends this group a Device Reset Locally notification to remove itself from the Z-Wave network.   
      </p>
    </td>
  </tr>  
</table>
<span class="caption-dark"> Table 4 - Compatible Command Classes</span>

## Door/Window Sensor Pro

![Door/Window Sensor Pro](/images/dw-pro-front.png)

### Description & Features
The Dome Door/Window Sensor is a battery powered security-enabled* Z-Wave Plus magnetic reed switch that can monitor the status of doors, windows, and anything else that opens and closes.  It can also report ambient temperature levels.  The Door/Window Sensor consists of two parts - the “sensor,” and the “magnet.”  The sensor has a “reed switch” inside, which is sensitive to the magnet’s presence when aligned properly and within the defined distance.  When the sensor and magnet are brought together or pulled apart, the sensor will report its open/close status to its Z-Wave controller, and the encrypted wireless communication* ensures that user data remains secure. Because many manufacturers use Z-Wave to communicate, the Door/Window Sensor can interact with different products of different categories.

<!-- The Dome Door/Window Sensor is a Secure* Z-Wave Plus device that monitors the status of doors or windows and also the surrounding temperature.  The Door/Window Sensor has two parts - the “sensor,” and the “magnet.”  The sensor has a “reed switch” inside that detects the magnet's magnetic field when close by.  When the magnet moves in or moves away, the sensor will notify the Z-Wave controller.
 -->



**Key Features**

* Temperature Sensor
* Up to 220’ range
* Ten-Year Battery Life
* Z-Wave Signal Strength Indication
* 1” Max distance between sensor & magnet
* Ultra-Narrow (1/4”) Magnet (for Placement Between Door and Casing)
* Z-Wave Plus Certified
* S0 Security-Enabled*
* Monitor doors, windows, medicine cabinets, drawers, garage doors, and many other openings

<aside class="notice">
*A security-enabled Z-Wave Plus controller is required to use all features of the Door/Window Sensor.
</aside>

### Specifications
**Technical Specifications**

Spec | Value
----:|----
Radio protocol  | Z-Wave(500 series)
Power supply  | Single CR14505 3.6V battery  
Working current | 35mA
Standby current | 7uA
Radio frequency | 908.4 MHz US
Range | Up to 150’ depending on environment
Dimensions (L x W x H)  | Sensor: 2.9” x 0.85” x 0.87” (75 x 21 x 22 mm) <br> Magnet: 1.6” x 0.25” x 0.5” (40 x 6.35 x 12 mm)
Package Contents   |   User Manual, Sensor, Magnet, Battery, Double-Stick Tape, 2x Screws, 2x Wall Anchors

### Inclusion & Exclusion

> <img src="/images/dw-pro-exploded-view.svg" class="line-art" alt="Door/Window Sensor Exploded View">
> <span class="caption"> Figure 1 - Door/Window Sensor Exploded View</span>
> <img src="/images/dw-pro-side-by-side.svg" class="line-art" alt="Main Parts of the Door/Window Sensor">
> <span class="caption"> Figure 2 - Main Parts of the Door/Window Sensor</span>

**Inclusion - New Installation**

1. For proper inclusion, bring the Door/Window Sensor to the final location where it will be used*.
2. Follow the instructions for your Z-Wave controller to enter inclusion mode.
3. Remove the Battery Tab protruding from the Battery Tab Slit.
4. The device will automatically enter inclusion mode for two minutes and the LED Indicator will alternate between green and red.

Upon successful inclusion the LED Indicator will flash green three times then stop blinking.

**Inclusion - Re-Installation**

1. For proper inclusion, bring the Door/Window Sensorto the final location where it will be used*.
2. Follow the instructions for your Z-Wave controller to enter inclusion mode.
3. Remove the Sensor Cover and the LED Indicator will start blinking yellow.
4. Press the Button quickly 3 times in a row.
5. The device will enter inclusion mode for two minutes and the LED Indicator will alternate between green and red.

After successful inclusion, the LED Indicator will flash green three times then blink red until the cover is replaced.

<aside class="notice">
*For non Z-Wave Plus networks, please consult the owner’s manual for your primary controller to determine the best method and location for adding the Leak Sensor to your Z-Wave network.
</aside>

**Exclusion**

Follow the instructions for your Z-Wave Certified Controller to enter exclusion mode.  When prompted by the controller:

1. Remove the SENSOR COVER and the LED Indicator will start blinking red.
2. Press the Button quickly 3 times in a row.

The LED Indicator will flash green three times indicating exclusion/disconnection and will then continue flashing red (indicating tamper) until the cover is replaced.

### Factory Reset & Misc. Functions

**Resetting the Door/Window Sensor Pro**

If needed, the Door/Window Sensor Pro can be reset locally by following these steps.  

<aside class="warning">
Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system
</aside>

1. Remove the Sensor Cover and confirm that your Door/Window Sensor is powered up.
2. Wait for 5 seconds.
3. Move the Magnet and Sensor Base in and out of the closed position 6 times.
4. The LED Indicator will light up red for two seconds when reset successfully.

The Door/Window Sensor’s memory will be erased to factory settings.

**Waking Up the Door/Window Sensor Pro**

Because the Mouser is a battery powered device, it wakes up on regular intervals to give battery and other status updates to the controller, as well as to accept configuration settings from the controller.  This helps to extend the battery life.  The device can be forced to wake up to submit these reports or accept new settings immediately by simply pressing and holding the BUTTON for half a second.  The LED INDICATOR will flash once indicating successful wake up.

###Physical Installation###

The Door/Window Sensor can be install with double stick tape or the provided screws.  The device should already be included in your Z-Wave system before continuing further.

**Pre-Installation Checklist**

* The Magnet Assembly and Sensor Assembly should be less than 1-1/4” apart when closed (Figure 3.)
* Hold the Magnet Assembly and Sensor Assembly in place by hand where you wish to install them, move them in and out of the closed position, and make sure the LED Indicator blinks in response.  This will confirm that the door and frame are spaced correctly to accommodate the sensor.  
* When moving the Magnet and Sensor in and out of the closed position, a Green followed by another Green or Red LED Indicator corresponds to Excellent or Poor Z-Wave Signal strength respectively.
* Make sure the Sensor Cover Release Button will be accessible in the final position.
* The Magnet is small enough (only 1/4” wide) to fit in the groove between the door and the casing.
* Finally, confirm that you are still within range of your Z-Wave controller.

> <img src="/images/dw-pro-on-door.svg" class="line-art" alt="Placing the Door/Window Sensor on the Door">
> <span class="caption"> Figure 3 - Placing the Door/Window Sensor on the Door</span>

**Installation Using Double-Stick Tape**

1. Wipe the door and door-frame clean of dust and anything else that will interfere with the tape’s stickiness.
2. Peel the double-stick tape and adhere the Sensor Assembly to the door surface.
3. Repeat the process for the Magnet Assembly, making sure the Magnet Assembly, and Sensor Assembly are no more than 1-1/4” apart when closed.  The lines on the sides of the Magnet Assembly, and Sensor Assembly should be in line.
4. Open and close the door to make sure the sensor works as expected (the LED Indicator blinks) and that the signal reaches your Z-Wave controller.

**Installation Using Screws**

> <img src="/images/dw-pro-w-screws.svg" class="line-art" alt="Installing the Door/Window Sensor With Screws">
> <span class="caption"> Figure 4 - Installing the Door/Window Sensor With Screws</span>

1. Remove the Sensor Cover and Battery from the Sensor Base and the Magnet Cover from the Magnet Base.
2. Hold the Sensor Base in place and drive the included screws through the screw holes into the door.
3. Repeat the process for the Magnet Assembly, making sure the Magnet Assembly, and Sensor Assembly are no more than 1-1/4” apart when the door is closed.  The lines on the sides of the MAGNET and SENSOR should be in line.
4. Replace the Battery, Sensor Cover, and Magnet Cover.
5. Open and close the door to make sure the sensor works as expected (the LED Indicator blinks) and that the signal reaches your Z-Wave controller.

### LED Behavior

<table class="tg">
  <tr>
    <th class="tg-yw4l">Color</th>
    <th class="tg-yw4l">Behavior</th>
    <th class="tg-yw4l">This happens when...</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">Green</td>
    <td class="tg-yw4l">Blinks Twice Within 5 Seconds</td>
    <td class="tg-yw4l">…the sensor Detects the Magnet (door) moving, and the Z-Wave signal reached the controller. <!-- …the sensor Detects the Magnet moving away or getting close (as the Door is opened or closed) and Z-Wave signal strength is high. --></td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blinks 3 times quickly</td>
    <td class="tg-yw4l">…the device is successfully included into the system.</td>
  </tr>

  <tr>
    <td class="tg-yw4l" rowspan="3">Red</td>
    <td class="tg-yw4l">Stays on for 2 seconds</td>
    <td class="tg-yw4l">…the device is reset to factory settings.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blinks 3 Times quickly</td>
    <td class="tg-yw4l">… the Button is pressed 3 times quickly and the device is excluded from the network.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blinks indefinitely</td>
    <td class="tg-yw4l">…the Sensor Cover is removed and the device is already included in a system.</td>
  </tr>

  <tr>
    <td class="tg-yw4l">Yellow (Green + Red)</td>
    <td class="tg-yw4l">Blinks Indefinitely</td>
    <td class="tg-yw4l">...the Sensor Cover is removed and the device is not yet included in a system.</td>
  </tr>

  <tr>
    <td class="tg-yw4l" rowspan="2">Red &amp; Green Alternating</td>
    <td class="tg-yw4l">Two Flashes (Green-Red) Within 5 Seconds</td>
    <td class="tg-yw4l">…the sensor Detects the Magnet moving away or getting close (as the Door is opened or closed) and the Z-Wave signal was not received.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Flashing in alternating colors</td>
    <td class="tg-yw4l">…the Door/Window Sensor is in inclusion mode.  It will continue blinking and remain in inclusion mode for up to two minutes, until it is included in a system.</td>
  </tr>

</table>

<span class="caption-dark"> Table 2 - LED Behavior</span>

### Button Behavior

<table class="tg">
  <tr>
    <th  class="tg-yw4l">Action</th>
    <th  class="tg-yw4l">Condition</th>
    <th  class="tg-yw4l">Result</th>
  </tr>
  <tr>
    <td  class="tg-yw4l" rowspan="2">Open the Cover</td>
    <td  class="tg-yw4l">Door/Window Sensor Not Yet Included in System</td>
    <td  class="tg-yw4l">LED Indicator blinks yellow (red + green) until the Sensor Cover is replaced</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Door/Window Sensor Already Included in System</td>
    <td  class="tg-yw4l">Device sends a tamper notification to its controller, and the LED Indicator blinks red until the Sensor Cover is replaced</td>
  </tr>
  <tr>
    <td  class="tg-yw4l" rowspan="3">Push CONNECT BUTTON 3 Times</td>
    <td  class="tg-yw4l">Door/Window Sensor Already Included in System</td>
    <td  class="tg-yw4l">Device sends node info to Group 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Door/Window Sensor Already Included, and Controller is in Exclusion Mode</td>
    <td  class="tg-yw4l">Device is excluded from the system and removes the Home ID from its memory</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Door/Window Sensor Not Yet Included in System, and Controller is in Inclusion Mode</td>
    <td  class="tg-yw4l">Device enters inclusion mode and includes into whichever network is also in inclusion mode</td>
  </tr>
  <tr>
    <td  class="tg-yw4l" rowspan="2">Move the Magnet and Sensor In and Out of the Closed Position 6 Times with Cover Removed</td>
    <td  class="tg-yw4l">Door/Window Sensor Already Included in System</td>
    <td  class="tg-yw4l">Device will be reset to factory settings, and a DEVICE_RESET_LOCALLY command will be sent to Group 1</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Any condition (as long as the device has power)</td>
    <td  class="tg-yw4l">The device’s memory will erase to factory default settings and any associations, configuration parameters, and other locally saved data will be lost</td>
  </tr>
  <tr>
    <td  class="tg-yw4l">Press the Button Once</td>
    <td  class="tg-yw4l">Door/Window Sensor Is Already Included in System</td>
    <td  class="tg-yw4l">Device sends a wake up notification to Node 1.</td>
  </tr>
</table>

<span class="caption-dark"> Table 3 - Button Behavior</span>

### Compatible Command Classes

<table class="tg">
  <tr>
    <th class="tg-yw42">Command Class</th>
    <th class="tg-yw43">Notes</th>
  </tr>
  <tr>
    <td class="tg-yw42">Device Reset Locally V1 (5A)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Powerlevel V1 (73)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Battery V1(80)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Association Group Information V1 (59)</td>
    <td class="tg-yw43">-</td>
  </tr>
  <tr>
    <td class="tg-yw42">Z-Wave Plus Info V2 (5E)</td>
    <td class="tg-yw43">

      <strong>Returned Value: 01 06 00 0C 06 0C 06</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Plus Version</td>
        <td>01</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Role Type</td>
        <td>06 <span class="subnote">(Slave Sleeping Reporting)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Node Type</td>
        <td>00 <span class="subnote">(Z-Wave Plus Node)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Installer Icon Type</td>
        <td>0C 06 <span class="subnote">(Access Control Alarm)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">User Icon Type</td>
        <td>0C 06 <span class="subnote">(Access Control Alarm)</span></td>
      </tr>
    </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Version V2 (86)</td>
    <td class="tg-yw43">

      <center><strong>Returned Value: 03 04 21 01 11 1E 00</strong></center>
<br>
    <table>
      <tr>
        <td  class="tg-yw42">Z-Wave Library Type</td>
        <td>03 <span class="subnote">(Enhanced Slave)</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Version</td>
        <td>04 21</span></td>
      </tr>
      <tr>
        <td  class="tg-yw42">Protocol Sub-Version</td>
        <td>01 11</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Version</td>
        <td>1E</td>
      </tr>
      <tr>
        <td  class="tg-yw42">Application Sub-Version</td>
        <td>00</td>
      </tr>
    </table>


    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Manufacturer Specific V2 (72)</td>
    <td class="tg-yw43">
      <center><strong>Returned Value: 02 1F 00 03 02 01</strong></center>
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Manufacturer ID</td>
          <td>02 1F</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product Type</td>
          <td>00 03</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Product ID</td>
          <td>02 01</td>
        </tr>
      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Multilevel Sensor (31)</td>
    <td class="tg-yw43">
      The Door/Window Sensor monitors ambient temperature levels and reports this data to the main controller using the Multilevel Sensor command class if Configuration Parameter 05 is set to 01 (this is off by default.)  Configuration Parameter 06 is used to “offset” the reported value (add or deduct a static number from the reported value) and Configuration Parameter 07 switches between Celsius and Fahrenheit.  
      <br>
      <center><strong>Returned Value: 01 XX XX</strong></center>
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Sensor Type</td>
          <td>01 <span class="subnote">(tEMPERATURE)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Precision/Scale/Size (Celsius)</td>
          <td>01 <span class="subnote">(Precision = 000; Scale = 00; Size = 001)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Precision/Scale/Size (Fahrenheit)</td>
          <td>09 <span class="subnote">(Precision = 000; Scale = 01; Size = 001)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Sensor Data</td>
          <td>00 ~ FF <span class="subnote">(-125 ~ 125 in Degrees Fahrenheit or Celsius)</span></td>
        </tr>
      </table>

    </td>
  </tr>

  <tr>
    <td class="tg-yw42">Binary Sensor (30)</td>
    <td class="tg-yw43">
      If Configuration Parameter 4 is set to 01, the Door/Window Sensor sends a Binary Sensor Report when opened or closed and also when tamper events are detected.  See below for the SENSOR_BINARY_REPORT parameters sent:
      <br>
      <table>
        <tr>
          <td  class="tg-yw42">Sensor Type (Door Open/Close)</td>
          <td>0A <span class="subnote">(Door/Window)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Door Open Value</td>
          <td>FF</td>
        </tr>
        <tr>
          <td  class="tg-yw42">door Closed Value</td>
          <td>00</td>
        </tr>
              <tr>
          <td  class="tg-yw42">Sensor Type (Tamper)</td>
          <td>08 <span class="subnote">(Tamper)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Tamper Detected Value</td>
          <td>FF</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Tamper Cleared Value</td>
          <td>00</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Association V2 (85)</td>
    <td class="tg-yw43">
      <p>
        <strong>Group 1</strong>
        <br>
        Group 1 is the “Lifeline” group, which can hold five members, typically including the main Z-Wave controller.  The Door/Window Sensor sends this group a Notification Report or a Binary Sensor Report when it is opened or closed (see Configuration Parameter 4.)  It also sends this group a multilevel sensor report to report the temperature and a Battery Report in response to Battery Get commands.
      </p>
      <p>
        <strong>Group 2</strong>
        <br>
        Group 2 supports up to 5 members and the Door/Window Sensor sends a Basic Set command to this group (or the Control Group) to directly trigger devices (like a light, chime, etc.) when the tamper switch either opens or closes. The value of the Basic Set command (e.g. brightness of the lamp) is configured using configuration parameter 08.
      </p>
      <p>
        <strong>Group 3</strong>
        <br>
        Group 3 supports up to 5 members and the Door/Window Sensor sends it a NOTIFICATION_REPORT or SENSOR_BINARY_REPORT when the tamper switch either opens or closes.      
      </p>
      <p>
        <strong>Group 4</strong>
        <br>
        Group 4 supports up to 5 members and the Door/Window Sensor sends a Basic Set command to this group to directly trigger devices (like a light, chime, etc.) when the sensor detects the door/window opening. The value of the Basic Set command (e.g. brightness of the lamp) is configured using configuration parameter 09.  
      </p>
      <p>
        <strong>Group 5</strong>
        <br>
        Group 5 supports up to 5 members and the Door/Window Sensor sends it a NOTIFICATION_REPORT or SENSOR_BINARY_REPORT when the sensor detects the door/window opening.   
      </p>
      <p>
        <strong>Group 6</strong>
        <br>
        Group 6 supports up to 5 members and the Door/Window Sensor sends a Basic Set command to this group to directly trigger devices (like a light, chime, etc.) when the sensor detects the door/window closing. The value of the Basic Set command (e.g. brightness of the lamp) is configured using configuration parameter 0A.   
      </p>
      <p>
        <strong>Group 7</strong>
        <br>
        Group 7 supports up to 5 members and the Door/Window Sensor sends it a NOTIFICATION_REPORT or SENSOR_BINARY_REPORT when the sensor detects the door/window closing.  
      </p>    
    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Wake Up V2 (84)</td>
    <td class="tg-yw43">The wake-up interval is set in seconds, and is 43,200 seconds (12 hours) by default.  The wake-up interval can be set to any value from 300s (5 minutes) to 16,777,200s (about 190 days) in 60-second increments.</td>
  </tr>
  <tr>
    <td class="tg-yw42">Notification V4 (71)</td>
    <td class="tg-yw43">
      If Configuration Parameter 4 is set to 00, the Door/Window Sensor sends a Notification Report to the main controller whenever the door is opened and closed and also when tamper events are detected.  Two different Notification Types are used to achieve this.
      <br>
      <center><strong>Returned Value: 00 00 00 FF XX XX 00 00</strong></center>
      <br>
       <table>
        <tr>
          <td  class="tg-yw42">V1 Alarm Type</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">V1 Alarm Level</td>
          <td>00 <span class="subnote">(Unsupported)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Reserved</td>
          <td>00 <span class="subnote">(Reserved)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Status</td>
          <td>FF <span class="subnote">(Unsolicited Reporting is Enabled)</span></td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Type (Door)<br>Notification Type (Tamper)</td>
          <td>06 <span class="subnote">(Access Control)</span><br>07 <span class="subnote">(Home Security)</span></td>
        </tr>
        </tr>
        <tr>
          <td  class="tg-yw42">Door Open Event <br>Door Closed Event <br>Tamper Detected Event <br>Tamper Cleared Event</td>
          <td>16 <span class="subnote">(Window/Door is Open)</span> <br> 17 <span class="subnote">(Window/Door is Closed)</span><br>03 <span class="subnote">(Tampering, Product Covering Removed)</span> <br> 00 <span class="subnote">(Event Inactive)</span></td>
        </tr>

        <tr>
          <td  class="tg-yw42">Sequence/Reserved/Event Parameters Length</td>
          <td>00</td>
        </tr>
        <tr>
          <td  class="tg-yw42">Notification Event Parameters</td>
          <td>00 <span class="subnote">(No Event Parameters)</span></td>
        </tr>

      </table>

    </td>
  </tr>
  <tr>
    <td class="tg-yw42">Configuration V1(70)</td>
    <td class="tg-yw43">See “Configuration” Command Class Parameters”.</td>
  </tr>

</table>
<span class="caption-dark"> Table 4 - Compatible Command Classes</span>

### “Configuration” Command Class Parameters
<p>Configuration parameters are sent using a standard syntax to ensure interoperability between all manufacturers’ products.  All values are represented using the hexadecimal number system.  
<br>Typical syntax is as shown below. Note that the value sent must be the exact size, in bytes, as accepted by the setting.  The “extra” spaces should be filled with zeros (see the “value” column below.) </p>
<p>Example Configuration Parameter: 02 02 00 0A
  <br>
  <table>
    <tr>
      <td  class="tg-yw4l">Param #</td>
      <td  class="tg-yw4l">Size</td>
      <td  class="tg-yw4l">Value</td>
    </tr>
    <tr>
      <td  class="tg-yw41">02<br><span class="subnote">(Param #2)</span></td>
      <td  class="tg-yw4l">02<br><span class="subnote">(2 Bytes)</span></td>
      <td  class="tg-yw4l">00 0A<br><span class="subnote">(Value)</span></td>
    </tr>
  </table>
</p>


<table class="tg">
  <tr>
    <th class="tg-yw4l">Param #</th>
    <th class="tg-yw4l">Size</th>
    <th class="tg-yw4l">Name</th>
    <th class="tg-yw4l">Available Values</th>
    <th class="tg-yw4l">Default Value</th>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">01</td>
    <td class="tg-yw4l" colspan="4">This parameter enables or disables the LED Indicator flashing to indicate opening and closing events.  The Door/Window Sensor will always flash the LED Indicator for inclusion, exclusion, tamper, and other system events.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable LED Indicator</td>
    <td class="tg-yw4l">00 <span class="subnote">(Open/Close LED Indicator Disabled)</span><br>01 <span class="subnote">(Open/Close LED Indicator Enabled)</span></td>
    <td class="tg-yw4l">01 <br> <span class="subnote"> (Open/Close LED Indicator Enabled) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">02</td>
    <td class="tg-yw4l" colspan="4">This parameter switches the Notification or Binary Sensor report sent when the door opens or closes.  If this parameter is set to 01, the Door/Window Sensor will report “closed” instead of “open”when the Magnet and Sensor are pulled apart.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Configure Open/Close Reports Sent</td>
    <td class="tg-yw4l">00 <span class="subnote">(Reports Closed when Magnet is close)</span><br>01 <span class="subnote">(Reports Open when Magnet is close)</span></td>
    <td class="tg-yw4l">00 <br> <span class="subnote"> (Reports Closed when Magnet is close) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">03</td>
    <td class="tg-yw4l" colspan="4">The Door/Window Sensor sends encrypted commands by default to all Association Groups.  This Configuration Parameter allows certain groups to be sent unencrypted commands instead.  Each value listed below can be combined, meaning setting this Parameter to 03 will encrypt the second and third association groups.  If the main controller accepts encrypted commands, the Door/Window Sensor will automatically encrypt all commands to Group 1.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Turn On/Off Encryption</td>
    <td class="tg-yw4l">00 <span class="subnote">(No Group Receives Encrypted Commands)</span><br>01 <span class="subnote">(Group 2 Receives Encrypted Commands)</span><br>02 <span class="subnote">(Group 3 Receives Encrypted Commands)</span><br>04 <span class="subnote">(Group 4 Receives Encrypted Commands)</span><br>08 <span class="subnote">(Group 5 Receives Encrypted Commands)</span><br>10 <span class="subnote">(Group 6 Receives Encrypted Commands)</span><br>20 <span class="subnote">(Group 7 Receives Encrypted Commands)</span><br></td>
    <td class="tg-yw4l">3F <br> <span class="subnote"> (All Groups Receive Encrypted Commands) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">04</td>
    <td class="tg-yw4l" colspan="4">By default, the Door/Window Sensor uses the Notification command class to communicate open/close and tamper events.  If this Parameter is set to 1, the device will instead use the Binary Sensor command class.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Switch Between Notification and Binary Sensor Command Classes</td>
    <td class="tg-yw4l">00 <span class="subnote">(Notification Command Class is Used)</span><br>01 <span class="subnote">(Binary Sensor Command Class is Used)</span></td>
    <td class="tg-yw4l">00 <br> <span class="subnote"> (Notification Command Class is Used) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">05</td>
    <td class="tg-yw4l" colspan="4">The Door/Window Sensor can also monitor and report ambient temperature conditions.  However, temperature sensing functionality is disabled by default to save battery life, and this configuration parameter is used to enable or disable this feature.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Enable/Disable Temperature Sensor</td>
    <td class="tg-yw4l">00 <span class="subnote">(Temperature Sensor Disabled)</span><br>01 <span class="subnote">(Temperature Sensor Enabled)</span></td>
    <td class="tg-yw4l">00 <br> <span class="subnote"> (Temperature Sensor Disabled) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">06</td>
    <td class="tg-yw4l" colspan="4">This Configuration Parameter can offset the temperature value reported by ± 125 degrees to compensate for temperature variances in a room - for example, the temperature near the ceiling in a room is significantly higher than the average temperature of the same room.  This Parameter accepts a signed 8-bit value with an absolute value of up to 125, and its units are Dependant on Configuration Parameter 07</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Temperature offset</td>
    <td class="tg-yw4l">00 ~ 7D <span class="subnote">(0°~125°)</span><br>83 ~ FF <span class="subnote">(-125° ~ -1°)</span></td>
    <td class="tg-yw4l">00 <br> <span class="subnote"> (0° Offset) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">07</td>
    <td class="tg-yw4l" colspan="4">The Door/Window Sensor can report temperature values in either Celsius or Fahrenheit, and this parameter allows the user to decide which unit is used.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Temperature Units</td>
    <td class="tg-yw4l">00 <span class="subnote">(Temperature Reported in Fahrenheit)</span><br>01 <span class="subnote">(Temperature Reported in Celsius)</span></td>
    <td class="tg-yw4l">00 <br> <span class="subnote"> (Temperature Reported in Fahrenheit) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">08</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the value sent by the Basic Set command to Association Group 2 (for more information, see "Association Group Info”.)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Basic Set Value (Group 2)</td>
    <td class="tg-yw4l">00 <span class="subnote">(0/Turn Off Device)</span><br>01 ~ 63 <span class="subnote">(0-99)</span><br>FF <span class="subnote">(-1/Turn On Device)</span></td>
    <td class="tg-yw4l">FF <br> <span class="subnote"> (-1/Turn On Device) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">09</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the value sent by the Basic Set command to Association Group 4 (for more information, see “Association Group Info".)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Basic Set Value (Group 4)</td>
    <td class="tg-yw4l">00 <span class="subnote">(0/Turn Off Device)</span><br>01 ~ 63 <span class="subnote">(0-99)</span><br>FF <span class="subnote">(-1/Turn On Device)</span></td>
    <td class="tg-yw4l">FF <br> <span class="subnote"> (-1/Turn On Device) </span></td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">0A</td>
    <td class="tg-yw4l" colspan="4">This parameter sets the value sent by the Basic Set command to Association Group 6 (for more information, see “Association Group Info".)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">01</td>
    <td class="tg-yw4l">Basic Set Value (Group 6)</td>
    <td class="tg-yw4l">00 <span class="subnote">(0/Turn Off Device)</span><br>01 ~ 63 <span class="subnote">(0-99)</span><br>FF <span class="subnote">(-1/Turn On Device)</span></td>
    <td class="tg-yw4l">00 <br> <span class="subnote"> (0/Turn Off Device) </span></td>
  </tr>


</table>

<span class="caption-dark"> Table 5 - "Configuration" Command Class Parameters</span>




# Hubs
<!-- ## SmartThings
### Door/Window Sensor
### Siren
### Motion Detector
### Leak Sensor
### On/Off Plug
### Mouser
### Water Main Shut-Off
## Wink
### Door/Window Sensor
### Siren
### Motion Detector
### Leak Sensor
### On/Off Plug
### Mouser
### Water Main Shut-Off
## Vera
### Door/Window Sensor
### Siren
### Motion Detector
### Leak Sensor
### On/Off Plug
### Mouser
### Water Main Shut-Off
## Logitech Harmony
### Door/Window Sensor
### Siren
### Motion Detector
### Leak Sensor
### On/Off Plug
### Mouser
### Water Main Shut-Off -->

# Automations
# FAQ's
