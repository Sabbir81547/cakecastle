# Facebook Messenger Setup Guide for Cake Castle

## Overview

This guide explains how to set up Facebook Messenger for seamless customer communication with zero friction.

---

## Current Issue

The Facebook share link format (`https://www.facebook.com/share/1Fy8Kbidcu/`) redirects to the page but doesn't open Messenger directly.

## Solution: Direct Messenger Link

### Step 1: Find Your Facebook Page Username/ID

1. Go to your Facebook Page
2. Look at the URL: `facebook.com/YourPageName`
3. Your username is `YourPageName`

**OR** find your Page ID:
1. Go to your Page
2. Click **About** → **Page Transparency** → **Page ID**

### Step 2: Update Website with Direct Messenger Link

The website should use one of these formats:

```
# Using Page Username (Recommended)
https://m.me/YourPageUsername

# Using Page ID
https://m.me/PageID

# Example
https://m.me/cakecastlebeanibazar
```

### Step 3: Set Up Your Facebook Page for Messaging

#### Enable Messaging

1. Go to your Facebook Page
2. Click **Settings** (gear icon)
3. Go to **Privacy** → **Messaging**
4. Enable "Allow people to contact my Page privately"

#### Set Up Instant Replies

1. Go to **Inbox** → **Automations**
2. Click **Instant Reply**
3. Enable and customize:

```
আসসালামু আলাইকুম! Cake Castle এ মেসেজ করার জন্য ধন্যবাদ! 🎂

আমরা শীঘ্রই উত্তর দিব।

⏰ ব্যবসায়িক সময়: শনি-বৃহঃ সকাল ১০টা - রাত ৮টা
📱 দ্রুত অর্ডারের জন্য WhatsApp: 01875268567
```

#### Set Up Away Messages

1. Go to **Inbox** → **Automations**
2. Click **Away Message**
3. Set schedule and message:

```
ধন্যবাদ মেসেজ করার জন্য!

আমরা এখন অফলাইন। ব্যবসায়িক সময়ে (শনি-বৃহঃ সকাল ১০টা - রাত ৮টা) উত্তর দিব।

দ্রুত যোগাযোগের জন্য WhatsApp করুন: 01875268567
```

#### Create Saved Replies

1. Go to **Inbox** → **Saved Replies**
2. Add common responses:

| Title | Message |
|-------|---------|
| Welcome | আসসালামু আলাইকুম! কিভাবে সাহায্য করতে পারি? |
| Price List | আমাদের কেকের দাম ৳600 থেকে শুরু। কাস্টম ডিজাইনের দাম আলাদা। |
| Order Process | অর্ডার দিতে জানান: কেকের ধরন, সাইজ, ডেলিভারি তারিখ ও ঠিকানা |
| Payment | পেমেন্ট: Cash on Delivery অথবা bKash (01875268567) |

---

## Facebook Messenger Link Formats

### Best Link Formats (In Order of Preference)

1. **Direct Messenger Link** ✅ Best UX
   ```
   https://m.me/YourPageUsername
   ```
   - Opens Messenger directly
   - Works on mobile and desktop
   - Zero friction

2. **Message Button on Page**
   ```
   https://www.facebook.com/YourPageName?sk=messages
   ```
   - Opens page with message dialog

3. **Ref Parameter** (for tracking)
   ```
   https://m.me/YourPageUsername?ref=website_contact
   ```
   - Adds tracking capability

### Links NOT Recommended

❌ `https://www.facebook.com/share/...` - Share links, not for messaging
❌ `https://facebook.com/YourPage` - Just opens page, no direct message

---

## Update Your Facebook Page Settings

### 1. Set Up Page Username

1. Go to **Settings** → **Page Info**
2. Under **Username**, click **Create Page @username**
3. Choose a username like `cakecastlebeanibazar`
4. Your Messenger link becomes: `https://m.me/cakecastlebeanibazar`

### 2. Add Message Button to Page

1. Go to your Page
2. Click **Add Button** (below cover photo)
3. Select **Send Message**
4. Choose **Messenger**

### 3. Enable Response Time Display

1. Go to **Settings** → **Messaging**
2. Enable "Show response time"
3. Aim for "Typically replies within an hour"

---

## Testing Your Setup

### Test Messenger Link

1. Open incognito/private browser
2. Go to `https://m.me/YourPageUsername`
3. Should open Messenger with your page
4. Test on mobile too

### Test from Website

1. Go to your website
2. Click "Message on Facebook" button
3. Should open Messenger directly
4. No extra clicks needed

---

## Best Practices for Facebook Messenger

### Response Time
- 🎯 Respond within 15 minutes during business hours
- 📊 Facebook shows your response rate publicly
- ⭐ "Very Responsive" badge builds trust

### Message Quality
- ✅ Use emojis for friendly tone
- ✅ Send photos of cake options
- ✅ Confirm orders with summary
- ✅ Send payment confirmation

### Organization
- 📁 Use Labels: New, Quoted, Confirmed, Delivered
- 📌 Star important conversations
- 🔔 Set up notifications

---

## Integration Checklist

- [ ] Facebook Page messaging enabled
- [ ] Page username created
- [ ] Instant reply configured
- [ ] Away message set up
- [ ] Saved replies created
- [ ] Response time displayed
- [ ] Website using `m.me/` link
- [ ] Tested on mobile and desktop

---

## Getting Your Correct Page Link

### Option A: From Facebook Page

1. Go to your Facebook Page
2. Click the three dots (...) → **Copy Link**
3. The link format should be: `facebook.com/YourPageName`
4. Your Messenger link is: `m.me/YourPageName`

### Option B: From Page Settings

1. Go to Page **Settings**
2. Click **Page Info**
3. Find **Page ID** (numbers)
4. Your Messenger link is: `m.me/PageID`

---

## Support

- Facebook Business Help: https://www.facebook.com/business/help
- Messenger for Business: https://www.facebook.com/business/messenger
