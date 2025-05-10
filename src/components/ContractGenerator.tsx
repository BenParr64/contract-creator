import React from "react";
import { format } from "date-fns";
import "./ContractGenerator.css";

interface ContractData {
  tenantName: string;
  startDate: string;
  rentalAmount: number;
  guarantorName: string;
  guarantorAddress: string;
  propertyAddress: string;
  roomNumber: string;
  depositAmount: number;
}

interface ContractGeneratorProps {
  data: ContractData;
}

export const ContractGenerator: React.FC<ContractGeneratorProps> = ({
  data,
}) => {
  const calculateEndDate = (startDate: string) => {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + 12);
    return format(date, "dd/MM/yyyy");
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd/MM/yyyy");
  };

  return (
    <div className="contract-container">
      <div className="contract-header">
        <h1>MB Parr Investments</h1>
        <p>07570045522 | mb.parr@outlook.com</p>
        <h2>ASSURED SHORTHOLD TENANCY AGREEMENT</h2>
        <p>For a furnished dwelling</p>
      </div>

      <div className="contract-section">
        <p className="contract-text">
          This agreement contains the terms and obligations of the tenancy. It
          sets out the promises made by the landlord&apos;s agent to the tenant
          and by the tenant to the landlord&apos;s agent. These promises will be
          legally binding once the agreement has been signed by both parties and
          then dated. You should read it carefully to ensure it contains
          everything you want and nothing that you are not prepared to agree to.
          Whilst every attempt has been made to compose this agreement using
          plain and intelligible language, it inevitably contains some legal
          terms or references.
        </p>
        <p className="contract-text">
          If either party does not understand this agreement, or anything in it,
          it is strongly suggested that you ask for an explanation before
          signing it. You might consider consulting a Solicitor, Citizens Advice
          Bureau or Housing Advice Centre.
        </p>
        <p className="contract-text">
          It is subject to any manuscript amendments following negotiation
          between the Landlord and the tenant in relation to this property. Such
          amendments will be signed or initialled by the parties prior to the
          grant of the tenancy.
        </p>
        <p className="contract-text">
          This Agreement is intended to create an Assured Shorthold Tenancy As
          defined in the Housing Act 1988, as amended by the Housing Act 1996.
        </p>
      </div>

      <div className="contract-section">
        <h3>1. SUMMARY OF CORE TERMS</h3>
        <div className="contract-grid">
          <div>
            <p className="contract-text">
              <strong>1.1 Date:</strong> {formatDate(data.startDate)}
            </p>
            <p className="contract-text">
              <strong>1.2 Landlord:</strong> MB Parr Investments Limited
            </p>
            <p className="contract-text italic">
              IMPORTANT: - A landlord is required by law (for the purposes of
              sections 47 and 48 Landlord & Tenant Act 1987) to provide a tenant
              with his address when making written demands for rent and if that
              address is not in England and Wales, provide an address in England
              and Wales at which notices (including notices in proceedings) may
              be sent to or served on the landlord, by the tenant.
            </p>
            <p className="contract-text">
              <strong>1.3 Alternative address for landlord:</strong>
            </p>
            <p className="contract-text">
              Redstones, Mill Lane, Willaston, CH64 1RE
            </p>
            <p className="contract-text">
              <strong>1.4 Name of Tenant:</strong> {data.tenantName}
            </p>
            <p className="contract-text">
              <strong>1.6 Address of premises:</strong> {data.propertyAddress}
            </p>
            <p className="contract-text">
              <strong>Room Number:</strong> {data.roomNumber}
            </p>
            <p className="contract-text">(The property is fully furnished)</p>
          </div>
          <div>
            <p className="contract-text">
              <strong>1.8 Initial term of the tenancy:</strong> 12 months
            </p>
            <p className="contract-text">
              <strong>Commencement date:</strong> {formatDate(data.startDate)}
            </p>
            <p className="contract-text">
              <strong>Expiry date:</strong> {calculateEndDate(data.startDate)}
            </p>
            <p className="contract-text">
              <strong>1.9 Rent:</strong> £{data.rentalAmount.toFixed(2)} per
              calendar month
            </p>
            <p className="contract-text">
              Rent is payable in advance and due upon 1st day of each calendar
              month and the first payment (pro rata period for current month and
              the full rent for next month) is to be made before the signing of
              this agreement and moving into the property.
            </p>
            <p className="contract-text">
              <strong>1.10 Security deposit:</strong> £
              {data.depositAmount.toFixed(2)}
            </p>
            <p className="contract-text">
              A security deposit of £{data.depositAmount.toFixed(2)} is to be
              paid before the signing of this agreement, to be held by the
              Deposit Protection Service. Any interest earned on the deposit
              will not be paid to the tenant.
            </p>
            <p className="contract-text">
              <strong>1.11 Guarantor&apos;s Name:</strong> {data.guarantorName}
            </p>
            <p className="contract-text">
              <strong>1.12 Guarantor&apos;s Address:</strong>{" "}
              {data.guarantorAddress}
            </p>
          </div>
        </div>
      </div>

      <div className="contract-section">
        <h3>2. TENANT&apos;S OBLIGATIONS</h3>
        <p className="contract-text">
          PLEASE NOTE: These are the things that the tenant agrees to do or not
          to do. It is important for the tenant to understand what he must or
          must not do. If the tenant breaks or does not comply with any of these
          obligations, the landlord may be entitled to claim damages or
          compensation from the tenant, or to seek other legal remedies against
          the tenant, including the possibility of eviction.
        </p>
        <p className="contract-text">The tenant agrees to the following:</p>
        <div className="contract-list">
          <p>
            <strong>2.1</strong> As joint and several Tenants to be responsible
            and liable for all obligations under this agreement.
          </p>
          <p>
            <strong>2.2</strong> To pay the rent, whether formally demanded or
            not, and all other sums due to the landlord on time. Payments by
            other persons on behalf of the tenants will be considered as if
            payments from the tenants. In the event of the tenant failing to pay
            the rent on the day it is due, the landlord or his agent reserves
            the right to charge interest (calculated from day to day) at 3% over
            the Bank of England base rate on late payments and the landlord or
            his agent may recover the interest as though it were rent. The
            tenant shall be due to pay interest on the rent or any unpaid part
            until payment is actually made. The tenant does not have the right
            to set off the rent against any on-going maintenance or works being
            done or to be done in or on the house, including but not limited to
            plumbing and wifi issues.
          </p>
          <p>
            <strong>2.3</strong> To occupy the premises as the tenants only or
            principal home.
          </p>
          <p>
            <strong>2.4</strong> To be held liable for the fair net costs
            involved in carrying out repair and maintenance to the premises or
            its fixtures or fittings where such action is required as a result
            of negligence, or significant breach of this agreement, or mis-use,
            by the tenant or his invited guests or visitors.
          </p>
          <p>
            <strong>2.5</strong> Utilities including, but not limited to; gas,
            electric, water, council tax, broadband, phone line and television
            licence for communal area, are included in the tenants&apos; rent.
            However, the tenant agrees to a fair usage policy where if the
            combined utility cost is greater than £50 per tenant per month,
            tenants of the property may be jointly liable for any amount over
            this which is payable on demand.
          </p>
          <p>
            <strong>2.6</strong> To not be responsible for payment of all
            associated charges in respect of the use and supply at the premises
            during the tenancy of any telephone, service of electricity, oil,
            and any other relevant fuels, water and environmental services.
          </p>
          <p>
            <strong>2.7</strong> Where the premises are served by a septic tank
            or cesspit, to not be responsible for the reasonable costs of
            emptying or clearing such facilities, as required, during the
            tenancy.
          </p>
          <p>
            <strong>2.8</strong> The landlord is responsible, at commencement of
            the tenancy, to notify the local authority responsible for the
            collection of Council Tax and the suppliers of such services or
            utilities of tenant&apos;s liability for their charges and have all
            such accounts transferred into the tenant&apos;s name for the
            duration of the tenancy.
          </p>
          <p>
            <strong>2.9</strong> Where the tenant allows, either by default of
            payment or by specific instruction, the utility or other services to
            be cut off, either during, or at the end of the tenancy, to pay or
            be liable to pay, the costs associated with reconnecting or resuming
            those services.
          </p>
          <p>
            <strong>2.10</strong> Not to tamper, interfere with, alter or add to
            the gas, water or electrical installations or meters, either in or
            serving the premises.
          </p>
          <p>
            <strong>2.11</strong> Not to have or allow a key meter to be
            installed or any other meter which is operated by the insertion of
            coins, or a pre-paid card, or key, without the prior consent of the
            landlord or his agent which will not be unreasonable withheld.
          </p>
          <p>
            <strong>2.12</strong> Not to change the supplier of the domestic
            utilities or services referred to in the above clauses without prior
            consent of the landlord or his agent.
          </p>
          <p>
            <strong>2.13</strong> Not to change transfer any existing telephone
            number at the premises without the prior consent of the landlord or
            his agent.
          </p>
          <p>
            <strong>2.14</strong> The tenant is not permitted to bring any gas
            appliances, candles, incense burning equipment or open pan deep
            frying equipment into the premises.
          </p>
          <p>
            <strong>2.15</strong> Where the tenant is notified prior to
            commencement of the tenancy, in writing or by the provision of copy
            documents, of any agreements or restrictions contained in any
            superior or head lease affecting the premises which may bind the
            landlord (and his tenant) in the use or occupation of the premises,
            not to break such agreements or restrictions.
          </p>
          <p>
            <strong>2.16</strong> Not to use the premises, or knowingly allow it
            to be used, for illegal or immoral purposes and that includes the
            use of any illegal drugs which are or become prohibited or
            restricted by statute.
          </p>
          <p>
            <strong>2.17</strong> For the duration of the tenancy, the landlord
            is to pay the appropriate terrestrial television licence fee, cable
            television or satellite television charges (if any) for the use of
            any television, or associated broadcast receiving equipment (if any)
            on the premises for the communal area only.
          </p>
          <p>
            <strong>2.18</strong> To use the premise as a single private
            residence for the occupation of the tenant and not to carry on any
            formal or registered trade, business or profession there.
          </p>
          <p>
            <strong>2.19</strong> Not to sublet, take in lodgers or paying
            guests without the landlord or his agent&apos;s prior consent.
          </p>
          <p>
            <strong>2.20</strong> Not to assign the tenancy of the premises, or
            any part of it without the landlord&apos;s prior consent, which will
            not be unreasonable withheld.
          </p>
          <p>
            <strong>2.21</strong> As quickly as is practical after receipt, to
            send to the landlord or his agent any formal or legal notice or
            orders or other similar document delivered to the promises by a
            third relate to, or might significantly affect, the premises, its
            boundaries or adjacent properties.
          </p>
          <p>
            <strong>2.22</strong> To pay, or be liable to pay, the reasonable
            net costs incurred by the landlord, or his agent or professional
            adviser, in successfully enforcing or remedying a notable breach of,
            or significant failure to comply with, the obligations of the tenant
            under this agreement.
          </p>
          <p>
            <strong>2.23</strong> To be liable at any time to reimburse the
            landlord or his agent any sums which the landlord or his agent is
            required to repay to the local authority in respect of Housing
            Benefit which has been paid direct to the landlord or his agent on
            behalf of the tenant, and accepted in good faith, but is
            subsequently shown to have been paid incorrectly or as a result of
            fraud, error or ineligibility of the tenant.
          </p>
          <p>
            <strong>2.24</strong> In the event of loss or damage by fire, theft,
            attempted theft, impact or other causes to the landlord&apos;s
            premises or its contents, to promptly inform the authorities as
            appropriate and the landlord or his agent as soon as is practicable.
          </p>
          <p>
            <strong>2.25</strong> Not to deliberately do anything, and to take
            reasonable and prudent steps not to allow anything to be done by
            invited guests or visitors, which leads to devastation, harm or ruin
            of the premises or its contents.
          </p>
          <p>
            <strong>2.26</strong> To reimburse the landlord for any excess sum,
            up to a maximum of £100, payable under the landlord&apos;s insurance
            policy for each and any claim on the landlord&apos;s policy
            resulting from any action or inaction on the part of the tenant, his
            invited visitors or guests in breach of this agreement.
          </p>
          <p>
            <strong>2.27</strong> Before leaving the premises empty or
            unoccupied for any continuous period in excess of 14 days, to notify
            the landlord or his agent in advance and fully co-operate and comply
            (and bear the fair cost of such compliance) with any reasonable
            requirements or conditions relating to the security or safety of the
            premises and its contents whilst being left empty or unoccupied.
          </p>
          <p>
            <strong>2.28</strong> Not to change any burglar alarm codes (if any)
            without the prior consent of the landlord or his agent.
          </p>
          <p>
            <strong>2.29</strong> Not to change, alter, add to or otherwise
            damage any locks or bolts on the premises (except in the case of an
            emergency) without the prior consent of the landlord or his agent.
          </p>
          <p>
            <strong>2.30</strong> If any lock or bolt is installed or changed on
            or in the premises without the prior consent of the landlord or his
            agent to remove them if so required by the landlord or his agent and
            be responsible for the fair costs of making good any resultant
            damage to the premises or spoilage of decoration.
          </p>
          <p>
            <strong>2.31</strong> To take adequate precautions to keep the
            premises, including its external doors or windows, locked and
            secured, and any burglar alarm set, when the premises are empty.
          </p>
          <p>
            <strong>2.32</strong> During the tenancy, to take such reasonable
            precautions expected of a householder to keep the premises free of
            infestation by vermin, rodents or animal fleas.
          </p>
          <p>
            <strong>2.33</strong> Not to dig up, or cut down, any trees, shrubs
            or bushes or timber (if any), except with the landlord&apos;s prior
            consent.
          </p>
          <p>
            <strong>2.34</strong> To cut the grass (if any) of the premises with
            an appropriate garden mower as necessary from time to time to keep
            the grass in, or bring about, a neat and tidy condition.
          </p>
          <p>
            <strong>2.35</strong> To take reasonable and proper care in the use
            of the premises, its fixtures and fittings and not to deliberately
            damage or alter the premises, its décor, fixtures and fittings
            either internally or externally.
          </p>
          <p>
            <strong>2.36</strong> At least once every nine-months of the tenancy
            the landlord is to have any working chimneys, made use of by the
            tenant, swept by an appropriate person and retain a suitable record,
            receipt or invoice to demonstrate compliance with this clause.
          </p>
          <p>
            <strong>2.37</strong> The landlord is to clean or have cleaned both
            internally and externally all reasonably accessible windows of the
            premises as necessary during the tenancy, and within one month prior
            to the end of the tenancy.
          </p>
          <p>
            <strong>2.38</strong> Where the tenant, his invited guests or
            visitors are responsible by any action for any cracked or broken
            windows or door glass on the premises, to promptly repair or replace
            such glass to the required specification and be liable for the costs
            involved.
          </p>
          <p>
            <strong>2.39</strong> To take care not to cause an overload of the
            electrical circuits by the inappropriate use of multi socket
            electrical adaptors or extension cables when connecting appliances
            to the mains electric systems.
          </p>
          <p>
            <strong>2.40</strong> To take care to replace or have replaced
            appropriately, light bulbs, fluorescent tubes, fuses etc. in your
            room as and when necessary during the tenancy and to ensure that all
            light bulbs, fluorescent tubes, fuses are in place and in working
            order in your room at the end of the tenancy.
          </p>
          <p>
            <strong>2.41</strong> To test at regular intervals any battery
            operated smoke alarms fitted in the premises and replace any battery
            in an alarm, which is found not to be working.
          </p>
          <p>
            <strong>2.42</strong> To be responsible for unblocking or clearing
            stoppages in any sink, or basin, or toilet, or waste pipe which
            serve such fixtures if they become blocked with the tenant&apos;s
            waste, or as a result of the action or inaction of the tenant (or
            his invited visitors or guests) in breach of obligations under this
            agreement.
          </p>
          <p>
            <strong>2.43</strong> Not to alter the appearance or decoration or
            structures of the premises or its fixtures or fittings either
            internally or externally without first obtaining the prior consent
            of the landlord or his agent.
          </p>
          <p>
            <strong>2.44</strong> To take care not to put, or allow to be put,
            any damaging oil, grease or other harmful or corrosive substances
            into the washing or sanitary appliances or drains within the
            premises.
          </p>
          <p>
            <strong>2.45</strong> To notify the landlord or his agent as
            immediately as is practicable of any defect, damage or disrepair
            which develops or occurs at the premises which might be, or might
            reasonably be expected to become, a hazard or danger to life or limb
            or to the fabric of the premises itself.
          </p>
          <p>
            <strong>2.46</strong> Not to keep on, or bring into the premises,
            any inflammable or other material or equipment (apart from properly
            stored fuel or similar material in quantities appropriate for normal
            domestic use) which might reasonably be considered to be a fire
            hazard, or otherwise dangerous to the premises or the health of its
            occupants or of the neighbours.
          </p>
          <p>
            <strong>2.47</strong> To take such reasonable and prudent
            precautions expected of a householder as may be required from time
            to time, but particularly between and including the months of
            November to February, to prevent damage by frost or freezing
            occurring to the premises, its fixtures or fittings.
          </p>
          <p>
            <strong>2.48</strong> Not to place or fix any aerial, satellite
            dish, or notice or advertisement or board onto the premises (either
            externally or internally) without first obtaining the prior consent
            of the landlord or his agent.
          </p>
          <p>
            <strong>2.49</strong> Not to do anything at the premises (including
            the playing of excessively loud music) which is a nuisance or
            annoyance or causes damage to the premises or adjacent or adjoining
            premises or neighbours or might reasonably be considered to be
            anti-social behaviour.
          </p>
          <p>
            <strong>2.50</strong> Not to remove from the premises any of the
            landlord&apos;s fixtures or fittings, or to store them in a loft,
            basement, garage or outbuildings (if any) without obtaining the
            prior consent of the landlord or his agent.
          </p>
          <p>
            <strong>2.51</strong> Not to fix or hang, any posters, pictures,
            photographs or ornaments to the walls or ceilings or woodwork with
            nails, glue, sticky tape, blu-tac or similar adhesive fixings other
            than solely with a reasonable number of commercially made pictures
            hooks appropriate for the purpose.
          </p>
          <p>
            <strong>2.52</strong> Not to store or keep on the premises or any
            communal car park any boat, caravan or commercial vehicle without
            the prior consent of the landlord or his agent.
          </p>
          <p>
            <strong>2.53</strong> Not to repair cars, motorcycles, vans or other
            commercial vehicles at the premises apart from general maintenance,
            from time to time, to a vehicle of which the tenant is the
            registered keeper.
          </p>
          <p>
            <strong>2.54</strong> To take reasonable and prudent steps to
            adequately heat and ventilate the premises in order to help prevent
            condensation.
          </p>
          <p>
            <strong>2.55</strong> Where the tenant clearly breaks, fails to
            comply with, any of the obligations relating to looking after or the
            use and occupation of the premises set out under this agreement, the
            tenant agrees to carry out (at his own cost) any reasonable and
            necessary corrective measures or action within a maximum of four
            weeks.
          </p>
          <p>
            <strong>2.56</strong> During the last two months of the tenancy,
            upon a minimum of 24 hours prior written notification, to permit the
            premises to be viewed during working hours and /or at other
            reasonable times including at weeks-ends by prospective tenants or
            purchasers who are authorised to do so by the landlord or his
            appointed agent.
          </p>
          <p>
            <strong>2.57</strong> During the last two months of the tenancy to
            permit, at the discretion of the landlord or his agent, a For Sale
            or To Let board to be displayed on the premises.
          </p>
          <p>
            <strong>2.58</strong> In order to comply with the requirements of
            the Party Walls etc. Act 1996 (but only upon appropriate formal
            written notice), to permit the owner of a neighbouring property, or
            their authorised workman or their professional advisor, access to
            the landlord&apos;s premises in order to carry out any work required
            to the premises or their neighbouring property under the Party Walls
            etc. Act 1996.
          </p>
          <p>
            <strong>2.59</strong> To permit the landlord or his agent or
            authorised workman, from time to time upon a minimum of 24 hours
            prior written notification (except in the case of emergency), to
            enter the premises during working hours and or at other reasonable
            times including at week-ends, to inspect the premises, its fixtures
            and fittings, and to do work which might be required from time to
            time in order to fulfil obligations under this agreement or relevant
            legislation.
          </p>
          <p>
            <strong>2.60</strong> The tenant is required to give a minimum of
            one month&apos;s written notice to the landlord&apos;s agent to
            terminate this agreement, such notice cannot expire prior to the
            expiry date as specified in clause 1.8.
          </p>
          <p>
            <strong>2.61</strong> To clean to (or pay for the cleaning to) a
            good standard, the premises, its fixtures and fittings, including
            the cleaning of any carpets, curtains (including net curtains),
            blankets, bedding, upholstery etc. which have become soiled, stained
            or marked during the tenancy.
          </p>
          <p>
            <strong>2.62</strong> To remove all the tenant&apos;s refuse and
            rubbish from within the premises and to ensure that it is stored
            outside in proper receptacles and, where appropriate, make
            arrangement with the local authority or others for its prompt
            removal at the expense of the tenant.
          </p>
          <p>
            <strong>2.63</strong> To return all keys to the premises (including
            any new or additional or duplicate keys cut during the tenancy) to
            the landlord or his agent promptly on the last day of tenancy.
          </p>
          <p>
            <strong>2.64</strong> Having replaced the landlord&apos;s items in
            the same areas of premises (as far as is practicable) as at
            commencement of the tenancy, to co-operate in the checking of any
            Inventory and/or Schedule of Condition.
          </p>
          <p>
            <strong>2.65</strong> To remove all tenant&apos;s belongings, or
            property, or personal effects, or foodstuffs, or furnishings and
            equipment from the premises on, or before, the last day of the
            tenancy.
          </p>
          <p>
            <strong>2.66</strong> Any of the tenant&apos;s belongings, or
            property, or personal effects, or foodstuffs or furnishing and
            equipment left behind at the premises will be considered abandoned
            if, after the end of tenancy and after the expiry of 14 days written
            notice sent, addressed to the tenant, to the single address required
            to be provided by the tenant under clause 2.68 of this agreement.
          </p>
          <p>
            <strong>2.67</strong> Where such items belonging to the tenant
            described in clause 2.62, 2.65, 2.66 above are of a bulky or
            unwieldy nature, (either individually or as a collection) which may
            inhibit, or unreasonably inconvenience the landlord or other persons
            immediate ability to comfortably occupy or make use of, or re-let,
            or sell the premises, or any part of the premises, the landlord
            reserves the right to charge the tenant damages or compensation at a
            rate equivalent to the rent, calculated on a daily basis, until the
            items are removed.
          </p>
          <p>
            <strong>2.68</strong> To promptly provide as soon as is practicable
            just before or immediately at the end of the tenancy a forwarding or
            correspondence address to the landlord or his agent; for ease of
            administration and communication between the parties, including the
            processes involved in the return of the deposit.
          </p>
        </div>
      </div>

      <div className="contract-section">
        <h3>3. LANDLORD&apos;S OBLIGATIONS</h3>
        <p className="contract-text">
          PLEASE NOTE: These are the things that the landlord agrees to do or
          not to do. If the landlord breaks, or does not comply with any of his
          obligations in this agreement or of his statutory obligations, the
          tenant may be entitled to claim damages or compensation from the
          landlord, or to seek other legal remedies against the landlord.
        </p>
        <div className="contract-list">
          <p>
            <strong>3.1</strong> To keep the premises and the landlord&apos;s
            contents (if any) insured for such sums and on such terms as the
            landlord feels appropriate against fire and other risks normally
            covered by a comprehensive household policy and any other such risks
            as the landlord considers necessary from time to time.
          </p>
          <p>
            <strong>3.2</strong> Not to interrupt or interfere with the
            tenant&apos;s lawful occupation, enjoyment or use of the premises
            other than in an emergency or in the normal and lawful process of
            exercising or implementing the landlord&apos;s rights and
            obligations under this agreement and having provided at least a
            minimum of 24 hours prior written notification.
          </p>
          <p>
            <strong>3.3</strong> To comply with the requirements of section 11
            of the Landlord and Tenant Act 1985 which imposes obligations on the
            landlord to repair the structure and exterior (including drains,
            gutters and external pipes) of the premises; to keep in repair and
            proper working order the installations in the premises for supply of
            water, gas and electricity and for sanitation (including basins,
            sinks, bath and sanitary conveniences, but not other fixtures,
            fittings and appliances for making use of water, gas or
            electricity); to keep in repair and proper working order the
            installations in the premises for space heating and heating water.
          </p>
          <p>
            <strong>3.4</strong> Where the landlord supplies a working burglar
            alarm with the premises at commencement of the tenancy; to keep in
            working order and repair, but only where such a repair is not caused
            by negligence or mis-use by the tenant, his invited guests or
            visitors.
          </p>
          <p>
            <strong>3.5</strong> To take reasonable steps to ensure that the
            landlord&apos;s domestic gas and electrical appliances and other
            similar mechanical appliances in the premises for which he is
            responsible are safe, in proper working order and in repair both at
            commencement of, and during the tenancy, as may be necessary from
            time to time in order to comply with the landlords obligations under
            the Gas Safety (Installation and Use) Regulations 1998, the
            Electrical Equipment (Safety) Regulations 1994, the Plugs and
            Sockets etc., (Safety) Regulations 1994.
          </p>
          <p>
            <strong>3.6</strong> The landlord confirms that he is the sole or
            joint owner of the leasehold or freehold interest in the premises
            and that all appropriate consents necessary for him to sign this
            agreement have been obtained.
          </p>
          <p>
            <strong>3.7</strong> Where the landlord&apos;s normal place of abode
            is not in the United Kingdom he agrees to nominate a representative
            or appoint an agent to whom the rent due under this agreement shall
            be paid. If the landlord fails to appoint such a representative or
            agent the landlord agrees that the tenant will be entitled to
            deduct, and hold for payment to the Inland Revenue, basic rate tax
            from the rent as may be required by the Finance Act 1995 or
            subsequent similar legislation as it relates to non UK resident
            landlords.
          </p>
          <p>
            <strong>3.8</strong> Should the landlord wish to terminate the
            tenancy he must give the tenant two months written notice, this
            notice must be served at least two months prior to the end date of
            the tenancy agreement. (or subject to Housing Act Schedule 2 Grounds
            1-17 the date he wishes the tenancy to terminate). Should the
            landlord wish to terminate a Statutory Periodic Tenancy he must give
            at least one month&apos;s written notice to the tenant to end on the
            last day of a rental period.
          </p>
        </div>
      </div>

      <div className="contract-section">
        <h3>4. THE DEPOSIT</h3>
        <p className="contract-text">
          The deposit referred to in clause 1.10 will be held as security for
          and in respect of, the performance by the tenant of all the
          obligations of the tenant in this agreement including those set out in
          this section (4); to pay for or be used for:
        </p>
        <div className="contract-list">
          <p>
            <strong>4.1</strong> Any damage, or compensation for damage, to the
            premises its fixtures and fittings or for missing items for which
            the tenant may be liable, subject to an apportionment or allowance
            for reasonable fair wear and tear and for the age and condition of
            each and any such item at commencement of the tenancy.
          </p>
          <p>
            <strong>4.2</strong> The fair costs incurred in compensating the
            landlord for, or for rectifying or remedying any meaningful breach
            by the tenant of his obligations under this agreement, including
            those relating to the cleaning of the premises, its fixtures and
            fittings.
          </p>
          <p>
            <strong>4.3</strong> Any sum which is or becomes repayable by the
            landlord or his agent to the local authority with regard to Housing
            Benefit which has previously been paid directly to the landlord or
            his agent relating to the tenant named in this agreement.
          </p>
          <p>
            <strong>4.4</strong> Any unpaid account for utilities or water
            charges or environmental services or other similar services or
            Council Tax incurred at the property for which the tenant is liable.
          </p>
          <p>
            <strong>4.5</strong> Any rent or other money lawfully due or payable
            by the tenant under this agreement of which the tenant has been made
            aware and which remains unpaid after the end of tenancy.
          </p>
          <p>
            <strong>4.6</strong> After the end of the tenancy no deduction shall
            be made from the deposit unless, or until, the reason for the nature
            of the deductions have been notified in writing to the tenant. Such
            correspondence will be sent, addressed to the tenant, to the single
            address required to be provided by the tenant under clause 2.68 of
            this agreement or, in the absence of such an address, to the address
            of the premises subject to this tenancy given at clause 1.6.
          </p>
          <p>
            <strong>4.7</strong> Where a dispute or difference relating to the
            treatment, application or repayment of the deposit remains
            unresolved over 28 days after the end of the tenancy the dispute
            can, with the written agreement of both parties, be referred to the
            Chairman or Chief Executive of ARLA (Association of Residential
            Letting Agents) for the appointment of an arbitrator or expert or an
            appropriate alternate dispute resolution process, to provide an
            adjudication on the dispute.
          </p>
          <p>
            <strong>4.8</strong> The deposit (or appropriate balance) will be
            returned as soon as is reasonably practicable once vacant possession
            has been obtain following the final day of the tenancy; after the
            deduction of any sums or money (if any), in accordance with section
            4, which are due to the landlord arising from the tenant&apos;s
            breach of, or failure to comply with, the tenant&apos;s obligations
            under this agreement.
          </p>
          <p>
            <strong>4.9</strong> The deposit (or appropriate balance) will be
            returned to the tenant by cheque, or bank draft or direct electronic
            bank transfer and where the tenant comprises more than one person,
            the deposit (or appropriate balance), may be returned to any one of
            them individually for and on behalf of all tenants.
          </p>
          <p>
            <strong>4.10</strong> If monies lawfully due to the landlord under
            this agreement are more than the deposit held, the tenant will be
            liable to pay any excess to the landlord within 14 days of written
            demand.
          </p>
        </div>
      </div>

      <div className="contract-section">
        <h3>5. GENERAL</h3>
        <div className="contract-list">
          <p>
            <strong>5.1</strong> The landlord&apos;s repairing obligations
            referred to in clause 3.3 shall not be construed as requiring the
            landlord to carry out works or repairs for which the tenant is
            liable.
          </p>
          <p>
            <strong>5.2</strong> The contract (Rights of Third Parties) Act 1999
            does not apply to this agreement.
          </p>
          {/* Add more general clauses as needed */}
        </div>
      </div>

      <div className="contract-section">
        <h3>6. DATA PROTECTION & CONFIDENTIALITY</h3>
        <p className="contract-text">
          Letting agents may share details about the performance of obligations
          under this agreement by the landlord and tenant; past, present and
          future known addresses of the parties, with each other, with credit
          and reference providers for referencing purpose and rental decisions.
        </p>
      </div>

      <div className="contract-section">
        <h3>7. SIGNATURES</h3>
        <div className="contract-signatures">
          <div>
            <p className="contract-text">Landlord&apos;s Signature:</p>
            <div className="signature-line"></div>
            <p className="signature-date">Date  </p>
          </div>
          <div>
            <p className="contract-text">Tenant&apos;s Signature:</p>
            <div className="signature-line"></div>
            <p className="signature-date">Date: </p>
          </div>
          <div>
            <p className="contract-text">Guarantor&apos;s Signature:</p>
            <div className="signature-line"></div>
            <p className="signature-date">Date: </p>
          </div>
        </div>
      </div>

      <div className="contract-section">
        <h3>8. SPECIAL OR ADDITIONAL CLAUSES</h3>
        <div className="contract-list">
          <p>
            <strong>8.1</strong> Utilities including, but not limited to; gas,
            electric, water, council tax, broadband, phone line and television
            licence for communal area, are included in the tenants&apos; rent.
            However the tenant agrees to a fair usage policy where if the
            combined utility cost is greater than £50 per tenant per month,
            tenants of the property may be jointly liable for any amount over
            this which is payable on demand. This is at the discretion of the
            landlord. Broadband provided by the landlord is for domestic use by
            tenants only and for reasonable use for your employment or studies.
            The broadband is not to be used excessively and in such event the
            cost of broadband will be charged to the tenant. In the event that
            the data limit is reached then there is no obligation on the
            landlord to provide more data.
          </p>
          <p>
            <strong>8.2</strong> This is a non-smoking property. The tenant
            agrees that neither they nor their guests or visitors will smoke in
            the property. If the tenant or their guests or visitors smoke
            outside the property they agree to do so away from open doors or
            windows and to keep the exterior of the property clear of ashtrays
            and discarded cigarettes etc. If the tenant breaches this clause
            then they are responsible for the reasonable costs of rectification
            of any damage caused or of any appropriate cleaning, fumigation
            etc., required.
          </p>
          <p>
            <strong>8.3</strong> The tenant or their guests or visitors may not
            bring any pet or animal into the property or within the grounds of
            the property without the written consent from MB Parr Investments.
          </p>
          <p>
            <strong>8.4</strong> This a professional only household, should the
            tenant lose their job they must notify the landlord and will have
            one month to find a new job or they will be given two months notice
            to leave. It is not acceptable to use housing benefit to pay the
            rent at this property.
          </p>
          <p>
            <strong>8.5</strong> The tenant agrees to keep the property
            including communal areas clean and tidy; and that they will not
            store their belongings in or obstruct any communal area of the
            property without the written consent from the landlord.
          </p>
          <p>
            <strong>8.6</strong> We recommend that the tenant take out at least
            minimal contents insurance to cover their belongings as they will
            not be covered by the landlords insurance.
          </p>
          <p>
            <strong>8.7</strong> Due to the nature of this tenancy agreement the
            following clauses are not relevant: 2.5, 2.6, 2.7, 2.8, 2.9, 2.17,
            2.23, 4.3 and 4.4.
          </p>
          <p>
            <strong>8.8</strong> Rent payments must be set up via standing order
            to arrive in MB Parr Investments bank account on the 1st of each
            month. Failure to do so will result in a breach of contract. Any
            maintenance or repairs charges must be paid within 30 days of
            invoice.
          </p>
          <p>
            <strong>8.9</strong> Late Payment charges for rent and repairs, per
            tenant/guarantor is £15 per week for every week a late payment is
            missed.
          </p>
          <p>
            <strong>8.10</strong> The Guarantor as stated in clause 1.11 has
            agreed to act as guarantor of this tenancy (and any extension) for
            the tenant stated in clause 1.4. The guarantor is responsible to
            Guaranteed Liverpool Lets Limited for any loss, damage, costs or
            other expenses (including rent) arising out of the tenant&apos;s
            breach of, or failure to comply with, the obligations and
            responsibilities of this agreement.
          </p>
          <p>
            <strong>8.11</strong> Currently, council tax on the property is
            charged for the whole dwelling. In the event, should there be any
            change in the legislation where council tax is charged by the room,
            the tenant will become liable for any council tax due for their
            dwelling.
          </p>
          <p>
            <strong>8.12</strong> Nuisance and Anti-social Behaviour: Not to
            cause, or allow household members, or visitors to engage in
            antisocial behaviour, which means any conduct causing or capable of
            causing a nuisance or annoyance to the landlord, other occupiers,
            neighbours or people engaging in lawful activity within the
            locality.
          </p>
          <p>
            <strong>8.13</strong> Key to room is to be made available on request
            to the letting agent for a maximum of 2 clear days after which it is
            to be returned and signed for. Under no circumstances is it to be
            sublet or used for financial gain. Please refer to section 2.19. The
            landlord reserves the right with agreed notice to convert this room
            to lettable accommodation and will notify agent and tenants in
            accordance with AST terms and conditions.
          </p>
          <p>
            <strong>8.14</strong> You agree that we will be controlling and
            processing your personal data for the legitimate reason of managing
            the property that you reside in. Your data will be stored securely.
            The personal data we hold for you is itemised in your tenancy
            application form. You expressly consent to MB Parr Investments
            controlling and processing your data for this purpose. You also
            agree that we will be sharing your information with any third party
            that has legitimate interest, including but not limited to City
            Council, Mortgage Lenders, Property Valuers and Deposit Protection
            Scheme.
          </p>
          <p>
            <strong>8.15</strong> This property that you are renting is covered
            by a mortgage.
          </p>
        </div>
      </div>
    </div>
  );
};
