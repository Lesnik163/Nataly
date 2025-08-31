import { getProcedures } from '@/lib/services/procedures';
import { Card } from './_components/Card';
import { HeaderContent } from './_components/HeaderContent';
import { BottomAdditional } from './_components/BottomAdditional';
import type { Procedure } from '@prisma/client';

const Procedures = async () => {
  const procedures = await getProcedures();

  return (
    <div className='min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 py-16'>
      <div className='container mx-auto px-4'>
        <HeaderContent />
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {procedures.map((procedure: Procedure) => (
            <Card key={procedure.id} procedure={procedure} />
          ))}
        </div>
        <BottomAdditional />
      </div>
    </div>
  );
};

export default Procedures;
