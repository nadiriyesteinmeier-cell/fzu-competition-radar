window.PAPER_DATA_UPDATED_AT = "2026-11-08";
window.PAPER_ITEMS = [
  {
    "id": "2611.08486",
    "title": "Do You Miss the Nights We Spent Crafting Figures? Rethinking Teaser and Framework Figures in the Age of Generative AI",
    "authors": [
      "Xiaoqi Zhao",
      "Youwei Pang",
      "Kailai Zhou"
    ],
    "abstract": "Scientific figures give research ideas a visual form through choices of abstraction, composition, and emphasis. Generative AI offers new ways to realize these choices, raising questions about explanatory clarity and purposeful visual expression. We examine these questions through a visual retrospective of 371 motivation and framework figures from 200 papers. The corpus comprises a quota-based main sample of 160 papers spanning four temporal periods and a separate purposive style-contrast sample of 40 papers. A single multimodal judge evaluates six dimensions of communication and design, with three repeated judgments per figure. We attempt source-constrained revisions of all 371 figures, of which 369 pass the recorded fidelity checks. Original-figure ratings show no uniform decline across periods. Revisions increase mean clarity ratings by 0.428 points and decrease aesthetic coherence ratings by 0.111 points on a five-point scale. Gains in the six-dimension average are larger for main-sample motivation figures than for frameworks. Case analyses show that added explanation can clarify comparisons while leaving typographic hierarchy and visual economy unresolved. These model-based findings support researcher-led design, with AI assisting exploration and authors retaining responsibility for explanatory purpose, composition, and scientific relationships. The accompanying atlas and evaluation records are available at https://ntu-ai4x.github.io/Rethinking_Figures/index_en.html.",
    "published": "2026-11-05T18:59:33Z",
    "updated": "2026-11-05T18:59:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08486"
  },
  {
    "id": "2611.08485",
    "title": "Where and Why is Grounded Reasoning Useful?",
    "authors": [
      "David Yan",
      "Le Xue",
      "Forrest Huang",
      "Qiuyi Zhang",
      "Dustin Tran",
      "Andrew M. Dai",
      "Yinfei Yang"
    ],
    "abstract": "Grounded reasoning, where a model outputs text coordinates of relevant locations in chain-of-thought reasoning, is a common strategy for solving complex visual reasoning problems. However, the benefits and limitations of grounded reasoning are understudied. We study where and why grounded reasoning is most useful. To do so, we introduce a chain-of-thought analysis method to measure how much a model uses its outputted grounding in its thinking trace and perform a detailed ablation study of a grounded reasoning training recipe. We find that grounded reasoning improves counting but shows no significant gain over baselines without coordinate grounding across a wide range of spatial reasoning and perception benchmarks. Using several synthetic tasks, we show that grounded reasoning is most useful when a task requires undescribable references, which are visual concepts that are difficult to describe in language. However, we observe that many existing visual reasoning benchmarks are solvable with only describable text references. To close this gap, we introduce BrickVision, a new benchmark that requires undescribable visual references to solve.",
    "published": "2026-11-05T18:59:32Z",
    "updated": "2026-11-05T18:59:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08485"
  },
  {
    "id": "2611.08483",
    "title": "SwarmEvolve: Latent Agent Swarms for Evolutionary Discovery and Optimization",
    "authors": [
      "Qile Jiang",
      "George Em Karniadakis"
    ],
    "abstract": "LLM-guided evolutionary search uses AI agents to improve programs for mathematical and computational problems by iteratively refining solutions and combining high-scoring methods. However, the process is often slow because the LLM generates a long textual chain of thought for each round and must repeat this generation many times to maintain population diversity. We present SwarmEvolve, a framework in which hundreds of low-cost agents per round work in swarms, reason in latent space without decoding to text, and share information by passing KV caches. Each swarm studies the problem from a different angle. A novelty filter keeps the most distinct agent ideas by directly measuring the distances between the agents' hidden state vectors. Crossover of ideas happens naturally in latent space, as a summarizer agent receives the combined KV caches of all swarm members. On 21 problems in mathematical discovery and scientific computing, SwarmEvolve gets the highest average score and needs a median of only 3 to 8 minutes to reach the best scores that other state-of-the-art frameworks reach in 60 minutes. On several problems, SwarmEvolve with Qwen3 8B improves on the solutions that AlphaEvolve first found with frontier LLMs. Our work shows that agent swarms that communicate in latent space offer a fast, low-cost approach to program search for scientific problems.",
    "published": "2026-11-05T18:59:29Z",
    "updated": "2026-11-05T18:59:29Z",
    "categories": [
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2611.08483"
  },
  {
    "id": "2611.08478",
    "title": "Scientist World: Grow a Research World for AI-Scientists",
    "authors": [
      "Taiming Lu",
      "Sachin Konan",
      "Zhuang Liu"
    ],
    "abstract": "AI-Scientists arrived, but a world for them to grow in did not. Human scientists take theirs for granted $-$ centuries of open problems and shared ideas, waiting in the scientific literature. To AI-Scientists, that world is readable but not runnable, so we build Scientist World for them: every research paper becomes an executable environment. Our autonomous pipeline extracts each paper's open-ended research question and reproduces its proposed method as the baseline; an AI-Scientist entering the environment is evaluated against what the human authors achieved. We release the first 1,000 verified environments. With the world as an evaluation, we found that frontier AI-Scientists can already surpass the human researchers 74% of the time. As a record of how AI does science, it contains 6,400 hours of research traces, with every idea, experiment, failure, and success. As a training ground, we are able to raise (+158%) a small model to match frontier models in research ideation. At last, AI-Scientists' own world has arrived, grown from and growing with science itself.",
    "published": "2026-11-05T18:58:17Z",
    "updated": "2026-11-05T18:58:17Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.08478"
  },
  {
    "id": "2611.08477",
    "title": "EgoGeneralist: Unifying Egocentric Action-Video Tasks through Video-Native Modeling",
    "authors": [
      "Yanlin Jin",
      "Bowen Yang",
      "Cheng Zhang",
      "Yifan Yang",
      "Zhe Li",
      "Jianfei Cai",
      "Kai Zhu"
    ],
    "abstract": "Modern video models possess strong visual priors, yet do not natively represent human action in metric 3D space. We present EgoGeneralist, which adapts pretrained video generators to unify action-conditioned egocentric video generation, pose estimation, and joint action-video generation. Our role-adaptive action renderer provides video-native representations for multidirectional action-video learning, making metric motion usable as both a spatial control signal and a recoverable generation target. Cross-stream action-video coupling establishes close correspondence between metric motion and visual dynamics through lightweight adaptation while preserving the pretrained visual prior. Together, these designs establish a generalist framework spanning five action-video tasks. Despite adaptation only on controlled laboratory recordings, EgoGeneralist generalizes to diverse unseen scenes and interactions with effective action control and visual quality, bridging pretrained visual knowledge and metric 3D human motion.",
    "published": "2026-11-05T18:58:13Z",
    "updated": "2026-11-05T18:58:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08477"
  },
  {
    "id": "2611.08472",
    "title": "XStack: A Benchmark for ML Repo Migration",
    "authors": [
      "Linrong Cai",
      "Taiming Lu",
      "Haozhe Chen",
      "Zhuang Liu"
    ],
    "abstract": "ML code should run where researchers choose, not where it was first written. Today, machine learning code mainly lives in two ecosystems, PyTorch on NVIDIA GPUs and JAX on Google TPUs. Migrating repositories between them means building and testing across frameworks and hardware. This migration is (1) a practical need, since it unlocks different hardware for researchers, and (2) a natural benchmark: it involves different frameworks and hardware, covers whole repositories, and is long-horizon and challenging. We introduce XStack, a benchmark that evaluates agents on migrating ML repositories between these two ecosystems. Each agent receives a PyTorch repository and a clean TPU machine and must deliver a JAX repository. Its output passes if it meets our grading criteria, based on the source repository's published result, authenticated and calibrated by us. Migration by agents remains unreliable: Claude Opus 5 passes 75%, GPT-5.6-sol 45%, and every other agent at most 40%. XStack is a step toward freeing ML code from its ecosystem. We release XStack to make progress toward reliable migration across frameworks and hardware measurable.",
    "published": "2026-11-05T18:55:54Z",
    "updated": "2026-11-05T18:55:54Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.08472"
  },
  {
    "id": "2611.08469",
    "title": "Same Behavior, Different Mechanism: What Finite Experiments Can Certify About Integrated Information",
    "authors": [
      "Linqian Wu",
      "Diaoxuan He"
    ],
    "abstract": "Interpretability, AI auditing and assessments of machine consciousness increasingly rest on mechanism-level quantities: functionals of a system's causal transition law that describe how it computes, not what it outputs. Experiments see that law only through finite, partial and noisy interventions. We ask when such a quantity is identifiable from an experiment's access, continuous in the mechanism and certifiable from finite data, and answer exactly for a deliberately demanding case - the integrated information $\\varphi$ of integrated information theory - in stochastic networks of four and five units with known ground truth. Behavior can be silent: a recurrent and a feed-forward network with identical input-output laws at their response delay carry 0.28 and 0 bits, yet internal recordings separate them within 4-53 trials. Partial access can be just as blind: in our examples, units left out of a one-step recording impose precision floors of 0.30-1.02 bits that no sample size lowers, and in all-but-self parity networks, recordings of any length see several hidden units only through the product of their fidelities - a symmetry that one intervention broke in exact checks. The measure has sharp edges: because $\\varphi$ selects a partition, and the cause and effect it specifies, by one criterion and reports another, infinitesimal changes of mechanism that cross an edge change it by 25-100% at 99% of the edges we found in random networks, and about 1% of surrogate models that fit interventional data almost perfectly misreport it by more than 20%. One-sided claims survive: the same data certify a lower bound on both sides of an edge, and we prove $\\varphi>1.004$ bits throughout a 64-dimensional region of mechanisms and certify it from about $10^7$ controlled transitions with false-certificate probability at most $α$. Measurability is thus a design question with computable answers.",
    "published": "2026-11-05T18:55:31Z",
    "updated": "2026-11-05T18:55:31Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "q-bio.NC"
    ],
    "url": "https://arxiv.org/abs/2611.08469"
  },
  {
    "id": "2611.08465",
    "title": "Towards interpreting any residual stream direction by scaling activation inversion",
    "authors": [
      "Celeste De Schamphelaere",
      "Juan J. Vazquez",
      "Ari Spiesberger",
      "Tomáš Gavenčiak",
      "Gavin Leech",
      "Euan Ong",
      "Jiahai Feng"
    ],
    "abstract": "To interpret a direction in a language model's residual stream, we can look for text that strongly activates it. But when such text is found by scanning a corpus, it is limited to what that corpus contains. We develop Maximally-Activating Example Metamodels (MAEMs), language models which map residual stream directions from a subject model to text exemplars that strongly activate those directions. Our objective is to maximise the cosine similarity of a supplied residual stream direction with the activations of the text generated by the MAEM. This label-free RL objective helps to scale MAEMs on diverse sources of residual stream directions. Empirically, we find the resultant metamodel produces informative exemplars: a Qwen3.6-27B MAEM inverts held-out activations better than corpus search or a natural-language autoencoder (NLA), beats corpus search (at 10M tokens) on a majority of held-out languages/domains, and activates 89% of held-out SAE features. It also identifies concepts behind steering vectors about as well as NLAs, recovers the payloads of LoRA backdoors more often than corpus search, and can even verbalise some model workspace inner monologue. Unlike explanations produced by other metamodels (e.g. NLAs), MAEM exemplars can be verified with a forward pass on the subject model, making the MAEM objective a grounded alternative for scaling the training of metamodels.",
    "published": "2026-11-05T18:54:40Z",
    "updated": "2026-11-05T18:54:40Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.08465"
  },
  {
    "id": "2611.08452",
    "title": "ReproBridge: Building Reproducibility into ML Research Artifacts",
    "authors": [
      "Yubo Wang",
      "Rui Meng",
      "Jaehyun Nam",
      "Tomas Pfister",
      "Jinsung Yoon"
    ],
    "abstract": "Reproducing machine learning experiments requires reconstructing procedures from information scattered across papers, released code, and supporting artifacts. For coding agents, reproduction success can therefore depend on their ability to fill in missing details, rather than on the released artifacts alone. We ask whether preserving recovered procedures and decisions improves subsequent independent reproduction. We define a standardized artifact design comprising a refined codebase, environment setup, experiment launchers, and a reproduction guide, and introduce ReproBridge, an agent workflow for constructing these refined reproducible artifacts. ReproBridge-Bench provides 1,029 tasks from 387 experiments across 36 papers, anchored by five human-verified reference scores per task. Agents attempt tasks in fresh sessions with raw code or refined artifacts; a separate Auditor checks execution evidence. Across four evaluated models, refined artifacts raise mean reproduction success from 76.4% to 92.6% and reduce downstream API spending by 19.7% on average. The cross-model success-rate spread narrows from 21.6 to 3.9 percentage points, with all four models achieving mean success rates above 90%. Removing any component reduces success in the ablation study, with the largest losses from code and environment removal. These results suggest that preserving execution knowledge helps even models with lower raw-code success reproduce experiments more reliably and at lower API cost.",
    "published": "2026-11-05T18:45:36Z",
    "updated": "2026-11-05T18:45:36Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.08452"
  },
  {
    "id": "2611.08449",
    "title": "VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding",
    "authors": [
      "Yu-Cheng Chou",
      "Shihao Wang",
      "Jin Huang",
      "Chi-Pin Huang",
      "Chiao-An Yang",
      "Xianzhe Fan",
      "Jing Wang",
      "Zhiqi Li",
      "Yuanguo Kuang",
      "Ruijie Zheng",
      "Johan Bjorck",
      "Sifei Liu",
      "Hang Su",
      "Abhishek Badki",
      "Lei Zhang",
      "Alan Yuille",
      "Linxi \"Jim'' Fan",
      "Jan Kautz",
      "Zhiding Yu"
    ],
    "abstract": "Models for physical AI tasks, such as robotics and autonomous driving, need not reason solely in language. They can use visual plans--points, bounding boxes, and trajectories--to represent spatial goals and anticipate motion. However, autoregressive vision-language models generate these plans one coordinate token at a time, making richer predictions increasingly costly. We introduce VFlash, a method for fast, accurate visual planning through Flash Primitive Decoding. VFlash exploits the known structure of visual primitives to predict their coordinates jointly, using a lightweight drafter that generates an entire primitive in one forward pass. The layout adapts to the primitive's type, dimensionality, and length, supporting compact boxes and long, variable-length trajectories. Crucially, spatial accuracy need not require reproducing an autoregressive model's exact token sequence. VFlash therefore trains on annotated primitives and directly accepts structurally valid predictions without target-token agreement. Across the evaluated 2D and 3D robot trajectory tasks, VFlash consistently reduces prediction errors relative to autoregressive decoding. Preliminary single-rollout measurements indicate approximately 25x faster generation for 3D point motion forecasting. A world action model conditioned on VFlash plans achieves 70.2% average success across four MolmoSpaces task suites, compared with 62.6% for the baseline.",
    "published": "2026-11-05T18:44:43Z",
    "updated": "2026-11-05T18:44:43Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08449"
  },
  {
    "id": "2611.08443",
    "title": "Souffleur: A Glanceable Display for Mobile Voice Conversations",
    "authors": [
      "Anton Wolter",
      "William Benjamin",
      "Niklas Elmqvist"
    ],
    "abstract": "The speech capabilities of mobile devices have grown, but their displays still rely on a text-based chat. When resuming a voice chat after a context switch, the last messages may not convey the key points of the conversation. Autobiographical use and sessions with external participants led to design goals for a mobile-first, speech-driven, glanceable display that helps users continue their reasoning from where they left off. We implement these goals in Souffleur and evaluate it in a between-subjects study with 48 participants. Compared with a conventional chat transcript, we found no reliable difference in how easily participants followed and resumed short voice conversations, nor in effort, attention or recall, although Souffleur reduces the conversation to a few short phrases.",
    "published": "2026-11-05T18:36:18Z",
    "updated": "2026-11-05T18:36:18Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.08443"
  },
  {
    "id": "2611.08441",
    "title": "Edge-Assisted Crowdsensing for Explainable Cyclist Safety Perception",
    "authors": [
      "Hongsen Cao",
      "Chia-Yen Chiang",
      "Mona Jaber",
      "Meihui Wang",
      "Yasmin Fathy"
    ],
    "abstract": "Cyclist fatality rates remain high despite policy support for active travel, and autonomous vehicles add complexity to mixed traffic. Neither crash statistics nor multi-model detection pipelines scale to continuous monitoring of perceived safety along a route. We present an edge-assisted crowdsensing system: handlebar cameras supply street-level frames, a vision-language model (VLM) turns each frame into structured traffic attributes through a single prompt, and an explainable boosting machine (EBM) combines them with OpenStreetMap road infrastructure and on-bike kinematics to predict a crowdsourced 1-9 safety score. Extraction belongs at the network edge: the fastest self-hosted model needs 2.49 s per frame and scoring takes 0.4 ms on a CPU. On 1,362 annotated frames from two London routes, the EBM regressor reaches 72.2 percent binary accuracy and a mean absolute error of 1.011 under five-fold cross-validation. It is within one accuracy point of black-box ensembles. Its per-feature shape functions give exact attribution: physical lane separation is worth +0.97 rating points, a painted lane +0.70 and a construction site -0.65. Planners can therefore price an infrastructure change in rating points, and the results enter cost-benefit analysis directly. We also report inter-annotator agreement (alpha = 0.4695), an attribute audit, and a sensitivity analysis linking attribute error to accuracy. With re-encoding, a 20 s sampling interval serves 1,000 riders at 54 Mbit/s at a cost of 1.4 accuracy points, making continuous monitoring practical.",
    "published": "2026-11-05T18:33:58Z",
    "updated": "2026-11-05T18:33:58Z",
    "categories": [
      "cs.CV",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2611.08441"
  },
  {
    "id": "2611.07054",
    "title": "Reclassification Is All You Missed: Surfacing Variant Reinterpretation Need in Online Health Communities at Population Scale",
    "authors": [
      "Kamalakkannan Ravi",
      "Mengshu Nie",
      "Annapurna Poduri",
      "Cong Liu"
    ],
    "abstract": "Genetic variants are routinely reclassified in ClinVar after a patient is tested, sometimes from uncertain to pathogenic, yet patient recontact is inconsistent, with no clear duty and responsibility diffused among labs, providers, and patients. Many affected people discuss their results in public online health communities that clinical recontact often does not reach. We built PRISM, an agentic large-language-model pipeline that screens these posts, checks whether the variant was later reclassified, and drafts a disclaimer-bearing outreach message, in a no-contact dry run. Across 3.9 million posts from 32 communities, agent-predicted reinterpretation-relevant discussion is rare (0.288%) but concentrated in specialist genetics communities (6.30% versus 0.10% in general medical-advice communities) and growing fivefold since 2014; PRISM surfaces 123 candidate classification differences, 5 of them from an uncertain submission to pathogenic or likely pathogenic. On a held-out set of 30 real-post drafts, a clinician judged 27 factually grounded and 15 fit to send: factual accuracy is necessary but not sufficient for clinically acceptable outreach. PRISM contributes a population-scale reinterpretation-need map with code and data to be released upon publication.",
    "published": "2026-11-04T19:13:45Z",
    "updated": "2026-11-04T19:13:45Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CY",
      "q-bio.GN"
    ],
    "url": "https://arxiv.org/abs/2611.07054"
  },
  {
    "id": "2611.07051",
    "title": "Closed-Loop Agent Evaluation: Layered Measurement and Self-Calibration",
    "authors": [
      "Ruifeng Ren",
      "Gun Ahn"
    ],
    "abstract": "Once an agent is live, teams want to know whether it is doing its job, not just whether it throws errors. Yet most evaluation is one-off: a benchmark run, a look at traces, a single score. Its conclusions neither check themselves nor reach the agent. We propose closed-loop evaluation, an evaluation method for deployed agents. It models evaluation as performance estimation under biased raters and censored outcomes, and it requires every level's conclusion to trace back to atomic data and to be computed by versioned rules. The method covers four levels of analysis (span, trace, conversation and engagement), measures along a spine of Execution, Substance, Trajectory and Results, treats Conduct as a constraint throughout, and uses Provenance and Adjudication components to certify the evidence and the evaluators. Evaluator agents generated by an Agent Factory carry these components, each with a domain knowledge pack and an adapter harness. Two loops close the evaluation: an inner loop audits the evidence, rules and metrics themselves, and an outer loop uses per-component regression checks to drive agent improvement. We also give a pipeline that runs this process automatically. Using the business-analysis agent SharpInsight as a case and porting the method to public conversation data, we show how problems differ across levels and how evidence-and-rule judgment is more reliable than holistic scoring (ICC 0.86 vs. 0.81; kappa 0.81 vs. 0.63).",
    "published": "2026-11-04T19:11:47Z",
    "updated": "2026-11-04T19:11:47Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.07051"
  },
  {
    "id": "2611.07049",
    "title": "Gaussians Can Subtract: Neural Dissolve Fields for Hybrid Scene Rendering",
    "authors": [
      "Yiyan Wang",
      "Haohan Liu",
      "Tetsuo Shibuya"
    ],
    "abstract": "Hybrid Mesh-Gaussian rendering combines compact textured surfaces with flexible 3D Gaussian primitives, offering an efficient alternative to purely Gaussian scene representations for structured environments. Existing scene-reconstruction hybrids commonly follow an additive formulation, where Gaussian residuals compensate for errors left by the mesh. However, not every Mesh-Gaussian conflict is caused by missing content: residual geometry errors, occlusion mismatch, texture-projection artifacts, and view-dependent appearance can make the same mesh content consistent in one view but inconsistent in another. We therefore formulate hybrid rendering as a multi-view inconsistency problem and present Gaussolve, a subtract-and-refill framework that selectively dissolves inconsistent mesh content before residual Gaussians refill the revealed regions. We introduce a lightweight Neural Dissolve Field, parameterized by scalar spherical-harmonic Gaussians, to learn where and from which viewing directions mesh content should be dissolved. A continuous transmittance fusion rule progressively exposes residual Gaussians behind the dissolved mesh, preserving their reconstruction gradients and avoiding hard visibility discontinuities. Experiments on structured and semi-structured scenes demonstrate higher visual fidelity with fewer Gaussian primitives and faster rendering. Project page: https://ooosn.github.io/gaussians-can-subtract/",
    "published": "2026-11-04T19:08:50Z",
    "updated": "2026-11-04T19:08:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.07049"
  },
  {
    "id": "2611.07048",
    "title": "Adapting the Process of Adaptation: Darwinian, Lamarckian, and Agent-Directed Evolution in AI",
    "authors": [
      "Andrew W. Lo",
      "Chaoyi Zhao"
    ],
    "abstract": "Evolution has shaped intelligence for billions of years. Artificial intelligence (AI) now raises a striking possibility: intelligence may begin to direct its own evolution. As AI agents become capable of modifying and evaluating their own behavior, how quickly could they improve, and how can that improvement remain safe? We develop a theoretical framework comparing Darwinian, Lamarckian, and agent-directed evolution following environmental change. Darwinian evolution relies on natural selection, Lamarckian evolution adds inherited learning, and agent-directed evolution allows agents to generate and evaluate behavioral variants and choose how extensively to search. When learning is sufficiently effective, these mechanisms exhibit progressively faster adaptation. Generating more variants accelerates adaptation, while optimal search effort depends on learning ability, problem difficulty, and experimentation costs. However, an agent's ability to direct its improvement does not ensure that improvements are evaluated against the intended objective. When the evaluation target is misspecified, additional search accelerates convergence toward the wrong behavior, even as measured performance improves. In recursive self-improvement, such errors may persist across generations, posing challenges for AI safety. Independent evaluation and oversight must keep pace with autonomous AI development. The central challenge is not simply to accelerate the evolution of intelligence, but to preserve humanity's ability to guide its direction, limit its speed, and intervene when necessary.",
    "published": "2026-11-04T19:08:46Z",
    "updated": "2026-11-04T19:08:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07048"
  },
  {
    "id": "2611.07009",
    "title": "TraCE: Trajectory-Aware Concepts for Explainable Video Understanding",
    "authors": [
      "Wooil Lee",
      "Junpyo Hong",
      "Jongseo Lee",
      "Tuomas Oikarinen",
      "Tsui-Wei Weng",
      "Jinwoo Choi"
    ],
    "abstract": "Video understanding models often rely on motion, yet their explanations can obscure which motion sources support a prediction. We identify motion-source under-specification as a limitation of existing video XAI: region-centric explanations can be source-ambiguous, while motion vocabularies restricted to single-person pose sequences are source-incomplete. We propose TraCE (Trajectory-Aware Concepts for Explainable Video Understanding), a concept-based framework that discovers source-flexible motion concepts by clustering optical-flow trajectories from training videos. These concepts represent dynamic evidence from people, objects, and interactions, while object and scene concepts account for static context. The resulting typed trajectory/object/scene interface supports class prediction for action recognition and question-conditioned concept matching for video question answering (VQA). We evaluate TraCE across five random seeds on six benchmarks: NTU RGB+D Mutual, Chiral SSv2, UCF-101, KTH, TOMATO, and STAR. Relative to non-interpretable baselines, TraCE maintains competitive task performance, with an average accuracy drop of 1.0 points for action recognition and a nominal gain of 0.4 points for VQA. Motion perturbation and concept-removal tests provide complementary evidence of directional semantic alignment and decision faithfulness, while sample-level interventions illustrate targeted model debugging. Our project page is available at https://leewooil.github.io/TraCE_project_page/.",
    "published": "2026-11-04T19:00:01Z",
    "updated": "2026-11-04T19:00:01Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.07009"
  },
  {
    "id": "2611.06918",
    "title": "From Pixels to Actions - Towards Native Vision-Language-Action Policies",
    "authors": [
      "Weichen Fan",
      "Haiwen Diao",
      "Penghao Wu",
      "Siyuan Hu",
      "Ziqi Huang",
      "Tianqi Liu",
      "Mingze Sun",
      "Ziyi Wang",
      "Zhongang Cai",
      "Hanming Deng",
      "Quan Wang",
      "Lei Yang",
      "Lewei Lu",
      "Fangzhou Hong",
      "Zhaoxi Chen",
      "Dahua Lin",
      "Ziwei Liu"
    ],
    "abstract": "Vision-language-action models are typically built on a simple premise: perception is first compressed by visual encoders, and action reasoning begins only afterwards. Yet manipulation often hinges on precisely the visual signals most vulnerable to this abstraction, e.g., local geometry, boundaries, depth, and subtle state changes. This raises a fundamental question: should action policies inherit a fixed visual endpoint, or directly access evolving visual computation? We introduce NEO-VLA, a structurally encoder-free vision-language-action framework. Images are tokenized by lightweight patch convolutional layers and evolve jointly with language throughout the backbone, allowing a flow-matching action expert to draw from instruction-conditioned visual representations at different depths. This simple change reveals a consistent pattern. Native architectures outperform encoder-based counterparts under controlled comparisons; full fine-tuning reduces but does not erase the gap, and additional scale alone cannot recover it. More strikingly, layer-wise probing shows that the action-critical signals often peak well before the final visual representation. Across diverse manipulation settings and distribution shifts, NEO-VLA consequently achieves stronger and more robust control. Together, these results suggest that embodied control benefits from access to visual representations across the computational hierarchy, rather than a fixed encoder output.",
    "published": "2026-11-04T18:59:58Z",
    "updated": "2026-11-04T18:59:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.06918"
  },
  {
    "id": "2611.06911",
    "title": "BEAKER: An Expert-Curated Benchmark for Embodied Brains in Self-Driving Chemical Laboratories",
    "authors": [
      "Fei Lin",
      "Tengchao Zhang",
      "Ziyang Gong",
      "Xiaotong Yu",
      "Bohan Zhang",
      "Yifan Zhou",
      "Qihao Yang",
      "Ji Dai",
      "Dong Li",
      "Yining Jiang",
      "Qinghua Ni",
      "Jun Huang",
      "Qiang Zhang",
      "Yue Zhou",
      "Zhihang Zhong",
      "Yonglin Tian",
      "Fei-Yue Wang",
      "Xue Yang"
    ],
    "abstract": "Self-Driving Chemical Laboratories (SDCLs) are moving chemical experimentation toward embodied automation, where machines must perceive laboratory scenes, reason about experimental states, and act under physical, procedural, and safety constraints. Although Multimodal Large Language Models (MLLMs) are increasingly considered as embodied brains for such systems, existing laboratory benchmarks mainly focus on safety, anomaly detection, or general scientific understanding, leaving their execution-oriented embodied capabilities underexplored. To fill this gap, we introduce BEAKER, a Benchmark for evaluating Embodied Actionability, Knowledge, Experimentation, and Reasoning in SDCLs. BEAKER contains 1,000 expert-curated question-answer samples across 11 image and video task types, covering key judgments required for chemical laboratory execution, including affordance grounding, trajectory planning, equipment, state, and safety recognition, apparatus setup, operation and step reasoning, and temporal procedure reasoning. All questions and annotations are manually created and reviewed by chemistry and embodied Artificial Intelligence (AI) experts, without AI-assisted generation or annotation. We evaluate 28 general-purpose, science-oriented, chemistry-specialized, and embodied MLLMs in an offline, single-turn setting. Results show that current models can follow coarse experimental procedures in videos, but still struggle to ground actions into operable regions and feasible trajectories, to recognize fine-grained laboratory apparatus, states, and safety norms, and to order steps in mid-length procedures. BEAKER thus reveals a clear gap between coarse procedural understanding and the precise, action-grounded perception required for laboratory execution, providing a diagnostic benchmark for future MLLMs in SDCLs.",
    "published": "2026-11-04T18:57:17Z",
    "updated": "2026-11-04T18:57:17Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06911"
  },
  {
    "id": "2611.06910",
    "title": "FrontierPhysics: Evaluating Agents for End-to-End Physics Research",
    "authors": [
      "Bingran You",
      "Wenjun Ke",
      "Ria Rosenauer",
      "Bo Liu",
      "Wenbo Chen",
      "Min Chen",
      "Shuqi Xu",
      "Yue Ma",
      "Jiechao Feng",
      "Bo Chen",
      "Xiangkai Sun",
      "Jiarui Liu",
      "Jinen Guo",
      "Zeyu Zhou",
      "Xu Huang",
      "Zhuohan Li",
      "Haoyu Li",
      "Heguang Lin",
      "Lijie Ding",
      "Yadong Zeng",
      "Kangqi Zhang",
      "Xinge Liu",
      "Hanwen Liu",
      "Zhenghong Li",
      "Alexander von Recum",
      "Yuchen Zhu",
      "Felix Schwarzfischer",
      "Yizhou Zhao",
      "Jicheng Wang",
      "Binxu Li",
      "Qian Yu",
      "Chan Li",
      "Cheng Dai",
      "Di Wang",
      "Haoyu Zhang",
      "Jiankai Sun",
      "Kaituo Feng",
      "Mian Qin",
      "Ruihong Yin",
      "Yiqun Luo",
      "Weiwei Wu",
      "Shihong Pan",
      "Tsung Yeh Hsieh",
      "Xiao Huang",
      "Yan Zhang",
      "Sihan Li",
      "Zirui Ren",
      "Zengji Tu",
      "Kyoung Whan Choe",
      "Ke Sun",
      "Vincenzo Galia",
      "Vaisakhi Mishra",
      "Jiashu He",
      "Hongyang Wang",
      "Zhiheng Yang",
      "Shubham Gaur",
      "Yifan Gu",
      "Shuyi Wang",
      "Zihao Zuo",
      "Steven Dillmann",
      "Yiyou Sun",
      "Xinyang Han",
      "Hanchung Lee",
      "Molei Tao",
      "Yue Zhao",
      "Shilong Liu",
      "Yuchen Wu",
      "Xuandong Zhao",
      "Xiangyi Li",
      "Florian Brand",
      "Gerbrand Ceder",
      "Hartmut Haeffner"
    ],
    "abstract": "AI agents are playing an increasingly important role in physics research. However, existing physics benchmarks only evaluate fixed questions, isolated sub-tasks, or paper reproduction with given solutions, and rarely check research quality alongside correctness. We introduce FrontierPhysics, an end-to-end benchmark with 56 tasks made by 42 physicists based on their own research, covering nine domains across theoretical, computational, and experimental physics. Each task requires agents to review the literature, develop a research plan, conduct research and experiments, and produce structured outputs and scientific manuscripts. Combining deterministic verifiers with expert-authored rubrics, FrontierPhysics evaluates whether agents' research is correct and publishable. Across 22 models in 26 configurations, no configuration passes more than 46 of its 168 rollouts. Manual review of agent trajectories shows that frontier agents' main weaknesses are insufficiently rigorous reasoning and limited expert intuition, rather than gaps in physics knowledge or execution errors.",
    "published": "2026-11-04T18:56:22Z",
    "updated": "2026-11-04T18:56:22Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06910"
  },
  {
    "id": "2611.06908",
    "title": "Perceptive Humanoid Motion from Simulation",
    "authors": [
      "Siyuan Hu",
      "Abulikemu Abuduweili",
      "Yue Meng",
      "Shipeng Liu",
      "Quentin Leboutet",
      "Chen Chen",
      "Matthias Müller",
      "Vladlen Koltun"
    ],
    "abstract": "Humanoid robots have the potential to automate a wide range of physical tasks. Progress toward generalist humanoid autonomy, however, remains constrained by a data bottleneck: mapping pixels and free-form language to low-level joint commands requires paired supervision, and no corpus of such data exists at sufficiently large scale. Some approaches rely on human teleoperation and wearable capture devices, which require at least an hour of human time to produce an hour of data. We present HALO, a humanoid autonomy system powered by a pipeline that synthesizes vision-language-motion data across a thousand procedurally generated homes. The corpus scales with compute rather than human labor. HALO acquires a repertoire of physical skills, including sitting on chairs, navigating to named objects, stepping sideways through half-open doors, crouching and crawling beneath tables, and pushing boxes. It orchestrates these skills to solve composite, long-horizon tasks. Without ever seeing a real home during training, HALO transfers zero-shot to the physical world, achieving a 91% success rate across 360 trials in six unmapped real-world environments. See https://apple-aiml-research.github.io/ml-halo/ for code and videos.",
    "published": "2026-11-04T18:55:33Z",
    "updated": "2026-11-04T18:55:33Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.06908"
  },
  {
    "id": "2611.06901",
    "title": "Motion-guided Contrastive Regularization For Latent World Models",
    "authors": [
      "Yiwen Chen",
      "Qiqi Hou",
      "Jisoo Jeong",
      "Yinhao Zhu",
      "Huaizu Jiang",
      "Amir Said"
    ],
    "abstract": "JEPA-style world models learn action-conditioned latent dynamics without reconstructing observations, but distributional regularization alone does not ensure that their representations preserve information needed for control. We identify static collapse, a failure mode in which the encoder preserves episode-specific static content while suppressing manipulation-relevant state changes. Because static content is temporally predictable yet diverse across episodes, this failure can persist despite regularizers such as SIGReg. A controlled study on OGBench-Cube shows that introducing randomized backgrounds substantially degrades planning performance while leaving the underlying manipulation task unchanged. To address this problem, we propose motion-guided contrastive regularization. Our approach compares predicted latent transitions with transitions to candidate observations from the same episode, reducing the usefulness of static background identity for distinguishing action outcomes. Optical-flow similarities provide soft contrastive targets, allowing candidates with similar motion to receive similar supervision. Combined with latent prediction and SIGReg, our objective encourages representations to preserve within-episode state distinctions and similarities between related transitions. Our method improves planning success over LeWorldModel (LeWM) from 52% to 78% on OGBench-Cube with randomized backgrounds and from 14% to 54% on LIBERO-Object, while maintaining comparable performance on four other visual-control benchmarks.",
    "published": "2026-11-04T18:49:35Z",
    "updated": "2026-11-04T18:49:35Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.06901"
  },
  {
    "id": "2611.06899",
    "title": "Occlusion for Free: Detecting Occlusion from the Disagreement Between Two Monocular Distance Cues",
    "authors": [
      "Chibueze Praise Onyenweaku",
      "Toyibat Adele",
      "Sikirulahi Opeyemi Abdulkareem",
      "Obed Honour Eje"
    ],
    "abstract": "Knowing that a pedestrian is occluded is useful to a robot even when the detector cannot recover the hidden pixels, but occlusion estimators are normally trained on occlusion annotations that deployment settings rarely have. We show that occlusion can be read off two distance estimates a camera-only pipeline already computes. Apparent height is largely unchanged by occlusion, because the detected box still spans the whole person; monocular metric depth is pulled toward the occluder, because the nearest surface inside the box is what a depth map reports. Only their ordering matters, so no focal length, stature, or depth scale is needed, provided the depth model's error is close to a pure gain, a condition that can be checked without labels. The score detects heavy occlusion on KITTI with AUC 0.909 (0.888 over all annotated pedestrians, including those the detector misses), requires no training and no occlusion labels, and is not a proxy for range: within fixed distance bands it holds AUC 0.894-0.925 while true distance alone sits near chance. On synthetic CARLA scenes with measured visibility it reaches 0.819, against 0.644 for distance alone. We arrived here after measuring three standard architectural responses to occlusion, depth fusion, occlusion-simulating augmentation, and attention, none of which improved detection outside its training distribution in the configurations we tested, and after finding that a detector trained on German roads loses half its accuracy on self-annotated street scenes in Lagos, Nigeria. Signals that need no local annotation are worth more in settings that benchmarks do not represent.",
    "published": "2026-11-04T18:49:13Z",
    "updated": "2026-11-04T18:49:13Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06899"
  },
  {
    "id": "2611.06996",
    "title": "Trust Responsive Runtime Authorization for Agentic AI with Empirical Characterization of Policy Behavior and Parameter Sensitivity",
    "authors": [
      "Ahsan Habib Shihab",
      "Imre Felde",
      "Ramis Akhmedov",
      "Stefan Gubo",
      "Berik Sabdenaliyev",
      "Madina Mansurova",
      "Amir Mosavi"
    ],
    "abstract": "The policy that converts runtime estimates of an autonomous agent's condition into operational authority is rarely specified or measured. We empirically characterize the Trust Responsive Authorization Policy (TRAP), which maps an Authorization Readiness Score (ARS), a weighted combination of runtime trust, operational stability, and contextual risk, onto discrete authorization levels through an asymmetric rule: escalation requires consecutive observations above a band edge plus a margin, while a sharp drop in readiness restricts authority at once. On one matched set of 100 Monte Carlo traces, we compare TRAP with static, trust-only, risk-only, and symmetric policies. Under abrupt degradation, TRAP restricts at onset and re-escalates sooner after recovery than the symmetric policy, with the highest and, descriptively, least variable stability among the adaptive policies, although more of its post-recovery escalations occur below the selected trust threshold. Paired bootstrap intervals exclude zero for the remaining differences. In one-factor sweeps, recovery time rises with the escalation margin and run length, shifts with the score weights, and is unchanged by the restriction threshold. In an exploratory post-freeze experiment, when the same degradation is spread over 5-20 intervals, TRAP restricts only on the 4 traces that retain a single-interval drop above that threshold; averaged over all 100 traces, it holds authority above what readiness supports for 15.9-18.9 of the 20 degradation intervals, against 0.8 under abrupt degradation and about 10 for the symmetric policy. Its restriction advantage therefore depends on degradation being abrupt. All reported values are traceable to the publicly available, versioned research release.",
    "published": "2026-11-04T18:49:11Z",
    "updated": "2026-11-04T18:49:11Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06996"
  },
  {
    "id": "2611.05612",
    "title": "Whiel: A Neurosymbolic Platform for Certified Relational Program Verification",
    "authors": [
      "Jesse Comer",
      "Fangzhu Shen",
      "Shuo Zhang",
      "Mayur Naik",
      "Sudeepa Roy",
      "Val Tannen"
    ],
    "abstract": "We present the Whiel (a contraction of Whi(le-R)el) system for Lean-certified reasoning about imperative relational programs. The system can encode containment and equivalence problems for Datalog, its extensions with negation, and the core fragment of graph query languages. It can also represent optimized or incremental evaluation algorithms that are not expressible in the original query language, as well as first-order specifications of integrity constraints, schema mappings, and views arising in data integration, exchange, and sharing. Whiel's program states are database instances, and its imperative structure enables compositional Hoare-style reasoning with first-order relational specifications, using prophecy variables and leveled invariants to support inductive arguments. Whiel supports neurosymbolic discovery of loop invariants whose verification conditions can be checked using the Vampire first-order theorem prover. Counterexamples are fed back into the neurosymbolic pipeline, while proposed solutions are translated into Lean proof certificates. To validate the Whiel system, we evaluate its performance on a curated benchmark suite. In summary, we envision the Whiel system as a tool for tackling mathematically demanding, typically undecidable problems involving complex query and constraint languages, with a high degree of trust in its output.",
    "published": "2026-11-03T20:56:53Z",
    "updated": "2026-11-05T17:45:04Z",
    "categories": [
      "cs.DB",
      "cs.AI",
      "cs.LO"
    ],
    "url": "https://arxiv.org/abs/2611.05612"
  },
  {
    "id": "2611.05611",
    "title": "Hybrid Spark: Adaptive Speculative Decoding That Lets the Content Choose the Drafter",
    "authors": [
      "Ekagra Ranjan",
      "Bharat Venkitesh"
    ],
    "abstract": "Speculative decoding (SD) speeds up large language model (LLM) serving, but its gain depends on the workload's \\emph{shape}, such as batch size and context length, and on its \\emph{content}. A model-based drafter proposes a short block on any content, while a model-free drafter such as n-gram lookup proposes long copies at almost no cost when the output repeats its input, as in code editing. Adaptive verification spends a batch-wide verification budget on the draft tokens most likely to be accepted, but it supports only one model-based drafter. Model-free drafters provide no per-token confidence, so they cannot take part in budget allocation, and deployments must either fix one drafter or split their GPUs between drafters. We present \\sys, a framework that runs a model-based and a model-free drafter on every step and gives each request the better of their chains, within adaptive verification and entirely on the GPU, which keeps asynchronous scheduling intact. The key idea is a price per verified draft token: the goodput that slot would earn elsewhere in the batch. Once the model-free drafter's tokens carry calibrated acceptance estimates, fit once on general text, this price puts both drafters' chains on one scale. Instantiated with \\dspark and an n-gram drafter in vLLM, \\sys achieves 1.10--1.62\\x the output throughput of \\dspark on code editing at batch size~4 and 1.04--1.27\\x at batch size~128, while staying at 0.97--1.01\\x of it on chat at temperature~0. A single deployment can therefore serve both workloads.",
    "published": "2026-11-03T20:55:26Z",
    "updated": "2026-11-03T20:55:26Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05611"
  },
  {
    "id": "2611.05599",
    "title": "CAPTOR: text-encoder-free grounding by counting caption co-occurrence over the visual words of a frozen encoder",
    "authors": [
      "Elad Yoshai",
      "Natan T. Shaked"
    ],
    "abstract": "Grounding a text query in an image needs a matrix scoring every term against every patch. Vision-language models compute it with an aligned text encoder, which many image encoders, such as histopathology-related models trained on slides alone, lack. The Caption-Anchored Patch-Term Occurrence Representation (CAPTOR) estimates the matrix without a text encoder. It clusters a frozen image encoder's patch tokens into visual words and describes each captioned image by its share of patches in each word. A term signature is the standardized difference of those shares between images whose captions mention the term and the rest. The matrix factorizes into a term-by-word table and a query-independent image factor, so an image is encoded once and a new term adds one table row. Against every training-free baseline, CAPTOR leads on Common Objects in Context (COCO), Pascal Visual Object Classes (VOC) and Cityscapes. On COCO, scored on the cells one object owns, it reaches 0.565 mean intersection over union (mIoU) against 0.502. On all three, it is also level with a text alignment trained on the same backbone, which needs gradients, a text encoder and several times the captions. On held-out breast-cancer slides, it exceeds the strongest baseline scoring patches with a pathology text encoder by 0.160 mIoU. Read through CAPTOR, UNI, an encoder trained on slides alone, exceeds such baselines by 0.132 on a common grid. Counting can therefore give a text interface to any image encoder trained without language, wherever captioned images exist.",
    "published": "2026-11-03T20:38:10Z",
    "updated": "2026-11-03T20:38:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.05599"
  },
  {
    "id": "2611.05594",
    "title": "Relevance Propagation as Entropic Optimal Transport on Filippov Neural Networks: Sinkhorn Propagation and Region Relevance in Image Classifiers",
    "authors": [
      "Olivier Gibaru",
      "Eric Nyiri"
    ],
    "abstract": "Relevance propagation, which redistributes a network's prediction backward through the layers, is usually treated as a heuristic. We show that it is the solution of a single variational problem: Layer-wise Relevance Propagation (LRP) is the divergence-free flow on the active computational graph of zero relative entropy to the backward transition law of the forward activation flow; for a non-negative reference, this is a relative entropy between Markov measures on backward paths. The rules LRP$_0$, LRP$_{z^+}$ and LRP$_{α,β}$ follow from this principle by the choice of a reference, and are instances of one rule, LRPN$_{α,β}$, whose weights may vary from node to node, for instance with the node's activity, in the spirit of Hebb's principle. The principle rests on a measure-theoretic formalization of feed-forward networks as directed acyclic graphs of Filippov operators, which covers piecewise-smooth and discontinuous architectures (e.g. hard-routed Mixture-of-Experts) with a Clarke-Filippov generalized-gradient calculus; it also characterizes backpropagation as the adjoint equation of a Lagrangian relaxation. On networks of ReLU and max-pooling nodes, LRP$_0$ is Gradient$\\times$Input, with an explicit jump across a kink where LRP$_{z^+}$ stays continuous. Taking the entropy edge by edge yields a new rule, Sinkhorn Relevance Propagation. Aggregated over an input region, the flow of a non-negative reference tells, with exact accounting, which hidden units carry its evidence, the conditioned flow being a Schrödinger bridge. On VGG-16, the conservation identities hold to round-off, and the rules are told apart by the sign of their maps, the share of the output left to the bias nodes, faithfulness, localization and class dependence; on ConvNeXt-Tiny, LRPN$_{α,β}$ conserves the output and its Hebbian weights give the highest ABPC of the rules tested.",
    "published": "2026-11-03T20:31:14Z",
    "updated": "2026-11-03T20:31:14Z",
    "categories": [
      "cs.LG",
      "cs.CV",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2611.05594"
  },
  {
    "id": "2611.05593",
    "title": "GaussianRenderFormer: Transformer-based Rendering of 3D Gaussian Splats",
    "authors": [
      "Shahaf Valencia Levy",
      "Sagie Benaim"
    ],
    "abstract": "Can a neural network learn to render 3D Gaussian splats on its own, with no rasterizer in the renderer? We present GaussianRenderFormer, a transformer that takes a set of Gaussians and a camera and outputs the image directly. Each Gaussian becomes one token in a view-independent encoder, and a view-dependent decoder turns small patches of camera rays into pixels by attending to those tokens. Trained on 26,820 Objaverse objects pruned to 20,000 Gaussians each, GaussianRenderFormer renders 300 unseen objects at 38.08 dB PSNR against the full, unpruned splats, while rasterizing the same pruned input reaches 44.02 dB. The gap is not one of generalization, and our diagnostics are consistent with a bottleneck in the view decoder: telling it the projected footprint of each Gaussian, which it could in principle infer, adds 1.4 dB. Under-training is not ruled out. Code, trained models and videos: https://svlwoof.github.io/gaussianrenderformer",
    "published": "2026-11-03T20:26:14Z",
    "updated": "2026-11-03T20:26:14Z",
    "categories": [
      "cs.CV",
      "cs.GR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.05593"
  },
  {
    "id": "2611.05590",
    "title": "Verified but Vacuous: Three Failure Surfaces of LLM-Driven Verified Code Generation",
    "authors": [
      "Aditya Vempaty",
      "Himaneesh Sompalle",
      "Manan Tayal",
      "Mowafak Allaham",
      "Prasenjit Dey",
      "Ashish Jagmohan",
      "Ravi Kokku"
    ],
    "abstract": "What should ``verified'' mean when evaluating LLM-generated code? Many existing pipelines report a single verification number. We argue this collapses three distinct properties measured in a conditional audit sequence: verifier acceptance (Surface A), \\emph{syntactic specification binding (Surface B: does the proof obligation bind to the spec?), and \\emph{semantic specification fidelity} (Surface C: does the spec capture the informal requirement?). Two empirical demonstrations show the surfaces separate. \\textbf{First ($A \\neq B$), via Li@Opus (a same-model reproduction of \\citet{li2025dafny}'s Dafny-as-intermediate-representation (IR) pipeline under Claude Opus 4.7) on three Python benchmarks}: it reaches \\textbf{99.1\\% verifier acceptance} on HumanEval while only \\textbf{1.9\\%} carry a certificate binding to a spec-defined predicate or function. \\textbf{Second ($B \\neq C$), via VCG on two Rust benchmarks}: we use VCG (which is our own in-house Dafny-as-intermediate pipeline) on Rust because the Rust target lets us enforce fully-verifiable output (every component ships as a Dafny certificate, ensures-binding gate passing by construction). Even inside that construction, \\textbf{11.48\\% (MBPP-Rust) and 14.82\\% (VeriContest LC slice) of structurally-verified samples still fail hidden tests}. On the LC slice of VeriContest, \\textbf{VCG's reported End2End rate is 7.79\\% (535/6870).} The cited external rates are 5.51\\% (GPT-5.5) and 1.88\\% (single-shot Opus 4.7). These give descriptive differences of 2.3 percentage points and 4.14$\\times$, respectively; task-budget, repair and harness differences prevent a matched-performance claim.",
    "published": "2026-11-03T20:20:57Z",
    "updated": "2026-11-03T20:20:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05590"
  },
  {
    "id": "2611.05586",
    "title": "Anduin: A sybil-resistant agentic marketplace reputation system",
    "authors": [
      "Reza Ramji",
      "Preston Vander Vos",
      "Ziming Zeng",
      "Duc V. Le"
    ],
    "abstract": "As autonomous AI agents enter permissionless onchain markets, selecting new service providers remains a core challenge. Existing reputation systems depend on scarce resources like human curation, identity credentials, or voluntary reviews, while naive volume rankings are vulnerable to Sybil attacks. We evaluate whether existing onchain payment histories can yield provider ratings that are resilient against Sybil attacks. Using a 157-day dataset comprising 66M agentic transactions worth $6.1M across 16 blockchains, we model payment flows as a bipartite graph between buyers and providers. A provider's rating is derived from graph paths linked to a buyer's existing trusted network. We propose three Sybil-resistant rating algorithms: a max-flow rating and two relaxed algorithms optimized for stronger rating performance. Evaluating these algorithms against simulated adversaries across 813 buyers, we show that rating manipulation costs 20% of those buyers' total spend and is around 23x harder to manipulate than the standard similarity rule (collaborative filtering).",
    "published": "2026-11-03T20:17:03Z",
    "updated": "2026-11-03T20:17:03Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05586"
  },
  {
    "id": "2611.05581",
    "title": "BrainBind: Bridging Synchronized EEG and fMRI through Long-Form Naturalistic Video Representations",
    "authors": [
      "Shixiao Wang",
      "Rining Wu",
      "Jian K. Liu"
    ],
    "abstract": "Real-world vision is dynamic and scene-rich, while EEG and fMRI resolve it at complementary temporal and spatial scales. Most neural decoding systems, however, align one modality in isolation and mostly against static images or short clips. We study the synchronized case: EEG and fMRI are recorded during the same long-form naturalistic viewing, giving a shared stimulus but also recurring narrative context and many semantically similar candidates. We present BrainBind, a framework that maps synchronized EEG and fMRI into frozen long-form video embedding spaces and treats those spaces as common visual-semantic references, not literal neural codes. On CineBrain, a five-seed Recall@K 2 x 4 matrix across two video anchors and four system configurations shows distinct retrieval profiles. With Omni, fMRI organizes the full candidate list most strongly (MRR = 23.82, nDCG@10 = 25.31), while Joint-Dual gives the highest mean label-aware R@1 (13.52%) with a distinct rank-wide profile. The complementary episode-disjoint evaluation quantifies the contribution of repeated stimulus identity and narrative context to the random split. Across these experiments, proxy choice and system configuration produce distinct top-rank and rank-wide retrieval profiles within the present synchronized dataset. The code is available at https://github.com/Forainest789/Brainbind.",
    "published": "2026-11-03T20:11:50Z",
    "updated": "2026-11-03T20:11:50Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.05581"
  },
  {
    "id": "2611.05579",
    "title": "Multimodal Fusion Methods for Whole-Slide Images and Clinical Data in Inflammatory Bowel Disease",
    "authors": [
      "Ankana Banerjee",
      "Mark van der Giezen",
      "Ole Gunnar Aasprong",
      "Emiel A. M. Janssen",
      "Øyvind Steinsbø",
      "Tore Grimstad",
      "Kjersti Engan"
    ],
    "abstract": "Multimodal AI fusion of histology and clinical data is an active research area in computational pathology, but fusion methods are rarely compared under identical conditions and across different clinical endpoints. We present a modular framework in which slide-level embeddings, obtained by training an attention-based aggregator over patch embeddings from a frozen foundation model, and per-visit clinical embeddings are fed into 15 interchangeable fusion methods with a shared output dimension and prediction head (except decision-level methods). Using a prospective cohort of newly diagnosed inflammatory bowel disease patients, we predicted STRIDE-II-aligned remission outcomes from baseline or follow-up visits. The best fusion method reached macro-F1 of 0.57-0.75, outperforming both single-modality models in four of six scenarios, and differed by outcome and input. Image reliance, the drop in balanced accuracy when the slide embedding is removed, tended to follow the remission type - highest for histological and lowest for endoscopic remission; methods with similar accuracy relied on the slide to very different degrees.",
    "published": "2026-11-03T20:11:07Z",
    "updated": "2026-11-03T20:11:07Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.05579"
  },
  {
    "id": "2611.05578",
    "title": "Whose Values Are Generated? Measuring Visual Value Leakage in Multilingual Text-to-Image Generation",
    "authors": [
      "Zucan Lyu",
      "Binwei Yao",
      "Rheeya Uppaal",
      "Jing Yao",
      "Xiaoyuan Yi",
      "Junjie Hu"
    ],
    "abstract": "Text-to-image (T2I) systems serve users across languages and cultural contexts. However, evaluations of cultural representation focus mainly on recognizable elements such as landmarks, clothing, and activities, overlooking the cultural values that generated images convey. To bridge this gap, we introduce VisionValueBench, a multilingual benchmark that operationalizes six of Hofstede's cultural value dimensions (e.g., individualism versus collectivism) to investigate how T2I systems frame neutral social situations through a particular cultural orientation. We find that value-neutral prompts, which admit diverse cultural interpretations, nonetheless yield images that favor particular value orientations, a phenomenon we call visual value leakage. We evaluate prompts varying in language and geographic cues across 960 social scenarios and six T2I configurations. Generated images consistently favor the same value orientations across all six dimensions, for example, equality over hierarchy (low power distance), individual autonomy over group obligation (individualism), and enjoyment over restraint (indulgence). Prompt language has limited influence on these orientations, whereas geographic cues shift some dimensions toward the associated cultural values while largely preserving the prevailing orientations. These findings reveal substantial homogeneity in the cultural values conveyed by T2I systems worldwide.",
    "published": "2026-11-03T20:09:31Z",
    "updated": "2026-11-05T15:53:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.05578"
  },
  {
    "id": "2611.05577",
    "title": "Readable Is Not Steerable: Pre-Registered Tests of Physical Structure in Learned Fluid Representations",
    "authors": [
      "Manvendra Modgil"
    ],
    "abstract": "Self-supervised world models are often said to organize their latents around physical quantities. We test this on 2D decaying Navier-Stokes flow in three pre-registered studies, each tested once on held-out data. In Study 1, a joint-embedding predictive architecture (JEPA) trained to predict the flow fails the pre-registered criteria for organizing its latent around fluid quantities better than an untrained network of the same architecture (not supported); a JEPA trained on non-physical linear dynamics and a static invariance model that never sees time do as well or better. In Study 2, plain autoencoders that render the field make enstrophy prominent in their slowest unsupervised latent directions (best r 0.80-0.86 vs 0.38 untrained; fresh seeds, sealed data). Adding VICReg lowers this prominence in every comparison, though not by the pre-registered margin for vorticity, while raising the autoencoders' linear decodability (partially supported). In Study 3, we build steerable directions (\"dials\") by routing: the decoder gets overall scale only through a small conditioning code, while its other pathway carries a degraded copy of spectral shape. Label-free rules find a loudness dial in all 8 trained models and a shape dial in 3 of 5 fresh seeds on sealed data, against a pre-registered bar of 4; neither control shows a shape dial (partially supported). Across the studies, what a latent contains and what can be controlled through it come apart. In exploration, a supervised direction reading spectral shape almost perfectly moved nothing when steered. During the build, the loudness dial had to be found by its effect on the output (closest to a pure rescaling), not by data variance; for shape, a variance rule and an effect-constrained rule each worked in 3 of 5 seeds. The program used about 70 logged hours on one consumer GPU; all pre-registrations, deviations, code and outputs are public.",
    "published": "2026-11-03T20:08:52Z",
    "updated": "2026-11-03T20:08:52Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "physics.flu-dyn"
    ],
    "url": "https://arxiv.org/abs/2611.05577"
  },
  {
    "id": "2611.05572",
    "title": "Just the Facts: How Dialogues with AI Reduce Conspiracy Beliefs",
    "authors": [
      "Thomas H. Costello",
      "Gordon Pennycook",
      "David G. Rand"
    ],
    "abstract": "Personalized dialogues with AI substantially reduce conspiracy beliefs. To identify why, we conducted two experiments with U.S. adults recruited online (total N = 2,193) that removed possible causes one at a time. The debunking effect was robust to disclosing the AI's persuasive goal, framing the exchange as a debate, instructing the AI to inform rather than persuade, halving its response length, altering how beliefs were measured, and replacing the dialogue with a single tailored message. Only instructing the AI to persuade without factual evidence and arguments substantially reduced the debunking effect. Content analyses of the AI's output and participants' own accounts linked larger reductions in conspiracy beliefs to factual argumentation rather than rapport, storytelling, or appeals to empathy. AI dialogues appear to reduce conspiracy beliefs primarily by supplying relevant, well-reasoned counterevidence. Our results suggest that humans might be similarly effective if they could supply comparable evidence.",
    "published": "2026-11-03T20:03:55Z",
    "updated": "2026-11-03T20:03:55Z",
    "categories": [
      "cs.HC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05572"
  },
  {
    "id": "2611.04256",
    "title": "OmniST: Topology-Invariant Spatiotemporal Forecasting with Guaranteed-Coverage Uncertainty at Unseen Sensor Locations",
    "authors": [
      "Praveg Vashishtha"
    ],
    "abstract": "Standard spatiotemporal graph convolutional networks need a fixed-size adjacency matrix, coupling model weights to a specific sensor count N; they cannot produce any output at a sensor absent from training. We present OmniST, a topology-invariant forecaster whose computation has zero structural dependency on the number of nodes, and which, composed with inductive split-conformal calibration, gives distribution-free, coverage-guaranteed prediction intervals at arbitrary (including never-seen) sensor locations, preserving that guarantee as sensors are added or removed. Topology invariance follows from coordinate-based tokenization, k-nearest-neighbor attention from geographic coordinates at each forward pass, and per-node temporal processing via a bidirectional GRU. On real Delhi air-quality data (37 stations, 2019-2023), OmniST attains a 30-day PM2.5 MAE of 31.0 ug/m3 and degrades at most 1.1 percent when 40 percent of stations are removed. Its inductive forecasts at unseen stations beat nearest-neighbor interpolation (about 12 percent) and a learned kriging GNN (IGNNK, about 21 percent), and, unlike either, carry a finite-sample coverage guarantee. The guarantee holds at 90 percent or above under 30-50 percent node dropout across four real datasets over three domains (Delhi and Beijing air quality, NOAA GHCN weather, Caltrans PeMSD7-M traffic), and still holds at 325 real sensors (full PeMS-BAY). We also fix a temporal-drift failure: static conformal under-covers over time (about 0.50 late), but a rolling adaptive-conformal estimator restores target coverage (0.89 overall, 0.96 late) at the cost of wider intervals.",
    "published": "2026-11-03T03:48:29Z",
    "updated": "2026-11-03T03:48:29Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2611.04256"
  },
  {
    "id": "2611.04254",
    "title": "P-SER: Physical Consistency-Constrained Scattering Expandable Representation for Class-Incremental HRRP Target Recognition",
    "authors": [
      "Fangyi Wang",
      "Peng Zhao",
      "Haipeng Wang"
    ],
    "abstract": "High-resolution range profiles (HRRPs) provide compact radar target representations but exhibit strong aspect sensitivity, complicating class-incremental recognition when historical data are unavailable. Changes in viewing aspect shift scattering-peak locations and amplitudes, while reflector groups may produce responses resembling ships. Existing dynamic expansion methods can also incur substantial parameter and memory overhead. To address these challenges, we propose P-SER, a Physical Consistency-Constrained Scattering Expandable Representation framework for exemplar-free class-incremental HRRP recognition. P-SER reconstructs dominant scattering points from complex-valued sum- and azimuth-difference-channel HRRPs and observation geometry. The reconstructed spatial structure, target extent, and energy distribution are used to derive class-level scattering prototypes and sample-level saliency priors, providing physically grounded constraints for feature learning and old-class knowledge retention. A primitive scatterer dictionary further characterizes local strong-scattering mechanisms and calibrates uncertain ship--reflector predictions at inference. Meanwhile, lightweight residual adapters are incrementally introduced into a shared HRRP backbone to learn new classes with limited model growth. Experiments on simulated and measured HRRP datasets show that P-SER delivers competitive recognition performance without retaining old-class exemplars, while maintaining physical consistency, interference robustness, knowledge retention, and model scalability.",
    "published": "2026-11-03T03:45:20Z",
    "updated": "2026-11-03T03:45:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04254"
  },
  {
    "id": "2611.04248",
    "title": "Navigating Runtime Dynamism in Semantic Query Serving",
    "authors": [
      "Hengrui Zhang",
      "Xupeng Miao"
    ],
    "abstract": "LLM-powered semantic queries increasingly combine relational processing with multiple LLM-based operators over unstructured data. Efficiently serving such queries is challenging due to runtime dynamism at two coupled levels. Across queries, dynamic arrivals and heterogeneous resource demands continuously change scheduling priorities. Within a query, heterogeneous characteristics across fine-grained input batches cause operator costs and selectivities to vary throughout execution, making a statically optimized plan unreliable. These two forms of dynamism create a circular dependency: inter-query scheduling requires estimates of remaining LLM work, while the remaining work depends on runtime plan choices whose costs become observable only during execution. We present SeqoFlow, a runtime framework that jointly adapts query plans and schedules concurrent semantic queries. SeqoFlow enumerates equivalence-preserving plan alternatives under operator dependencies and decomposes queries into fine-grained units, enabling safe plan adaptation and query preemption at batch boundaries. To support both decisions without exhaustively profiling candidate plans on the target LLM, SeqoFlow uses lightweight speculative estimation to capture runtime costs. These estimates jointly guide plan adaptation and inter-query scheduling, closing the loop between query optimization and LLM inference. Experiments across diverse query structures, data distributions, and arrival rates show that SeqoFlow substantially reduces end-to-end latency compared to existing semantic query systems, adaptive query processing techniques, and conventional scheduling policies.",
    "published": "2026-11-03T03:31:03Z",
    "updated": "2026-11-03T03:31:03Z",
    "categories": [
      "cs.DB",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04248"
  },
  {
    "id": "2611.04244",
    "title": "CounterSketch: Physics-Grounded Counterfactual Reasoning for Sketch-to-Video Generation",
    "authors": [
      "Hien Trinh",
      "Tan-Hiep To",
      "Dinh-Khoi Vo",
      "Tam V. Nguyen",
      "Minh-Triet Tran",
      "Trung-Nghia Le"
    ],
    "abstract": "Counterfactual sketch animation explores how a static sketch evolves under a hypothetical intervention. We present CounterSketch, a physics-grounded framework that transforms natural-language ``What if...?'' queries into physically plausible sketch animations. The framework integrates VLM-guided scene grounding, causal event-chain reasoning, constraint-based trajectory generation, and verification. It models physical transitions to update the scene graph, computes continuous object trajectories, and validates them against physical, geometric, and semantic constraints. The verified trajectories are then projected into object-level motion bounding boxes to guide downstream sketch-video synthesis. Experiments on CounterSketchBench (80 questions) demonstrate that physics-grounded trajectories provide stronger motion guidance than direct VLM predictions.",
    "published": "2026-11-03T03:27:35Z",
    "updated": "2026-11-03T03:27:35Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04244"
  },
  {
    "id": "2611.04242",
    "title": "Improving Diffusion-Based Augmentation for Data-Scarce Image Classification via Mask-Guided Reference Attention and Repulsive Noise Optimization",
    "authors": [
      "Hyun-Jic Oh",
      "GaYeon Koh",
      "Won-Ki Jeong"
    ],
    "abstract": "Diffusion-based data augmentation has emerged as a powerful strategy for addressing data-scarce image classification. Recent pipelines typically adapt a pretrained text-to-image diffusion model to a limited number of class examples and subsequently sample synthetic images using diverse textual prompts. However, in extreme data-scarce regimes such as long-tailed single-sample settings, this approach suffers from a dual failure mode: the generated samples often lack discriminative foreground details crucial for classifier training, and the adapted class prior can bias the early denoising process, causing output images to exhibit similar patterns despite varying text prompts. To overcome these limitations, we propose a sampling-side framework of two complementary components that simultaneously enhance fine details and diversity. First, Mask-Guided Reference (MGR) Attention updates only foreground value tokens with reference features via zero-shot segmentation, limiting reference influence to the target object and mitigating excessive global feature injection. Second, Repulsive Noise Optimization (RNO) encourages initial noise trajectories to diverge from dominant generative modes of the adapted model, enabling target prompts to express broader contextual variation. Extensive evaluations show consistent improvements, with the largest gains in long-tailed single-sample settings of up to 2.50 and 2.94 points on CUB-LT IF100, and further robustness across few-shot and background-shift evaluations.",
    "published": "2026-11-03T03:25:51Z",
    "updated": "2026-11-03T03:25:51Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04242"
  },
  {
    "id": "2611.04241",
    "title": "AceAction-5M: Hierarchical Goals for Generalist Action Learning Across 3D Game Worlds",
    "authors": [
      "Kailing Li",
      "Ruoxuan Zhang",
      "Zheyuan Zhou",
      "Boyang Chu",
      "Yingshan Lei",
      "Hongxia Xie",
      "Liang Du",
      "Zixun Sun"
    ],
    "abstract": "Video games provide a practical setting for collecting vision-language-action (VLA) data, whose acquisition in physical environments is costly. Existing datasets, however, remain limited by restricted game coverage, sparse language supervision, or temporal hierarchies that do not necessarily reflect changes in task objectives. We introduce AceAction, a dataset of human gameplay across multiple 3D games for learning skill composition and subgoal transitions. AceAction organizes demonstrations around complete tasks, linking overall instructions, ordered subgoals, and local skill instructions to temporally aligned visual observations and keyboard-and-mouse actions. To construct these annotations, we develop a vision-language model pipeline that identifies subgoals from changes in objectives or interaction targets, anchors navigation goals to visually recognizable waypoints, and composes adjacent subgoals into task instructions. The resulting demonstrations cover navigation, reconnaissance, combat, interaction, and recovery, with explicit stage boundaries that connect task progression to fine-grained control. We assess annotation quality through model-based verification and human inspection. An audit of 500 trajectories yields a 95.8% pass rate across independent reviewer assessments. AceAction provides a data foundation for studying how agents execute, combine, and switch skills to follow complex instructions in dynamic game environments.",
    "published": "2026-11-03T03:25:27Z",
    "updated": "2026-11-03T03:25:27Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04241"
  },
  {
    "id": "2611.04239",
    "title": "LIRA: A More Interpretable Dynamic Loss-Informed Rank Allocation for Low-Rank Adaptation",
    "authors": [
      "Sihao Wang",
      "Bozheng Li",
      "Xuemiao Xu",
      "Haoxin Yang",
      "Yujie Xu",
      "Jie Tang"
    ],
    "abstract": "Low-rank adaptation (LoRA) has become a widely used parameter-efficient fine-tuning method for large pretrained models. However, standard LoRA typically assigns a fixed rank profile despite layer- and stage-dependent adaptation needs, while recent adaptive-rank variants often rely on heuristic or first-order signals that provide only an indirect link between rank reallocation and local loss behavior. This leaves the rationale behind each rank reallocation insufficiently interpretable. Motivated by this gap, we propose LIRA (Loss-Informed Rank Allocation), a dynamic-rank LoRA method designed to make online rank reallocation more interpretable. LIRA scores each layer by the estimated magnitude of the local loss perturbation associated with its recent LoRA-factor movements under a second-order approximation, making the basis for each rank change interpretable term by term. By periodically applying DELTA (Displacement-Evaluated Loss-Trajectory Allocation), a displacement-based algorithm for LoRA rank reallocation, LIRA produces discrete effective ranks under matched budgets while remaining compatible with standard (A,B) adapters. On RoBERTa-base GLUE under the La-LoRA/LoRA protocol, LIRA outperforms the uniform-LoRA and adaptive-rank baselines reported under this protocol; Trajectory EMA attains performance competitive with Fixed-point Fisher at lower estimation cost.",
    "published": "2026-11-03T03:20:56Z",
    "updated": "2026-11-03T03:20:56Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04239"
  },
  {
    "id": "2611.04235",
    "title": "TCINet: Tissue-Conditioned Adaptive Cross-Branch Interaction Network for Nuclei Instance Segmentation",
    "authors": [
      "Zhenghang Qian",
      "Yang Liu",
      "Yanzhi Yu",
      "Peiwu Qin",
      "Yibing Shen",
      "Joongwon Chae",
      "Lihui Luo",
      "Zhongde Zhang",
      "Jianwen Guo",
      "Lianshun Jin"
    ],
    "abstract": "Separating touching nuclei requires local boundary detail, while cell type classification requires broader morphological context. These requirements also vary with the surrounding tissue environment. We propose the Tissue-Conditioned Adaptive Cross-Branch Interaction Network (TCINet), a single-stage model with Task-Specific Feature Adapters (TSFA) and Tissue-Conditioned Task-Aware Cross-Branch Interaction (TC-TACBI). TSFA produces branch-specific features at skip connections, and TC-TACBI controls three asymmetric paths among nucleus-presence (NP), horizontal-vertical (HV), and nucleus-type (NT) branches using predicted tissue probabilities. On PanNuke under standard three-fold cross-validation, TCINet achieves multiclass and binary panoptic quality scores of 0.519 and 0.692, respectively. Zero-shot tests on MoNuSeg yield a detection F1 score of 0.876. On PanNuke fold 0, adding TC-TACBI increases mPQ from 0.505 to 0.525. Code is available at https://github.com/celestial1321/TCINet.",
    "published": "2026-11-03T03:13:54Z",
    "updated": "2026-11-03T03:13:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04235"
  },
  {
    "id": "2611.04233",
    "title": "LINDA: Low Resource Foot Ulcer Segmentation using Local Similarity and Iterative Neural Dynamics",
    "authors": [
      "Trishaani Acharjee",
      "Sudip Chakrabarty",
      "Rajdeep Chatterjee",
      "Tathagata Bandyopadhyay"
    ],
    "abstract": "Foot ulcers are a leading cause of lower limb amputation, and the highest burden often falls on low and middle income regions where specialists and computing hardware are both scarce. Wound monitoring tools are most useful there when they are accurate yet small enough to run on ordinary devices, but accuracy usually comes from heavy networks. We present LINDA, a compact model that grounds segmentation in an explicit structural prior instead of raw intensity. A Local Self-Similarity (LSS) map, computed directly from the image and stable under local lighting changes, is fused into a ResNet-34 encoder, and a small Liquid Time-Constant module refines the boundary over four iterative steps. With every model trained under one protocol on the FUSeg 2021 dataset, LINDA obtains the best Dice (86.68\\%), IoU (79.67\\%), and boundary accuracy (HD95 6.37 pixels) in our comparison while using only 25.70M parameters, fewer than the U-Net and transformer baselines. As the LSS map is a fixed function of the input, it exposes the structural cues the model follows in a readable form. Together this makes LINDA an accurate, inspectable, and lightweight option for wound assessment in resource-constrained care.",
    "published": "2026-11-03T03:12:16Z",
    "updated": "2026-11-03T03:12:16Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04233"
  },
  {
    "id": "2611.04231",
    "title": "Constructing a Regional Slang Lexicon for Electricity Demands via Soft-Label Bidirectional Anchoring and Active Learning",
    "authors": [
      "Rong Chang",
      "Lijing Shi",
      "Zhaoxiang Zang"
    ],
    "abstract": "Power-grid customer service increasingly relies on community social media, where customers describe outages, billing, and equipment faults in informal regional dialect. Such messages exhibit non-standard morphology, semantic drift, and out-of-vocabulary expressions that make manual lexicon construction costly and degrade conventional NLP tools. We propose a weak-supervision framework constructing a regional slang lexicon from curated dialect anchors and power-domain seed terms. Candidates are generated via Pointwise Mutual Information with soft-label bidirectional anchoring, retaining dialect-anchored terms while recording power-domain relevance as separate metadata, and are scored by combining Sentence-BERT semantic similarity with a jieba-based wordhood measure. Uncertainty-aware active learning with rule-based and retrieval-augmented LLM oracles is applied under three query strategies, and the resulting lexicon is evaluated by a higher-capability LLM calibrated against human expert annotations via Cohen's $κ$. On 11,177 real WeChat messages from Yuxi (Yunnan, China), the framework achieves an evaluator-estimated dialect precision of DP~$=$~1.0 with zero false positives. An ablation shows that soft-label layering retains 751\\% more candidates than strict power-gating at identical precision, expanding the candidate pool from 41 to 349 terms. Human calibration ($n=46$) yields $κ_{\\text{dialect}}=1.0$ and $κ_{\\text{power}}=0.85$. The resulting 25--33-term lexicon, 4--5 of which are power-relevant, provides a preliminary resource for dialect-aware power-grid service NLP.",
    "published": "2026-11-03T03:11:35Z",
    "updated": "2026-11-03T03:11:35Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04231"
  },
  {
    "id": "2611.04230",
    "title": "Exact Optimality Certification of QPLIB 2096 through Complete Set Partitioning",
    "authors": [
      "Jingyang Du",
      "Zixiong Yi",
      "Yang Shen"
    ],
    "abstract": "We present an exact computational proof that the frozen QPLIB_2096 instance has global minimum 7,025,720. The solution and certification approach was explored and refined through ZiYor, a self-evolving AI system. The authors provide the mathematical account and exact validation reported here. The original formulation has 300 binary variables, 6,900 triangle inequalities, and 25 nonconvex quadratic constraints. A coefficient-level reconstruction identifies its variables with the unordered pairs of 25 items. The triangle inequalities encode partitions, while each quadratic constraint becomes a bound on the total weight of edges incident to one partition block. This yields a set-partitioning formulation over all capacity-feasible blocks, with a separate edge-cost graph determining the objective. Exact enumeration examines 245,505 subsets of sizes one through six and finds 14,981 feasible blocks. Every six-element subset is infeasible; nonnegative capacity weights exclude all larger blocks. An integer price vector satisfies the dual inequality for every feasible block and has sum 2,229,456. Subtracting this sum from the total objective edge cost 9,255,176 gives a lower bound of 7,025,720, attained by the supplied six-block partition. Fresh solver-free checks validate the candidate against both frozen model formats and verify the certificate. The result is an instance-specific optimality proof with an exact primal and dual witness; no cross-instance performance conclusion is drawn.",
    "published": "2026-11-03T03:10:02Z",
    "updated": "2026-11-03T03:10:02Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04230"
  },
  {
    "id": "2611.04228",
    "title": "DualWorldBench: Can Agents Plan Deliveries across Symbolic and Grounded Worlds?",
    "authors": [
      "Yang Chen",
      "Bin Wen",
      "Danyang Peng",
      "Hong-Jie You",
      "Zi-Qiao Shang",
      "Lan-Zhe Guo"
    ],
    "abstract": "Recent multimodal agents have shown promising progress in embodied planning and web interaction. However, existing evaluations often rely on simplified tasks with limited combinatorial structure, leaving it unclear whether current agents can robustly integrate perception and reasoning for multi-goal planning under temporal, physical, and multimodal constraints. We introduce DualWorldBench, a unified benchmark for evaluating agent planning under controlled symbolic--temporal and grounded--topological complexity. Built around a shared pickup--delivery interface, DualWorldBench consists of three complementary components: TextWorld, which isolates symbolic planning under varying task compositions and release dynamics; SimWorld, which evaluates grounded path planning under controlled topological variation with text, image, or multimodal inputs; and DualWorld-VQA, a diagnostic suite spanning perception, scene understanding, and planning. Experiments reveal a common gap between local understanding and globally consistent planning. In TextWorld, agents struggle to derive optimal task sequences under interacting temporal constraints; in SimWorld, grounded observations are not reliably converted into feasible action sequences. DualWorld-VQA further confirms that perception and topology understanding do not necessarily translate into constrained planning. Together, these results identify the central challenge as composing symbolic or grounded evidence into globally feasible and efficient multi-goal plans. These findings establish DualWorldBench as a challenging testbed for agents with tighter perception--reasoning--planning integration. All datasets and code are publicly available at our project website https://dualworld.netlify.app/.",
    "published": "2026-11-03T03:08:57Z",
    "updated": "2026-11-03T03:08:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04228"
  },
  {
    "id": "2611.02776",
    "title": "LipLingo: CNN Model for Lip Reading",
    "authors": [
      "Mahmoud S. Mayaleh",
      "Liban Ali Achkir",
      "Nijat Mehdiyev",
      "Ahmet Ozdil"
    ],
    "abstract": "Lip reading plays a crucial role in applications such as speech recognition, assistive technologies for the hearing-impaired, and biometric authentication. However, performance often degrades when the speaker varies and when certain speech sounds are visually similar. To address these challenges, we propose LipLingo, a robust lip-reading system based on the LipNet architecture, enhanced with a standardized preprocessing pipeline for consistent mouth-region representation, a rotational validation strategy for improved generalization to unseen speakers, and a flexible similarity evaluation for more reliable sentence-level assessment. The model architecture combines 3D convolutional layers for spatio-temporal feature extraction and bidirectional recurrent layers for sequence modeling, optimized using the Adam optimizer and Connectionist Temporal Classification (CTC) loss. On the GRID dataset, LipLingo achieved 95.0\\% character-level accuracy (CER 4.99\\%) and 87.2\\% sentence-level accuracy. At the corpus level, the system obtained a (WER 13.1\\%), outperforming the baseline LipNet and demonstrating competitive performance relative to recent 3D-ResNet + Bi-GRU + MixUp approaches. These results provide insights into strategies that enhance lip-reading robustness and highlight directions for future work toward real-world deployment.",
    "published": "2026-11-02T08:53:06Z",
    "updated": "2026-11-02T08:53:06Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.02776"
  },
  {
    "id": "2611.02775",
    "title": "Human-Centred, Risk-Constrained Evaluation of Financial Document Recognition: Evidence, Critical Errors, and Selective Automation",
    "authors": [
      "Subodh Lonkar"
    ],
    "abstract": "Financial document recognition is often assessed using character and word error rates, although these metrics do not express whether a system preserves the financial facts on which people and organisations act. This paper develops a human-centred, risk-constrained framework for evaluating financial document recognition as evidence recovery and decision support. It defines typed financial facts linked to visible source regions and separates verbatim transcription, deterministic normalization, and business interpretation. A layered quality model covers text, localization, layout, tables, fields, fact correctness, evidence grounding, uncertainty, robustness, and operational performance. Non-compensatory acceptance gates use one-sided uncertainty bounds for critical-field errors, preventing strong aggregate scores from masking failures in amounts, identifiers, signs, periods, or entity associations. Selective automation is formulated as a constrained routing problem that accounts for residual risk, human-review capacity, and review cost. The framework further specifies annotation and adjudication procedures, leakage-resistant benchmark partitions, statistical estimands, subgroup analyses, and a reproducibility card. Formal results establish the limitations of compensatory scoring, the non-zero upper risk bound after zero observed errors, and a loss sensitive decision rule for routing uncertain cases to human review. The contribution is theoretical and methodological; no new model, dataset, or empirical performance result is claimed.",
    "published": "2026-11-02T08:51:01Z",
    "updated": "2026-11-05T10:23:18Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02775"
  },
  {
    "id": "2611.02774",
    "title": "DIKT: A Diagnostic and Interpretable Knowledge Tracing Framework for Prediction and Model-based Learning Analysis",
    "authors": [
      "Yi-Qiang Wu",
      "Shaohui Chen",
      "Hanlin Li",
      "Baolin Yi"
    ],
    "abstract": "Knowledge tracing is a key component of intelligent educational systems. However, most existing methods mainly focus on response prediction, providing limited support for explaining predicted outcomes and improving students' learning states. This paper proposes Diagnostic and Interpretable Knowledge Tracing (DIKT), which integrates response prediction, skill-level diagnosis, and model-based learning analysis. DIKT generates bounded cognitive-state trajectories and decomposes the final response probability into skill-wise probabilities. The trajectories reveal students' evolving strengths and weaknesses, while the skill-wise probabilities identify the skills that most strongly constrain the prediction. Based on these diagnostic results, DIKT supports direct cognitive-state intervention and effective-learning-duration-based what-if analysis to examine how hypothetical adjustments affect current predictions and subsequent state evolution. DIKT combines Bayesian multi-head attention, conditional variational recurrent inference, a logistic-growth decoder, and multiplicative skill-wise prediction. Experiments on three benchmark datasets show that DIKT outperforms all evaluated baselines, with an average absolute AUC gain of 2.04 percentage points. Other experiments further demonstrate that DIKT supports educationally meaningful diagnostic analysis and provides informative diagnostic indicators for downstream applications, extending knowledge tracing from response prediction to interpretable diagnosis and model-based learning analysis.",
    "published": "2026-11-02T08:50:16Z",
    "updated": "2026-11-03T06:47:01Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02774"
  },
  {
    "id": "2611.02771",
    "title": "Stage-aware Multimodal Brain Graph Contrastive Learning for Neurodegenerative Disorder Diagnosis",
    "authors": [
      "Jingjing Zhou",
      "Chenxuan Meng",
      "Ciyuan Peng",
      "Jing Ren",
      "Feng Xia"
    ],
    "abstract": "Neurodegenerative disorders are characterized by their progressive nature, with distinct stages that require precise identification and tracking of progression trajectories for accurate diagnosis. However, existing diagnostic methods often fail to fully capture the unique brain patterns associated with different stages, limiting their ability to effectively target specific stages of the disorders. To address this issue, we propose a Stage-aware Multimodal Brain Graph Contrastive Learning (smBGC) method. Specifically, smBGC introduces a stage-aware feature enhancement strategy to capture stage-specific features across all progression stages, enabling the generation of stage-aware multimodal brain graph representations. In addition, smBGC incorporates a stage-adaptive brain graph augmentation approach within a graph contrastive learning framework, facilitating multimodal fusion and improving the model's capability to distinguish between different disorder stages. Experiments on two real-world datasets demonstrate the superior performance of smBGC in various neurodegenerative disorder diagnosis tasks compared with state-of-the-art methods.",
    "published": "2026-11-02T08:48:12Z",
    "updated": "2026-11-02T08:48:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02771"
  },
  {
    "id": "2611.02769",
    "title": "Unlocking the Potential of Vision Foundation Models for Multi-Task Dense Prediction via Mixture of Task Adapters",
    "authors": [
      "Yunzhi Zhuge",
      "Xinzhuo Yu",
      "Sitong Gong",
      "Lu Zhang",
      "Pingping Zhang",
      "Huchuan Lu"
    ],
    "abstract": "Multi-task dense prediction seeks a single, coherent representation that supports simultaneously discriminative semantic recognition and regularized geometric/structural inference. For vision foundation models, pretrained semantic invariances conflict with the frequency and smoothness biases of dense objectives; joint fine-tuning and single-route adapters therefore compress competing gradients into one update channel, causing negative transfer and unstable cross-task agreement. We frame this as two-level adaptation: task-generic alignment that preserves priors, and task-aware specialization that resolves late-stage conflicts. Based on this principle, we propose D2MoE , a Mixture of Task Adapters that explicitly factorizes these roles within a frozen DINOv3 backbone. D2MoE introduces Task-Generic Low-Rank Adaptation (TG-LoRA) in attention projections throughout the network to provide a stable, shared adaptation channel, and a Task-Adaptive Mixture of Experts (TA-MoE) injected only at the final attention block of each stage to enact sparse, task-conditioned perturbations of token mixing in a single forward pass. A Semantic Prior Injector further couples multi-level task features with frozen foundation priors to reinforce semantic coherence while preserving boundary and structural fidelity. Experiments across diverse benchmarks substantiate that this structured factorization yields robust multi-task improvements with a small trainable footprint, establishing a principled and scalable route to prior-preserving, foundation-centric multi-task dense perception.",
    "published": "2026-11-02T08:47:07Z",
    "updated": "2026-11-02T08:47:07Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.02769"
  },
  {
    "id": "2611.02767",
    "title": "GaussFlaw: Fine-Grained Perceptual Diagnosis for 3D Gaussian Splatting",
    "authors": [
      "Shaocheng Shen",
      "Zihan Zheng",
      "Kejin Li",
      "Lu Liu",
      "Xiaoyun Zhang",
      "Qiang Hu",
      "Wenjun Zhang"
    ],
    "abstract": "3D Gaussian Splatting (3DGS) enables photorealistic novel- view synthesis with real-time rendering, yet fine-grained di- agnosis of its rendering artifacts remains challenging. These artifacts are typically spatially localized and exhibit diverse degradation patterns, making them difficult to character- ize using global quality metrics and image-level assessment benchmarks, which provide no explicit indication of where they occur or what types of artifacts they represent. To ad- dress this limitation, we introduce GaussFlaw-80K, the first large-scale dataset for fine-grained perceptual diagnosis in 3DGS. Constructed through a model-assisted human-in-the- loop pipeline, GaussFlaw-80K contains 80,049 artifact re- gions across 14,289 rendered images, each annotated with a pixel-level mask and one of eight flaw labels spanning ge- ometric, blending, and photometric degradations. These an- notations turn 3DGS artifact diagnosis into an explicit and measurable task. Building on this dataset, we propose Ge- oCritic, a geometry-guided multi-task model that integrates RGB appearance with depth-derived cues to jointly localize artifacts and classify their flaw types. Beyond evaluation, we further demonstrate the downstream benefits of fine-grained diagnosis through three complementary targeted operations: Gaussian densification, attribute correction, and outlier prun- ing. Experiments show that GeoCritic achieves an AUC-J of 0.9507 and an Acc@1 of 80.08%, while diagnosis-guided re- finement improves all reported global and crop-level metrics across diverse datasets and 3DGS backbones.",
    "published": "2026-11-02T08:46:50Z",
    "updated": "2026-11-02T08:46:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.02767"
  },
  {
    "id": "2611.03752",
    "title": "LoRA-Patch: Defending Against Backdoored LoRA Adapters via Directional Steering",
    "authors": [
      "Shengyan Huo",
      "Peihai Jiang",
      "Xixiang Lyu",
      "Yige Li"
    ],
    "abstract": "Third-party LoRA adapters introduce serious backdoor risks: malicious adapters can maintain normal task performance while embedding hidden, trigger-activated behaviors, making them difficult to detect through standard utility evaluations. Existing removal-based defenses typically sanitize backdoored models by updating, pruning, distilling, or mixing model parameters. However, these approaches are misaligned with adapter-based deployment, where the trusted base model is expected to remain frozen. In this work, we propose LoRA-Patch, a lightweight backdoor defense tailored to LoRA adapters. Our key insight is that backdoor injection distorts the directional geometry of a poisoned adapter relative to its trusted base model. Building on this insight, LoRA-Patch suppresses trigger-activated behaviors by realigning adapter directions through layer-wise steering, without modifying the base model weights. Extensive experiments across five backdoor attacks and three models show that LoRA-Patch effectively mitigates trigger-activated backdoors, outperforming existing baselines while preserving benign task performance. Moreover, LoRA-Patch is computationally efficient, constructing patches within 20 seconds across all evaluated models and adapters. Our code is publicly available at https://github.com/FOXVEDA/LoRA-Patch.",
    "published": "2026-11-02T08:44:49Z",
    "updated": "2026-11-02T08:44:49Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.03752"
  },
  {
    "id": "2611.05422",
    "title": "CAST-Bench: Tracing Every Sound to Its Source in Multi-Shot Audio-Video Generation",
    "authors": [
      "Yucong Liu",
      "Qi Tian",
      "Shuyuan Tu",
      "Kaihang Pan",
      "Weijie Kong",
      "Chao Pan"
    ],
    "abstract": "Existing benchmarks for joint text-to-audio-video (T2AV) generation evaluate perceptual quality and audiovisual alignment, but balanced sound-source sam?pling and separate reporting by shot structure remain limited. This makes it dif?ficult to determine whether a specific sound is missing, attributed to the wrong source, or lost across shot transitions. To address this, we introduce CAST?BENCH, a benchmark designed to trace every generated sound back to its in?tended source in multi-shot audio-video generation. The core idea is to formu?late T2AV correctness as an audiovisual contract in which each requested sound must be emitted by the right source, synchronized with the corresponding visual action, and carry the right semantic content. Concretely, the benchmark orga?nizes 900 prompts into 9 sound-source categories, with 100 prompts per cate?gory, spanning speech, animals, instruments, ambient sounds, and other emitter types. The prompts include 439 single-shot and 461 multi-shot narratives, each derived from a structured specification that links every audio event to its emit?ter, subject, and temporal slot. The benchmark provides an 18-metric evaluation suite covering three dimensions: Visual Performance, Content Consistency, and Audio & Semantic Alignment. We further benchmark 12 representative gen?erators and find that visual quality is nearly saturated across leading systems, yet audio semantic scores still differ markedly. Across the nine shared mod?els, multi-shot prompts receive lower aggregate scores under the subset-specific scoring rules and yield different model rankings. Multi-person speech, con?sistent speaker identity across shots, and cross-shot event retention remain the main unresolved challenges. All prompts and evaluation code are available at https://github.com/yucong-liu/CAST-Bench-public.",
    "published": "2026-11-02T08:41:48Z",
    "updated": "2026-11-02T08:41:48Z",
    "categories": [
      "cs.SD",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05422"
  },
  {
    "id": "2611.02759",
    "title": "Trace4D: Grounded Spatiotemporal Reasoning via 4D State Sequences",
    "authors": [
      "Wooseok Jang",
      "Seungryong Kim",
      "Yan Lu",
      "Lei Ji"
    ],
    "abstract": "Understanding how objects and their spatial relationships evolve in 3D space over time remains challenging for vision-language models (VLMs), particularly under changing viewpoints. Recent approaches incorporate geometric information into reasoning, but explicit supervision for temporally ordered 4D state evolution and its use as intermediate evidence remains limited. We introduce \\textbf{Trace4D}, which trains VLMs to predict 4D state sequences and reason over their inter-timestep changes alongside temporal visual observations. Its 4D-grounded chain-of-thought (CoT) explicitly represents 4D states, analyzes temporal visual context, and connects both as evidence for the answer. We construct Trace4D-Train from in-the-wild videos with 600K 4D perception examples and approximately 70K grounded QA examples, and train with joint supervised fine-tuning followed by geometry-aware GRPO. At inference, Trace4D predicts 4D states and reasoning directly from video without reference annotations or an external geometric model. Experiments on Trace4D-Bench and VLM4D show improved QA accuracy over the base VLMs and benefits from reasoning over 4D state changes and temporal visual observations.",
    "published": "2026-11-02T08:41:06Z",
    "updated": "2026-11-02T08:41:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.02759"
  },
  {
    "id": "2611.02757",
    "title": "Is your LLM an Agressive Narcissist with Depression? Analyzing Psychological Portraits of Large Language Models",
    "authors": [
      "Polina Fedorinina",
      "Anna Fattakhova",
      "Nadezhda Romanova",
      "Ekaterina Lezina",
      "Irina Nikishina"
    ],
    "abstract": "Nowadays, interaction with AI requires caution not only regarding the factual reliability of generated content but also regarding personality markers that models may implicitly transmit during dialogue that can subtly influence users' perception of information. In this paper, we conduct a large-scale experimental study in which 22 large language models complete 11 psychological inventories. Furthermore, we investigate correlations between human and model responses to track the adjustments made for the users who interact with them on a daily basis. The results show that LLMs exhibit coherent and relatively stable psychological patterns. Personality traits remain largely consistent, whereas emotional and symptomatic dimensions are more variable, with anxiety and neuroticism emerging as dominant tendencies. Model explanations further suggest that LLMs generate internally consistent and safety-oriented profiles while also reflecting correlations with the users they regularly interact with.",
    "published": "2026-11-02T08:39:40Z",
    "updated": "2026-11-02T08:39:40Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02757"
  },
  {
    "id": "2611.02756",
    "title": "DINOFAS: Bonafide-Centric Representation Learning for Face Anti-Spoofing",
    "authors": [
      "Shakeel Muhammad Ibrahim",
      "Muhammad Sohail Ibrahim",
      "Muhammad Shahid Jabbar",
      "Shujaat Khan"
    ],
    "abstract": "Face anti-spoofing (FAS) models often learn attack- and dataset-specific cues that degrade performance under unseen acquisition conditions and presentation attacks. We present DINOFAS, a DINOv3-based framework that formulates FAS as bonafide-centric representation learning. The proposed framework combines parameter-efficient DINOv3 adaptation using low-rank adaptation (LoRA), an attention style-content disentanglement (ASCD) module for reducing domain-specific appearance variations, and a dual-branch architecture that separates prototype-based liveness learning from attack-semantic supervision. The model is jointly optimized using a bonafide-centric prototype objective, an attack-semantic classification loss applied to detached features, and orthogonality regularization. DINOFAS achieves an average HTER of 9.09\\% under the standard OCIM leave-one-domain-out protocol, where training is performed on three source datasets and evaluation is conducted on the held-out unseen domain. We further evaluate synthetic-to-real generalization by training exclusively on SynthASpoof and testing on four unseen real-world datasets, where DINOFAS achieves the lowest average HTER of 21.41\\% and the highest average AUC of 86.14\\% among the compared methods. Evaluations on OULU-NPU and SiW-Mv2 additionally demonstrate robustness to variations in acquisition conditions, devices, and unseen presentation attacks.",
    "published": "2026-11-02T08:39:19Z",
    "updated": "2026-11-02T08:39:19Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2611.02756"
  },
  {
    "id": "2611.02751",
    "title": "Pair-Relative Partial Equivariance for Rotation-Robust Keypoint Descriptor Matching",
    "authors": [
      "Jongmin Lee"
    ],
    "abstract": "Learned keypoint descriptors trained on upright imagery often fail under large in-plane rotation. Steerers address this by applying a single exact SO(2) representation to the descriptor space, but this global group constraint can be too rigid for keypoint descriptors, whose angular responses need not follow a single group representation. We propose pair-relative partial equivariance, which measures equivariance under the empirical distribution of relative rotations in image pairs, and PaSteer, a relaxed descriptor-steering framework that allows the steering map to leave the exact representation manifold while retaining the lightweight, backbone-free design of steering. PaSteer instantiates this relaxation with two variants: an identity-preserving residual steerer (PaSteer-soft) and a free-form Fourier steerer (PaSteer-free). We show that the per-angle optimal linear steerer for a fixed non-equivariant descriptor generally does not obey the group composition law, explaining why exact representations can be suboptimal in the frozen-descriptor regime. On Roto-360, MegaDepth-1500, AIMS, and IMC-PT, PaSteer consistently improves rotation-robust matching over an exact steerer on frozen DeDoDe descriptors, especially under large relative rotations, with minimal upright degradation.",
    "published": "2026-11-02T08:38:12Z",
    "updated": "2026-11-02T08:38:12Z",
    "categories": [
      "cs.CV",
      "cs.CG"
    ],
    "url": "https://arxiv.org/abs/2611.02751"
  },
  {
    "id": "2611.03723",
    "title": "EMBERS: Empirically Motivated Robustness Testing of Deep Research Systems via Defect-Guided Fuzzing",
    "authors": [
      "Shuochuan Li",
      "Zan Wang",
      "Dong Wang",
      "Yuhang Jiang",
      "Huajin Cui",
      "Chen Zhang",
      "Gang Wang",
      "Junjie Chen"
    ],
    "abstract": "Deep Research (DR) systems extend large language models into autonomous agents that decompose complex information needs, iteratively search the web, and synthesize evidence to answer challenging questions. However, their multi-stage execution may introduce robustness risks, as variations in user questions or intermediate search inputs may propagate across research stages and lead to incorrect answers. Existing evaluations focus on task-solving capabilities or robustness against external evidence disturbances, leaving intrinsic weaknesses in DR execution insufficiently explored. Thus, we conduct an empirical study of 1,932 execution trajectories from three representative DR systems and identify nine recurring defect categories across subquestion formulation, online search, and final reasoning. Guided by these findings, we propose EMBERS, an empirically motivated, defect-guided fuzzing framework for robustness testing of DR systems. Starting from correctly answered seed questions, EMBERS generates stage-targeted test inputs using defect-guided mutation, web-search-assisted fidelity assurance, and diversity-aware seed maintenance. Experiments across 16 framework--model--dataset settings show that EMBERS achieves 3.21 times the failure-discovery throughput of the strongest baseline under identical testing budgets. Human and LLM-assisted evaluations demonstrate that most generated inputs preserve the original information need and necessary contextual constraints. Moreover, model fine-tuning experiments show consistent-answer performance improvement, highlighting their value for robustness testing and model improvement.",
    "published": "2026-11-01T06:27:23Z",
    "updated": "2026-11-01T06:27:23Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.03723"
  },
  {
    "id": "2611.01627",
    "title": "EgoMo3R: Joint Egocentric Motion and Scene Reconstruction",
    "authors": [
      "Chaitanya Patel",
      "Yusuke Kato",
      "Rin Takahira",
      "Kazuki Kozuka",
      "Juan Carlos Niebles",
      "Ehsan Adeli"
    ],
    "abstract": "Understanding holistic 3D human motion and the surrounding environment from egocentric video is fundamental for applications in AR/VR and robotics. Although these tasks are inherently coupled, existing methods treat them separately. In particular, egocentric motion reconstruction methods typically assume access to metric, gravity-aligned camera trajectories from specialized inertial sensors. Recovering such trajectories from monocular egocentric video remains a significant challenge due to rapid head movements and motion blur. We present EgoMo3R, a joint optimization framework that simultaneously reconstructs 3D human motion and scene geometry from casual egocentric video. It leverages the robustness of low-level visuo-geometric primitives, including monocular depth, optical flow, and point tracks, integrated with a diffusion-based human motion prior via first-order optimization. We propose an alternating optimization scheme that establishes a synergistic feedback loop: scene reconstruction provides physical grounding and trajectory conditioning for the motion prior, while the motion prior regularizes the camera trajectory and anchors the scene in a metric, gravity-aligned world frame. We evaluate EgoMo3R on the highly dynamic sequences of the EgoExo4D and Nymeria datasets and show that it outperforms specialized baselines in both 3D scene reconstruction and egocentric motion estimation.",
    "published": "2026-11-01T06:20:11Z",
    "updated": "2026-11-01T06:20:11Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01627"
  },
  {
    "id": "2611.01626",
    "title": "Special and General Computational Aesthetics",
    "authors": [
      "Ganqing Luo",
      "Chuan Li",
      "Liaoruxing Zhang",
      "Xin Jin"
    ],
    "abstract": "Computational aesthetics is a field at the intersection of computer science, artificial intelligence, aesthetics, and other disciplines. As AI has developed, the field has formed relations of inclusion, intersection, or support with computational art, AI art, AI aesthetics, AI-generated content (AIGC), computational creativity, affective computing, and neuroaesthetics. Without distinguishing scope, objectives, and methods, it may be narrowed to image aesthetic quality assessment or expanded into an umbrella term for AI's involvement in art. We analyze its internal structure and its relations with neighboring concepts, and propose a two-level scope: special computational aesthetics (SCA) and general computational aesthetics (GCA). SCA centers on aesthetic measurement and aesthetic process modeling. The former primarily corresponds to \"Aesthetic Perception\": computationally identifying and representing aesthetic attributes and predicting human aesthetic evaluations; the latter primarily to \"Aesthetic Understanding\": computationally describing, testing, and explaining how human aesthetic perception and judgment are formed. GCA extends this core to include \"Aesthetic Generation,\" namely artistic generation guided by computational aesthetic models. Some computational aesthetic tasks can also use non-AI methods. Research in this scope using AI algorithms and models we define as AI aesthetics, which may involve the special core and the general extension. \"Aesthetic Generation\" intersects with AIGC, AI art, and computational creativity, but belongs to the general extension defined here only when computational aesthetic models substantively constrain, guide, or optimize artwork generation. We also draw on Feng Peng's discussion of the computability of beauty, aesthetic experience, and art as a theoretical reference for clarifying boundaries between computational aesthetics and related concepts.",
    "published": "2026-11-01T06:19:21Z",
    "updated": "2026-11-01T06:19:21Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01626"
  },
  {
    "id": "2611.01620",
    "title": "Chain-of-Thought Oversight Requires Separate Evidence for Faithfulness and Monitorability",
    "authors": [
      "Sichao Li",
      "Sai Ma",
      "Xiyang Hu",
      "Chudi Zhong",
      "Tongliang Liu"
    ],
    "abstract": "A common assumption in chain-of-thought (CoT) oversight is that a visible reasoning trace makes model behavior easier to monitor. We argue that this assumption can conflate distinct properties along a chain linking a model's internal computation, reasoning artifacts, outputs, and monitor judgments. We identify four properties along this chain: reasoning visibility (whether a trace is accessible), mechanistic faithfulness (whether a trace reflects internal computation), mechanistic localizability (whether a compact causal mechanism can be isolated), and behavioral monitorability (whether a monitor can detect the target behavior). Two complementary case studies across three open-weight reasoning models show why these distinctions matter. In the security vulnerability reasoning study, probes and activation ablations provide evidence of internal representation and causal influence, but a monitor with access to the reference answer does not outperform the majority-class baseline in a held-out test. In authority-hint factual reasoning study, a monitor correctly distinguishes changed from unchanged answers, but seven mechanistic analyses do not isolate a compact causal mechanism. These results show that evidence for one claim does not establish the others. We therefore propose an evidential-chain reporting standard. Each claim carries a licensing statement that specifies its target property, access tier, and artifact, and labels each required link as supported, unsupported, or assumed. These assessments determine whether the conclusion is licensed, conditionally licensed, or not licensed.",
    "published": "2026-11-01T06:16:34Z",
    "updated": "2026-11-01T06:16:34Z",
    "categories": [
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2611.01620"
  },
  {
    "id": "2611.01617",
    "title": "Seeing What Matters, Verifying What Pays: Load-Adaptive Speculative Decoding for Vision-Language Models",
    "authors": [
      "Hong Nie",
      "Zhangchi Gao",
      "Yuqian Liang",
      "Jun Yu",
      "Bo Wang",
      "Jianqing Sun",
      "Shengping Liu"
    ],
    "abstract": "Speculative decoding accelerates vision-language model (VLM) inference without altering the output distribution, yet two factors limit its gains. Existing drafters either lack the image evidence required for visually grounded tokens or pay to condition on every visual token, although a short draft block typically depends on only a few image regions. Moreover, the value of verifying additional candidates varies with GPU load, so no fixed verification structure is efficient across serving conditions. We present Uni-LaSpec, a block-parallel speculative decoding framework that addresses both factors. To improve draft quality, Uni-LaSpec reuses the verifier's own attention: the query retained from the preceding verification ranks the cached, int8-quantized visual keys, and a cross-layer vote selects a few visual tokens that the drafter fuses through gated cross-attention. Acceptance-aware training further weights each draft position by its contribution to the accepted prefix. To allocate verification, a marginal-cost criterion selects the structure per request and per round: draft trees exploit idle verifier capacity under light load, whereas a dynamic head truncates linear drafts under heavy load. Across six VLMs from three model families and 17 text and multimodal benchmarks, selecting eight visual tokens retains at least 98.6% of the acceptance obtained from the full image at sub-millisecond selection cost. With greedy decoding at concurrency one, Uni-LaSpec achieves up to 5.11x text and 3.24x multimodal throughput over autoregressive decoding. Across six load levels and three GPU types, it outperforms autoregressive decoding in every setting and matches or exceeds the best fixed verification strategy in 123 of 144 settings; under bursty arrivals, it reduces mean end-to-end latency by 47.6% relative to linear verification.",
    "published": "2026-11-01T06:09:55Z",
    "updated": "2026-11-01T06:09:55Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01617"
  },
  {
    "id": "2611.01615",
    "title": "LLM-Enhanced Multimodal House Price Prediction using Structured, Textual, and Visual Features",
    "authors": [
      "Khandokar Md. Rahat Hossain",
      "Souvik Das",
      "Tahsina Hashem",
      "Mohammed Eunus Ali",
      "Tanzima Hashem"
    ],
    "abstract": "Accurate house price prediction is essential for real estate buyers, sellers, agents, and financial institutions. Traditional methods rely primarily on structured data, e.g., number of bedrooms, bathrooms, parkings, but they overlook rich contextual information embedded in textual descriptions and property photos. Previous deep learning approaches for house price prediction have fused multimodal data but they fall short to extract structured spatio-temporal and contextual features from texts and semantic visual information from images. In this paper, we introduce a novel multimodal framework that addresses these limitations by systematically integrating structured attributes, textual descriptions, and visual images of properties to achieve higher prediction accuracy while maintaining interpretability. We use a large language model to derive domain-specific spatio-temporal and contextual features from text, and an unsupervised vision-language approach to automatically group photos into meaningful classes like indoor, outdoor, mixed, or floorplan, that are commonly present in real-world house listings. These categories are created without manual labeling by aligning image clusters with carefully designed pseudo text prompts. We fuse all features into a unified representation and use an optimized regressor to predict prices. Experiments on a large real-world property dataset demonstrate that our method outperforms traditional methods and existing multimodal baselines. Ablation studies confirm that the novel textual feature extraction and categorized visual embeddings substantially contribute to more accurate and reliable price predictions.",
    "published": "2026-11-01T06:07:04Z",
    "updated": "2026-11-01T06:07:04Z",
    "categories": [
      "cs.LG",
      "cs.CL",
      "cs.CV",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2611.01615"
  },
  {
    "id": "2611.01612",
    "title": "Halal-NeSyNet: Clause-Scoped Neuro-Symbolic Cross-Attention for Automated Food Ingredient Auditing and Risk-Aware Halal Logistics Triage",
    "authors": [
      "Mochamad Rizal Fauzan",
      "Naila Nursyifa",
      "Irgi Surya"
    ],
    "abstract": "Verifying that a packaged food is Halal requires reading ingredient declarations and E-number additives before goods enter certified warehouses. Dual-origin additives such as E471, E422, E441 and E920 are Mushbooh (doubtful) unless a botanical, microbial or certified-Halal qualifier appears in the same ingredient clause, so a plant-based qualifier on one clause must not clear an unqualified additive in another. We call a failure to respect this scope cross-clause modifier confounding and build a benchmark of 3,199 items (277 Open Food Facts records and 2,922 template-generated clause-swap items, labelled by an explicit 50-code rule base rather than by a certification authority) with a 540-item counterfactual suite. We propose Halal-NeSyNet, which couples a DistilBERT encoder with a 16-dimensional rule-derived symbolic vector through cross-attention and gated fusion, trained with an asymmetric false-Halal risk loss. Over five seeds, text-only TF-IDF baselines reach 86.25-86.71 % accuracy with 13.42-21.73 % false-Halal leakage and 6.33-26.00 % counterfactual triad consistency, whereas Halal-NeSyNet reaches 97.04+/-0.34 % and 99.67+/-0.50 %. Gradient boosting given the same symbolic vector reaches 96.25+/-1.24 % (+0.59 points from Halal-NeSyNet, 95 % CI [-1.11, +2.28]), so most of the gain comes from clause-scoped symbolic features and not from the network, and the risk loss did not help. Holding out whole template families, text-only models fall to 61.91-78.35 %, Halal-NeSyNet to 90.87+/-11.76 % and logistic regression with the symbolic vector to 91.11+/-2.88 %, with far more spread for Halal-NeSyNet. A three-lane receiving simulation auto-clears 49.33 % of cargo at 0.76 % green-lane contamination. Because labels and features come from one rule engine and 91.3 % of the items are templated, the results measure fidelity to a rule policy, not religious certification.",
    "published": "2026-11-01T05:56:41Z",
    "updated": "2026-11-01T05:56:41Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.01612"
  },
  {
    "id": "2611.01607",
    "title": "NatureFusion: Rethinking Infrared and Visible Image Fusion as Natural Complementary Enhancement",
    "authors": [
      "Jianfeng Ding",
      "Linfeng Tang",
      "Hao Zhang",
      "Han Xu",
      "Xunpeng Yi",
      "Yibing Zhang",
      "Meiqi Gong",
      "Zhongyuan Wang",
      "Jiayi Ma"
    ],
    "abstract": "In the absence of ground truth, most existing infrared and visible image fusion methods pursue fidelity to the source images and directly superimpose two physically distinct modalities. As a result, salient infrared targets appear as bright patches of thermal radiation pasted onto the scene. These patches obscure the original color and texture of the targets, so the fused images look unnatural to human observers and deviate from the data distribution learned by vision models pretrained on visible images. Therefore, we redefine infrared and visible image fusion as natural complementary enhancement rather than source fidelity, and propose NatureFusion, which exploits cross-modal complementary cues to infer a clear and natural visible-style image from low-quality visible and infrared image pairs. Specifically, to address the lack of ground truth, we employ a generative foundation model as the teacher to directly generate visually natural fused images for supervision. Furthermore, to fully distill the teacher's generative capability while reducing computational cost, we fine-tune a pretrained generative model with conditional flow matching through a light-weight fusion adapter. Last but not least, to further improve downstream performance without sacrificing natural appearance, we freeze the fusion adapter and introduce a detector-supervised task adapter that strengthens the complementary contribution of infrared. Extensive comparisons with seven multi-modal fusion and seven single-modality enhancement methods demonstrate that NatureFusion generates visually natural fused images with the best perceptual quality. Detection and segmentation models pretrained on visible images achieve substantially higher accuracy on our fused images than on those of any competing method.",
    "published": "2026-11-01T05:52:10Z",
    "updated": "2026-11-01T05:52:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01607"
  },
  {
    "id": "2611.01605",
    "title": "MedNet and U$^2$-ViT: A Nested Vision Transformer Diffusion Framework for Diverse Medical Images Generation",
    "authors": [
      "Lakshmikar R. Polamreddy",
      "Jialu Li",
      "Youshan Zhang"
    ],
    "abstract": "The scarcity of diverse, high-quality medical images remains a significant bottleneck in advancing AI-driven medical diagnostics and treatment planning. Traditional datasets often suffer from class imbalances, limited disease coverage, and insufficient variations in imaging conditions - challenges that hinder the development of robust, generalizable models. To address this, we introduce MedNet, a large-scale, multi-modal text-to-image dataset spanning 61 disease categories with 160 classes, covering both humans and animals. We built this with images from trusted public repositories, ensuring data diversity, quality, and ethical compliance. Additionally, we propose U$^2$-ViT, a novel diffusion-based text-to-image generation architecture arranging Vision Transformers (ViTs) in a nested U-Net structure to enhance the generation of diverse, and high-fidelity medical images. Through extensive experiments, we demonstrate that our model achieves the best Fr'echet Inception Distance (FID) score compared to state-of-the-art models. The source code is available at https://github.com/LakshmikarPolamreddy/MedNet-U2-ViT.",
    "published": "2026-11-01T05:42:29Z",
    "updated": "2026-11-01T05:42:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01605"
  },
  {
    "id": "2611.01603",
    "title": "DyRadio: Spatiotemporal Diffusion for Dynamic Radio Map Reconstruction",
    "authors": [
      "Zhijie Fan",
      "Zhifeng Zhao",
      "Rongpeng Li"
    ],
    "abstract": "Accurate radio map (RM) reconstruction is essential for environment-aware wireless networks. Sampling-based methods, which infer radio conditions from sparse measurements, are widely adopted because they do not require explicit knowledge of transmitter configurations. However, in dynamic environments, time-varying propagation conditions cause RMs to evolve, complicating reconstruction from temporally distributed sparse observations. Although cross-frame observations provide complementary spatial information, their direct aggregation can introduce temporal state mismatch. Furthermore, unknown measurement noise adds to the reconstruction difficulties. To address these challenges, we propose DyRadio, a framework that integrates spatiotemporal RM reconstruction with unknown noise estimation. Specifically, a propagation-prior-guided, noise-conditioned spatiotemporal diffusion model (DM) jointly reconstructs consecutive RMs by capturing cross-frame dependencies, while adapting to measurement noise levels. To estimate the noise level, an iterative predictive likelihood method alternates between DM-based blind-area prediction and noise-level updates. The estimated noise level then conditions reconstruction of the complete RM sequence. Experimental results demonstrate superior reconstruction accuracy and robustness against measurement noise, with peak signal-to-noise ratio (PSNR) improvements of 1.18-5.75 dB over the best-performing baseline across all evaluated settings.",
    "published": "2026-11-01T05:39:31Z",
    "updated": "2026-11-01T05:39:31Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01603"
  },
  {
    "id": "2611.01601",
    "title": "Accurate automated photo-identification of Near Eastern and European fire salamanders",
    "authors": [
      "Maayan Yesharim",
      "Hava Goldstein",
      "Gabi Kolodny",
      "Assaf Ben-Levy",
      "Tamar Kis-Papo",
      "Dor Gavish",
      "Rotem Vidan",
      "Nirit Lavie-Alon",
      "Olga Rybak",
      "Yoav Ram"
    ],
    "abstract": "Photo-identification underpins non-invasive capture-recapture monitoring of amphibians, but manual identification becomes slow and error-prone as reference libraries grow. Focusing on the Near Eastern fire salamander (Salamandra infraimmaculata), we developed a pipeline based on zero-shot local-feature matching (SuperPoint and LightGlue) without species-specific training and evaluated it on $2{,}440$ field photographs from Haifa and Tel Dan in northern Israel. We isolated the yellow spot pattern, scored image similarity by the number of high-confidence keypoint matches, which reduced a confound whereby many-spotted individuals accumulate spurious matches, and assigned identities across the database by two-tier clustering. Pipeline-assisted expert review corrected misidentifications, reducing the number of identities by almost a quarter. On held-out individuals, the pipeline ranked the correct individual first for $95.2\\%$ of queries and recovered identities with an ARI of $0.958$. Without modification, it reached $95.1\\%$ and $91.7\\%$ top-1 accuracy on two datasets of the European fire salamander (Salamandra salamandra) and recognised $93.7\\%$ of recaptures in one of them, compared with $38$-$77\\%$ for five established programs and $93.9\\%$ for visual inspection. Zero-shot local-feature matching thus offers amphibian monitoring a re-identification tool that needs no training data, transfers between related species, scales to databases of over a thousand individuals, and can audit existing databases before capture-recapture analysis.",
    "published": "2026-11-01T05:33:43Z",
    "updated": "2026-11-01T05:33:43Z",
    "categories": [
      "cs.CV",
      "q-bio.QM"
    ],
    "url": "https://arxiv.org/abs/2611.01601"
  },
  {
    "id": "2611.01600",
    "title": "SCOUT: Planning under Occlusion via Object-Centric World Model Rollouts",
    "authors": [
      "Amir Hossain Raj",
      "Xuesu Xiao"
    ],
    "abstract": "Robots manipulating in cluttered spaces must often plan from partial views where foreground objects occlude the target, surrounding geometry, and usable free space. Reactive policies often miss these hidden constraints, while exhaustive search becomes computationally prohibitive in dense clutter. We present SCOUT, an occlusion-aware planning framework that bridges high-level deliberation with grounded physical rollouts. SCOUT leverages an object-centric scene representation to reconstruct hidden geometry and derive a relational planning state capturing blocker hierarchies and accessibility corridors. To navigate the vast action space in clutter, an LLM proposes structured action candidates which are then rigorously evaluated via Monte Carlo Tree Search (MCTS) using a learned action-conditioned world model. Evaluations on 'Reveal' and 'Placement' tasks show that SCOUT outperforms Vision-Language-Action (VLA) policies, embodied agents, and 3D world models, with significant gains in long-horizon tasks requiring reasoning over occluded geometry. We further validate the framework's robustness through real-world robotic manipulation in a cluttered shelf environment.",
    "published": "2026-11-01T05:32:18Z",
    "updated": "2026-11-01T05:32:18Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01600"
  },
  {
    "id": "2611.00974",
    "title": "Efficient Image Denoising on Smartphone GPUs: Mobile AI 2026 Challenge Report",
    "authors": [
      "Andrey Ignatov",
      "Georgy Perevozchikov",
      "Radu Timofte",
      "HaoDong Wu",
      "Desheng Cai",
      "Nikolay Falaleev",
      "Faraz Kayani",
      "Sarmad Kayani",
      "Asad Ahmed",
      "Dmitry Ignatov",
      "Kihwan Yoon",
      "Ganzorig Gankhuyag",
      "Yoonsuk Kang",
      "The Van Le",
      "Jin Young Lee",
      "Sunzhe Yang",
      "Qiuhai Yan",
      "Kang Chen",
      "Tingting Wang",
      "Faming Fang"
    ],
    "abstract": "Image denoising is a fundamental problem in mobile photography. Despite a large number of solutions proposed for this task, the majority of them are trained on synthetically produced noisy images, and are additionally too computationally heavy for processing full-resolution images on mobile devices. This creates a need for efficient deep learning-based models that are not only performant but can also be deployed on constrained mobile hardware. In this Mobile AI challenge, we address this problem and propose the participants to design fast solutions that can denoise Full HD resolution photos while running on popular smartphone GPUs from Qualcomm and Arm. For this, the participants were provided with a large-scale dataset consisting of noisy-clean image pairs captured in the wild. The runtime of all models was evaluated on the Snapdragon 8 Elite Gen 5 and Dimensity 9500 chipsets with the Adreno and Mali GPUs, respectively. Top solutions proposed in this challenge are able to perform high-quality image denoising under 100 milliseconds on both platforms while reaching a PSNR score of over 37 dB. A comprehensive description of the models developed in the challenge is provided in this paper.",
    "published": "2026-10-31T14:18:38Z",
    "updated": "2026-10-31T14:18:38Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00974"
  },
  {
    "id": "2611.00963",
    "title": "4K Image Super-Resolution on Mobile NPUs: Mobile AI 2026 Challenge Report",
    "authors": [
      "Andrey Ignatov",
      "Georgy Perevozchikov",
      "Radu Timofte",
      "Fubin Ren",
      "Shihao Wang",
      "Liwen Zhang",
      "Zhe Xu",
      "Zhipei Lei",
      "Minjian Zhang",
      "Kailing Tang",
      "Dingyong Gou",
      "Yanlin Wu",
      "Cong Li",
      "Xiaohui Cui",
      "Kihwan Yoon",
      "Ganzorig Gankhuyag",
      "Heo MyeongCheol",
      "Yonghyun Park",
      "Juho Jung",
      "Sungjei Kim",
      "Phuong-Nam Nguyen-Pham",
      "Nam-Tien Le",
      "Tinh-Anh Nguyen-Nhu",
      "Matin Fazel",
      "Abdelhak Bentaleb",
      "Xinrui Li",
      "Xusheng He",
      "Jianlong Wu",
      "Mohsin Ikram",
      "Dmitry Ignatov",
      "Hao Chen",
      "Long Sun",
      "Jiangxin Dong",
      "Jinshan Pan",
      "Jinhui Tang",
      "Siyue Teng",
      "Yuxuan Jiang",
      "Fan Zhang",
      "David Bull",
      "Zhe Xiao",
      "Jun Xiao",
      "Zhi-Song Liu",
      "Jiayi Pei",
      "Songtao Wu",
      "Hong Shang",
      "Kuanhong Xu"
    ],
    "abstract": "Image super-resolution is widely used on mobile devices for upscaling various types of image data. This creates a need for efficient deep learning-based models that are not only performant but can also be deployed on neural processing units (NPUs) present in the majority of mobile and IoT chipsets. In this Mobile AI challenge, we address this problem and propose the participants to design fast solutions that can upsample images from Full HD to 4K resolution while running on popular mobile NPUs from Qualcomm and MediaTek. For this, the participants were provided with the DIV2K dataset and trained models to do an efficient 3X image upscaling. The competition had two tracks: in the first track, the models had to be fully quantized (INT8), and the runtime of all models was evaluated on the Qualcomm Snapdragon 8 Elite Gen 5 NPU. In the second track, the participants were developing floating-point solutions that were evaluated on the MediaTek Dimensity 9500 NPU. Top solutions proposed in this challenge are able to reconstruct 4K images under 5 milliseconds while reaching a PSNR score of 30 dB. A comprehensive description of the models developed in the challenge is provided in this paper.",
    "published": "2026-10-31T14:05:38Z",
    "updated": "2026-10-31T14:05:38Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00963"
  },
  {
    "id": "2611.00960",
    "title": "Self-Refining Prompt Induction for Streaming Text-to-SQL",
    "authors": [
      "Gaetano Rossiello",
      "Alfio Gliozzo",
      "Nandana Mihindukulasooriya",
      "Erick Lee",
      "Nabila Siregar",
      "Lisa Amini"
    ],
    "abstract": "Text-to-SQL assistants for streaming engines must handle dialect-specific types, windowing rules, and temporal semantics, including constructs poorly handled by generic prompts. We present Self-Refining Prompt Induction (SRPI), an offline method that converts generation failures into reusable dialect instructions while keeping model weights fixed. A Refiner revises the Generator's prompt using reference-conditioned feedback from three LLM judges; a sampled regression guard checks earlier successes, and a separate Compressor reduces prompt length. Inference uses the frozen prompt without retrieval or query repair. We evaluate cross-domain and cross-model transfer on Confluent Cloud Flink SQL using a controlled synthetic workload seeded by 30 expert-written examples, with 335 induction examples and 257 questions from held-out domains. The same induced prompt improves mean judge scores across seven Generators by 7.1-19.2 percentage points, including an increase from 85.3% to 97.5% for the induction model. A separate compression study reduces prompt length by 52.7% with a 0.19-percentage-point score decrease. An assistant using the induced prompt is in early access, with initial user feedback to inform subsequent refinement.",
    "published": "2026-10-31T14:02:40Z",
    "updated": "2026-10-31T14:02:40Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2611.00960"
  },
  {
    "id": "2611.00953",
    "title": "PSF-Informed Reconstruction: An Enhanced 2D Directional Filtered Backprojection Method for Cone-Beam Rotary Computed Laminography",
    "authors": [
      "Chengxiang Wang",
      "Wei Yu",
      "Baodong Liu"
    ],
    "abstract": "Cone-beam rotary computed laminography (CL) presents a viable alternative to cone-beam CT for imaging objects with high aspect ratios. Conventional reconstruction techniques, such as CL-FBP and CL-FDK, often yield suboptimal results charac?terized by pronounced superimposition artifacts, reduced contrast,and blurred edges, primarily due to their reliance on 1D row-wise filtering along detector rows. To address these limitations and improve reconstruction quality, we proposed a novel 2D directional filtered backprojection (DFBP) method based on the point spread function (PSF). First, an exact expression for the projection process is derived by establishing the relationship between a reconstructed pixel and its corresponding projection point on the detector. Second, a revised backprojection process incorporating two weighting factors is introduced to counteract the nonlinearity inherent in conventional backprojection, leading to a simplified PSF formulation. Third, to circumvent the computational burden of 3D image space filtering,an approximate method by linearizing the coordinate relationship in Fourier space under some assumptions is developed that transfers the 3D filtering operation to the 2D projection space. This approach facilitates the derivation of a formally simple yet effective 2D direc?tional filter, which integrates a 2D von Hann window and a 2D sinc window. Experimental results demonstrate that the proposed method produces reconstructions with superior contrast, sharper boundaries,and fewer superimposition artifacts compared to CL-FBP and CL?FDK. Moreover, it enables more accurate recovery of internal structures, such as bubble defects and electronic components.",
    "published": "2026-10-31T13:54:26Z",
    "updated": "2026-10-31T13:54:26Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00953"
  },
  {
    "id": "2611.00945",
    "title": "HieraNTP: Structured Risk Representations for Time-Series Anomaly Detection via Hierarchical Next-Token Prediction",
    "authors": [
      "Yujie Li",
      "Zezhi Shao",
      "Boyu Diao",
      "Zhulin An",
      "Yongjun Xu",
      "Xueqi Cheng",
      "Fei Wang"
    ],
    "abstract": "Time-series anomaly detection commonly converts deviations from learned temporal regularities into anomaly scores. This practice can conflate violations of temporal regularity with task-specific anomaly judgments: the same deviation may be anomalous under one task definition and benign under another. Aggregating heterogeneous deviations into a single score before task-specific adaptation can obscure the evidence needed to distinguish these cases. We introduce HieraNTP, a Hierarchical Next-Token Prediction framework that separates self-supervised predictive modeling from task-specific risk interpretation. HieraNTP pretrains a hierarchical tokenizer and a causal next-token predictor to capture temporal regularities at multiple scales. It then organizes prediction discrepancies into a structured risk representation, preserving complementary evidence across temporal scales in token, local-statistic, and observation spaces. A task-adaptive detector uses anomaly labels to select and combine this evidence for the target task. Across anomaly detection benchmarks, HieraNTP improves VUS-PR by 12.0% on TSB-AD-U and 15.5% on TSB-AD-M relative to the strongest baselines, and achieves the highest composite score on both TAB tracks, with controlled comparisons supporting the value of retaining distinct evidence. Our code is available at https://github.com/blisky-li/HieraNTP.",
    "published": "2026-10-31T13:47:31Z",
    "updated": "2026-10-31T13:47:31Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00945"
  },
  {
    "id": "2611.00944",
    "title": "SNAPPerf: Software-Aware Tabular Foundation Model for Retraining-Free Performance Prediction of Configurable Systems",
    "authors": [
      "Amine Lbath",
      "Massih-Reza Amini",
      "Vadim Okun"
    ],
    "abstract": "Modern software systems expose hundreds of configuration options whose combinations can substantially affect execution time, memory and energy usage. Measuring software performance resulting from a configuration set requires running a realistic workload. Since the configuration space grows exponentially, exhaustive benchmarking is infeasible. Prior work therefore trains models on a small set of measured configurations to predict the performance of the rest. Yet these models are specific to a particular software version, hardware platform, and workload, so changes require new measurements and retraining, and such changes are becoming more frequent with coding agents. We challenge this per-system training assumption with SNAPPERF (Software-aware, No-retraining, Adaptive Prediction), a sample-efficient tabular foundation model specialized for configurable software. SNAPPERF is pretrained once on synthetic data. Each new update only requires a few measured configurations as context to predict the rest without any per-system training or hyperparameter tuning. Across 39,866 configurations from 12 real-world systems, spanning 6 domains and 4 performance metrics, SNAPPERF reduces prediction error by 38% over the prior state of the art at the same measurement budget, and by 25% over the best general-purpose tabular foundation model. It matches the state of the art's accuracy with 54% fewer measurements on average. These results suggest that knowledge about software can be encoded in pretraining data rather than in per-system models, opening a new research direction in software-aware pretraining.",
    "published": "2026-10-31T13:47:08Z",
    "updated": "2026-10-31T13:47:08Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00944"
  },
  {
    "id": "2611.00941",
    "title": "MarkovTS: Pretrained State-Transition Representations for Zero-Shot Time Series Generation",
    "authors": [
      "Yujie Li",
      "Zezhi Shao",
      "Jingbo Zhou",
      "Yongjun Xu",
      "Xueqi Cheng",
      "Fei Wang"
    ],
    "abstract": "Across heterogeneous real-world domains, time-series generation supports simulation, model development, and data augmentation by generating sequences that preserve target-domain statistics and temporal dependencies when real observations are scarce or costly. However, existing methods predominantly address in-domain generation, limiting their reuse in unseen domains. We study reference-conditioned zero-shot time series generation: target domains are unseen during pretraining, generation uses a single target-domain reference sequence, and no model parameters are updated. MarkovTS characterizes sequence evolution through local morphologies and their ordered transitions at multiple temporal scales. Its pretrained encoder quantizes normalized time-series patches into multiscale morphological states with a state codebook, while a transition codebook encodes contextual transitions between adjacent intervals. These transferable state-transition representations condition a pretrained flow-matching model. At generation, the frozen model combines a reference-derived condition with independent Gaussian noise to produce stochastic samples that retain the reference's temporal organization. Across 12 unseen target datasets, MarkovTS outperforms strong baselines in most distributional comparisons and generates diverse, reference-consistent sequences. As downstream augmentation, its samples yield overall gains across forecasting, classification, and anomaly detection benchmarks and diverse model families. Our code is available at https://github.com/blisky-li/MarkovTS.",
    "published": "2026-10-31T13:43:00Z",
    "updated": "2026-10-31T13:43:00Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00941"
  },
  {
    "id": "2611.00937",
    "title": "What Helps Denoising Can Hurt Memory: Rethinking History in Long Video Generation",
    "authors": [
      "Yubin Jing",
      "Ziyang Zhang",
      "Meng Chen",
      "Yuyao Li",
      "Haofan Wang",
      "Yichen Gong"
    ],
    "abstract": "Autoregressive video generators produce long videos block by block, using historical context to maintain temporal consistency. After denoising, a committing pass encodes each clean block into keys and values (KV) that later blocks read, and the same clean block can be encoded into different KV depending on the history it reads. We therefore study historical context not only as a condition for denoising but also as an input to committing. Older historical context that supports denoising can harm subsequent generation when read during committing. At fixed context size and temporal positions, older historical context lowers mean clip-to-clip Subject Consistency. Across 5 generator configurations supporting longer contexts, consistency rises, plateaus, and then declines as committing context expands. Motivated by these findings, we propose Commit Forcing, a training-free rule that organizes committing into a chain. During committing, each block reads only the preceding block's stored KV, so older historical context reaches new entries only through the chain. We apply this rule to 6 pretrained generators. On 60-second VBench, Commit Forcing improves Quality and Total on all 6 generators, by up to 1.27 Quality points and 1.10 Total points. Long-range consistency gains extend to 240-second videos. In a blinded comparison on 120-second LongLive videos, Commit Forcing achieves win rates of 83.5% for subject and scene consistency and 82.9% for overall preference against the base generator, excluding ties.",
    "published": "2026-10-31T13:39:46Z",
    "updated": "2026-10-31T13:39:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00937"
  },
  {
    "id": "2611.00935",
    "title": "Labadain-MedQA: A Tetun Medical QA Dataset for Fine-Tuning and Evaluating Large Language Models",
    "authors": [
      "Gabriel de Jesus",
      "Sérgio Nunes"
    ],
    "abstract": "Advances in large language models (LLMs) have created opportunities for cross-lingual transfer of medical knowledge from high-resource to low-resource languages to support access to healthcare information. However, medical question-answering (QA) datasets for fine-tuning and evaluating LLMs remain scarce for Tetun. To address this gap, we translated MedAlpaca's Medical Flashcards and WikiDoc Patient Information collections into Tetun using Gemini 2.5 Flash, producing 39,077 medical QA pairs. Translation quality was assessed on 50 randomly sampled QA pairs (100 documents) using automatic metrics against human reference translations and evaluations by two native Tetun-speaking healthcare professionals, focusing on medical accuracy and Tetun fluency. Human translations achieved higher mean ratings than LLM-generated translations for both criteria (4.43/5 vs. 4.02/5), with statistically significant differences (Wilcoxon signed-rank test, p < 0.001). To assess downstream utility, we fine-tuned Gemma and Llama variants on the translated MedAlpaca dataset using parameter-efficient fine-tuning (PEFT) and evaluated them on 325 Tetun-translated United States Medical Licensing Examination multiple-choice questions. Gemma 4 12B fine-tuned using QLoRA achieved relative improvements in mean accuracy of 10.79% with 4-bit NormalFloat (NF4) inference and 10.42% after merging the LoRA adapters into the BF16 base model, compared with the corresponding base models. These results highlight the viability of automatic dataset translation for Tetun medical QA and the effectiveness of PEFT in enhancing model performance. The datasets, models, and evaluation resources are accessible at https://github.com/labadain/labadain-medqa to support reproducible research on Tetun medical QA and facilitate machine translation, cross lingual, and multilingual research.",
    "published": "2026-10-31T13:36:05Z",
    "updated": "2026-10-31T13:36:05Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00935"
  },
  {
    "id": "2611.00926",
    "title": "UI-UG 2: Advancing Mobile UI Understanding and Generation with Fine-Grained Supervision and Reinforcement Learning",
    "authors": [
      "Hao Yang",
      "Shuoyang Liu",
      "Xiaoyu Lin",
      "Zhou Fang",
      "Maji Huang",
      "Zhaosong Huang",
      "Ruichao Mao",
      "Teng Guo",
      "Hai Rao"
    ],
    "abstract": "Mobile UI understanding and generation require both fine-grained component perception and reliable structured synthesis. Inspired by the unified direction introduced by UI-UG, we present UI-UG 2, a compact 4B-parameter multimodal large language model (MLLM) that advances mobile UI Understanding and Generation with broader task coverage, a front-end-aligned taxonomy, and online render-aware reinforcement learning. UI-UG 2 constructs a multi-source understanding corpus from RICO, VINS, Android in the Wild, and Android Control, annotated with an 80-category two-level UI taxonomy aligned with front-end component semantics, and pairs it with over 5,000 requirement-screenshot-JSON tuples for progressive structured UI generation through a domain-specific language (DSL). For understanding, UI-UG 2 introduces decomposed rewards for category prediction, OCR fidelity, color recognition, dense grounding, and GUI grounding. Unlike the offline Direct Preference Optimization (DPO)-style generation optimization in UI-UG, UI-UG 2 optimizes generation through end-to-end online Group Relative Policy Optimization (GRPO): sampled DSL outputs are rendered with a Playwright-based server-side pipeline and evaluated using LLM-as-a-Judge and contrastive preference ranking. Experiments show that UI-UG 2 achieves the strongest referring and dense-grounding results among the evaluated models on our 80-category benchmark, and achieves the best composite generation score among compared models at a compact scale (4B). More importantly, we observe a consistent understanding-to-generation transfer: adding fine-grained UI perception supervision improves generation quality under a fixed training budget, suggesting that component-level semantics provide a shared representational foundation for both tasks.",
    "published": "2026-10-31T13:24:05Z",
    "updated": "2026-10-31T13:24:05Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.00926"
  },
  {
    "id": "2611.00923",
    "title": "Illusion: Safeguarding Topology Confidentiality in LLM Multi-Agent Systems via Behavior-Preserving Obfuscation",
    "authors": [
      "Yiu-Fai Cheung",
      "Hongzhi Guo",
      "Miao Pan",
      "Irwin King",
      "Hao Wang"
    ],
    "abstract": "The communication topology of Large Language Model Multi-Agent Systems (LLM-MASs) governs how information propagates among agents and encodes critical domain knowledge and expert workflow design. It is valuable intellectual property and plays a decisive role in system utility and safety, yet remains vulnerable to inference attacks that stealthily reconstruct it from agent outputs. Existing defenses detect or mitigate such attacks but do not proactively conceal the topology itself. We propose \\textit{Illusion}, a proactive topology obfuscation defense for LLM-MAS. \\textit{Illusion} injects fake edges and fake messages to present attackers with a deceptive topology, while selecting low-impact candidates that preserve output-distribution equivalence and task-accuracy non-inferiority. The resulting fake edges are designed to be indistinguishable from genuine messages under black-box observation. Extensive experiments show that \\textit{Illusion} reduces edge-level F1 from over 0.87 to 0.62 and graph similarity from over 0.94 to 0.71. It also largely preserves output distributions and task performance, and its fake edges resist both similarity-based and LLM-judge filtering, even under adaptive pruning.",
    "published": "2026-10-31T13:23:42Z",
    "updated": "2026-10-31T13:23:42Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00923"
  },
  {
    "id": "2611.00919",
    "title": "TreePIN$^{2}$: Tree-Prior Initialized Neural Networks",
    "authors": [
      "Yanrong Wang",
      "Qiming Sun",
      "Haoyang Chen"
    ],
    "abstract": "Fitted decision trees provide predictive knowledge for neural network initialization. We present Tree-Prior Initialized Neural Networks (TreePIN$^{2}$), a method that translates split rules, decision paths and leaf predictions into initial network weights and biases for classification and regression. Sigmoid units encode split responses, hidden units combine them along decision paths, and leaf predictions initialize the output layer. We calibrate split softness using local training margins, sample support and impurity reduction, relating the initial responses to the data at each node. All weights and biases remain trainable, allowing gradient-based optimization to refine the transferred decisions and their combinations. Across six classification and six regression tasks with twenty paired seeds, TreePIN$^{2}$ improves mean initial and early validation performance over initialization baselines on most tasks. After fifty epochs, it achieves the best or tied-best mean validation performance among the six compared methods on ten tasks. Paired ablations show how split calibration and leaf-informed output initialization contribute to the starting predictor and its subsequent learning.",
    "published": "2026-10-31T13:22:01Z",
    "updated": "2026-10-31T13:22:01Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00919"
  },
  {
    "id": "2610.41939",
    "title": "Observable-Specific Validity Tests for Scientific AI: Controlled Approximations and Intervention Response",
    "authors": [
      "Xiaoshn Nee",
      "Haobo Zhong",
      "Xiaomin Ni"
    ],
    "abstract": "An approximation can reproduce an energy while missing its response, or satisfy an error tolerance without being certified by a given bound. We formulate observable-specific validity records for scientific artificial intelligence (AI) that link a reduction to its reference model, error measure, tolerance, parameter domain, and transformations or interventions. Explicit displacement and velocity certificates for a singularly perturbed oscillator recover distinct convergence orders and provide sufficient validity guarantees. Exact Hubbard dimer relations resolve the different coupling domains accepted by energy and response criteria. Across 16 repeated neural fits, imposing dimensional homogeneity reduces energy scale transfer error from 52.3% to 0.0768% and raises the median fraction jointly satisfying gap and response tolerances from zero to 100%. Paired transformations verify the protected scaling relation, while a coupling crossover identifies the additional information needed for response transfer. A causal model recovers a positive intervention response beneath a strong negative observational association. For two mechanisms observed with Gaussian noise whose responses first differ at order $x^k$, we derive an exact fixed control query requirement scaling as $x^{-2k}$ and verify its full success curve numerically. Together with a 256-task evaluation interface, these results provide independently checkable tests of controlled approximation, physical transfer, and mechanism discrimination in scientific AI.",
    "published": "2026-10-30T15:57:51Z",
    "updated": "2026-10-30T15:57:51Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2610.41939"
  },
  {
    "id": "2610.41924",
    "title": "IGDA-ICMH: an Importance Guided Feature and Network Dual Adaptation Framework towards Image Compression for Machine and Human Vision",
    "authors": [
      "Yanbo Gao",
      "Xinyu Zhao",
      "Shuai Li",
      "Xun Cai",
      "Mao Ye",
      "Li Li"
    ],
    "abstract": "With the surge of machine vision applications, image compression for both machine and human vision (ICMH) has become an important research area. Existing studies mainly focus on task-specific adaptation or multi-task joint optimization, yet they often overlook the unequal contributions of different features and network layers to downstream machine vision tasks. To address this issue, we first quantitatively investigate the impact of different feature and network layers on machine vision performance, providing a principled understanding of their importance. Based on this analysis, an Importance Guided feature and network Dual Adaptation (IGDA) framework is developed for ICMH. It adopts implicit neural representation as the basic architecture and designs an efficient adaptation structure with both feature and network weight adaptation. An Importance-Guided Network Adaptation (IGNA) module is developed with a low-rank adaptation strategy to selectively adjust key network layers according to their importance in different tasks. An Importance-Guided Feature Adaptation (IGFA) module is developed with a low-rank and Kronecker product-based transform to explore the non-local property of the features in order to reduce the number of adaptation parameters. Extensive experiments on representative machine vision tasks, including image classification and object detection, demonstrate that our IGDA-ICMH framework achieves significantly better performance than the existing implicit neural representation-based methods for ICMH.",
    "published": "2026-10-30T15:54:03Z",
    "updated": "2026-10-30T15:54:03Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.41924"
  },
  {
    "id": "2610.41909",
    "title": "Structure-Aware Skill Retrieval and Arbitration for Optimization Modeling",
    "authors": [
      "Anran Liu",
      "Benzhao Hou",
      "Zongsheng Cao",
      "Daichao Wang",
      "Lang Chen",
      "Shitong Chen"
    ],
    "abstract": "Large Language Models (LLMs) can turn natural-language optimization tasks into solver-checked answers, but current agents remain brittle under narrative rewrites and often store reusable experience at the instance level. We introduce \\textsc{ArchOR}, an archetype-centric skill agent that builds on \\textsc{OptSkills} by adding two retrieval-focused modules. \\emph{Centroid-Aware Representation Learning} (CARL) refines the ordering of cached skill representations through a low-rank prototype residual. \\emph{Signature-Guided Retrieval} (S\\textsuperscript{3}R) attaches open-dimensional structural signatures to skills, prioritizes candidates by weighted Jaccard overlap, and bounds semantic re-ranking to a top-$K$ set. A baseline-preserving arbitration rule determines when the structural route should replace the original selector. With the same DeepSeek-V4.1-Flash backbone and released skill library, \\textsc{ArchOR} reaches 65.00\\% Micro-Avg.\\ Pass@1 across five benchmarks, improving over \\textsc{OptSkills} by 1.64~pp Micro-Avg.\\ and 2.68~pp Macro-Avg.",
    "published": "2026-10-30T15:45:17Z",
    "updated": "2026-10-30T15:45:17Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41909"
  },
  {
    "id": "2611.00181",
    "title": "A Rate-Distortion Optimized Skip Mode Coding Framework for Neural Video Compression in AVS",
    "authors": [
      "Yuntian Jiang",
      "Shuai Li",
      "Yanbo Gao",
      "Jinglin Zhang",
      "Hui Yuan",
      "Mao Ye"
    ],
    "abstract": "With the development of deep learning, neural video compression (NVC) is gaining increasing interest and is currently under standardization in the AVS (Audio Video Coding Standard). Skip mode coding, a crucial component in the traditional video compression, is also adopted in AVS NVC. Although the skip mode takes a large portion in encoding the motion and residual features in the NVC, there is a lack of investigation on the rate distortion performance of the skip mode coding. In this paper, we first thoroughly investigate the rate and distortion distribution in the skip mode coding within a spatial frame and under different temporal reference qualities, and demonstrate that distortion distribution changes spatially and temporally. Therefore, a rate-distortion optimized skip mode coding (RDOSkip) framework is proposed, where the rate and distortion in the skip mode coding is formulated based on a statistical distribution predicted by the hyperprior and the Bayes' theorem. An adaptive skip mode decision method based on spatial-temporal joint RD optimization is developed for the skip mode coding among channels and frames in a group of pictures. It addresses the limitation of the rigid fixed-distortion distribution assumption in skip mode coding within the existing methods that rely on a fixed skip threshold. The temporal skip mode decision method has been adopted in the ongoing AVS NVC standard and incorporated into the reference software. The proposed RDOSkip can be directly used in the inference without any training and with negligible complexity increase. Experimental results further demonstrate that the proposed RDOSkip can improve the performance by 0.90% and 1.29% on AVS and HEVC datasets, respectively, in terms of BD-rate saving.",
    "published": "2026-10-30T15:45:10Z",
    "updated": "2026-10-30T15:45:10Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00181"
  },
  {
    "id": "2610.41901",
    "title": "ReX-GG: a LLM Ensemble Pipeline for Relation-extraction and Graph Generation",
    "authors": [
      "Giacomo Magnifico",
      "Eduard Barbu"
    ],
    "abstract": "Current LLM ensemble frameworks focus on multi-step setups with additional modules for answer ranking, often opting for token and span analysis rather than structured outputs, leading to heavyweight architectures with potential fail states along the pipeline. Faster, lighter solutions are more vulnerable to hallucination propagation and can lack output control in more complex pipelines. This paper proposes a customisable, lightweight ensemble workflow of coordinated Large Language Models that leverages JSON-structured outputs and anonymous peer-review ranking to mitigate hallucinatory outputs and single-model failure points. The pipeline is demonstrated on a relation extraction task applied to popular science articles in English, targeting four ontologically-grounded relation types (strong causation, weak causation, contrastive, and compositional), with semantic node canonicalisation and interactive, colour-coded HTML causal graphs as the final output. Performance is evaluated through an anonymous user study, achieving an average perceived accuracy of 0.778 against a human-annotated gold standard. The modular architecture supports flexible deployment across both API-based and in-house LLM setups, and the full framework is released under an open license to foster reproducibility and collaborative research.",
    "published": "2026-10-30T15:39:02Z",
    "updated": "2026-10-30T15:39:02Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41901"
  },
  {
    "id": "2610.41900",
    "title": "Using Machine Learning to Measure Self-Efficacy Belief Through Learners' Interaction Traces in Technology-Enhanced Learning",
    "authors": [
      "Maeva Somny",
      "Linda Chouati",
      "Marie Lefevre"
    ],
    "abstract": "Self-efficacy beliefs play a critical role in learners' performance, academic choices, and, more broadly, in their future career trajectories. As Technology-Enhanced Learning (TEL) environments have demonstrated strong potential for supporting both performance and motivation, investigating self-efficacy within such environments is of particular interest, especially for implementing remedial practices as early as possible to support learners' self-efficacy beliefs. Our research aims to develop a system capable of detecting low self-efficacy based on learners' interaction traces while they solve exercises in a TEL system. In this paper, we present initial results and future perspectives on a detection approach based on data mining and machine learning techniques to identify features indicative of low self-efficacy beliefs. Because the detection of learners' self-efficacy beliefs through their use of TEL systems remains largely unexplored, this work is exploratory in nature. To this end, we conducted an experiment across two universities to collect interaction traces and self-reported measures of self-efficacy. We then developed a machine learning pipeline comprising multiple classification models, enabling us to highlight the importance of closely monitoring of learners' self-efficacy beliefs for improved prediction performance, given their highly dynamic nature during learning.",
    "published": "2026-10-30T15:38:30Z",
    "updated": "2026-10-30T15:38:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41900"
  },
  {
    "id": "2610.41899",
    "title": "General-purpose foundation models surpass specialized ones on chemical property prediction tasks",
    "authors": [
      "Stepan N. Ostarkov",
      "Gregorii A. Semakin",
      "Ivan A. Bespalov",
      "Michael G. Medvedev"
    ],
    "abstract": "Foundation models (FMs) learn reusable representations from large collections of unlabeled data. In chemistry the corresponding data mainly consists of molecular structures, which are abundant, whereas experimental measurements are scarce. Chemical FMs such as ChemBERTa and MoLFormer were therefore trained on diverse molecular structures to enable fine-tuning on small experimental datasets (less than 100 datapoints in most realistic scenarios) and subsequent property prediction. At the same time, general-purpose FMs such as GPT-6 Astra and Claude Opus 5.5 were trained on virtually all publicly available data, including knowledge of the humankind on molecular properties and laws governing them. Here we compare accuracies of chemical and general-purpose FMs on tasks from various areas of chemistry. Strikingly, general-purpose GPT-6 Astra outperforms the currently eligible chemical FMs on five physicochemical and quantum-chemical regression tasks when only 60 experimental datapoints are available. Only when provided 10x datapoints do the best chemical FMs reach performance of GPT-6 Astra: on 1,000 and 10,000 points they show performance on par with Astra on 60 and 1,000 points, respectively. Thus, counterintuitively, frontier general-purpose FMs are better suited for guiding chemical research in data-scarce areas than specialized chemical FMs, suggesting that learning relevant primitives (e.g. chemical structures) does not substitute training on relevant humankind knowledge.",
    "published": "2026-10-30T15:37:40Z",
    "updated": "2026-10-30T15:37:40Z",
    "categories": [
      "physics.chem-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41899"
  },
  {
    "id": "2610.41893",
    "title": "Automated Keyword Generation Using LLMs in a High-Volume Data Virtualization Service",
    "authors": [
      "Saiful Khan",
      "Yiwen Xing",
      "Joyraj Chakraborty",
      "Afrah Farea",
      "Philip Beaucamp",
      "Samuel Jackson",
      "Min Chen"
    ],
    "abstract": "In modern data infrastructure, a data virtualization service (DVS) allows users to create many versions of source datasets for different processing tasks. For example, a multivariate or multi-modality dataset can be used for different machine learning tasks (e.g., classification, detection, segmentation, forecasting, and so on). Data selection, participation, integration, and preprocessing in different tasks result in many virtual datasets [Khan et al., SSC 2026]. Meanwhile, different users need to discover existing virtual datasets frequently and easily to avoid duplicate efforts. To enable an effective search engine in a DVS, it is desirable to automatically generate keywords for each virtual dataset. In this work, we present a solution for generating keywords for virtual datasets using large language models (LLMs). We propose five strategies for selecting different collections of text data for processing by the LLMs. We applied the five strategies to virtual datasets created in five application case studies with different source datasets. We conducted experiments with three LLM generators and two embedding techniques. The experiments show that the performances of the five strategies depend on the quality of the text descriptions. The results help us adopt a multi-strategy implementation of a new keyword generation service (KGS) as part of an extended DVS. The work demonstrates that the capability of automated keyword generation is indispensable for a high-volume DVS that is dataset-rich and frequently accessed.",
    "published": "2026-10-30T15:34:59Z",
    "updated": "2026-10-30T15:34:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41893"
  },
  {
    "id": "2610.41879",
    "title": "Fuzzy selective state model for forecasting the dynamics of consumer preferences",
    "authors": [
      "P. A. Golovinski",
      "A. A. Drobyshev",
      "A. O. Shatalova"
    ],
    "abstract": "We consider forecasting the dynamics of consumer preferences of retail chain customers. A customer's preference is described by a triangular fuzzy number. The evolution of the preference over time is governed by a Mamba-type selective state space model whose hidden state is a triangular number, with computations carried out in M.G.~Matveev's two-component algebra of fuzzy numbers. The recurrence parameters are computed from crisp features, while the fuzzy part of the model remains linear with non-negative coefficients. We show that the state then always remains a proper triangular number and is a convex combination of past observations, so that the fuzziness of the forecast does not accumulate over time and the algebraic computations coincide with Zadeh's extension principle. On a synthetic example with competitor promotions and customer switching, a lightweight 107-parameter model reaches a mean absolute error of the forecast centre of 0.154 versus 0.163 for the constant-inertia evolution operator and 0.179 for the naive forecast, matches a crisp model of the same architecture and additionally provides a linguistically interpretable estimate of forecast vagueness. We also show how the linguistic readout of the forecast can be used to detect a permanent switch of a customer to a competitor.",
    "published": "2026-10-30T15:27:14Z",
    "updated": "2026-10-30T15:27:14Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41879"
  },
  {
    "id": "2610.41877",
    "title": "Movens-Zero: Scaling Humanoid Motion Foundation Models with Large-Scale Human Videos",
    "authors": [
      "Wendong Bu",
      "Tinghong Ye",
      "Qizhou Wang",
      "Jiacheng Li",
      "Zhiqi Ge",
      "Yuze Lin",
      "Zhongqi Yue",
      "Yi Su",
      "Jingyu Wang",
      "Kai Shen",
      "Jingdong Liu",
      "Chengyuan Deng",
      "Xiaoxuan Chen",
      "Xin Tan",
      "Jiaming Ji",
      "Wenqiao Zhang",
      "Chenghong Jiang",
      "Tuoyu Li",
      "Siliang Tang",
      "Jun Xiao",
      "Tat-Seng Chua",
      "Yueting Zhuang",
      "Xingxing Wang",
      "Juncheng Li"
    ],
    "abstract": "Scaling humanoid motion foundation models is constrained by the scarcity of diverse, robot-executable data and by the difficulty of jointly learning from heterogeneous multimodal inputs while supporting real-time closed-loop control. We present Movens-5M, constructed from raw Internet videos through clip generation, quality filtering, semantic annotation, motion recovery, and physical refinement with humanoid retargeting and execution verification. It contains 15 million human-motion sequences and 5 million physically executable humanoid-motion sequences spanning over 10,000 hours, aligned with text, RGB video, speech, and music. Building on this data, we introduce Movens-Zero, a scalable understanding-generation-execution architecture that supports joint learning across modalities and real-time closed-loop execution. Task-mixed flow-matching training jointly optimizes a single action expert across seven generation tasks, enabling direct motion generation from text, speech, music, and video. Multimodal Real-Time Chunking connects overlapping chunks under continuously updated instructions and robot states for continuous closed-loop execution. We further introduce Movens-Intent, a four-track benchmark with 8,192 expert-verified condition-motion pairs across text, speech, music, and video. Experiments show consistent gains across all four modalities when scaling execution-verified data from 1% to 100% and action-expert capacity from 64M to 911M parameters, while demonstrating that data quality and cross-modal supervision improve generation and execution.",
    "published": "2026-10-30T15:25:49Z",
    "updated": "2026-10-30T15:25:49Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.41877"
  },
  {
    "id": "2611.00180",
    "title": "Learning to Live: A Step Toward Lifelong Embodied Intelligence",
    "authors": [
      "Lirong Che",
      "Peidong Wang",
      "Yimeng Su",
      "Jiong Wang",
      "Yang Chen",
      "Wenbo Fu",
      "Zhenyu Huang",
      "Tiancheng Xu",
      "Yuzhe Yang",
      "Dongli Xie",
      "Xu Cao",
      "Chuang Wang",
      "Daqi Liu",
      "Jian Su"
    ],
    "abstract": "Embodied agents are usually organized around individual tasks, yet the physical world keeps changing between tasks and during execution. We introduce LIFE (Lifelong Intelligence from Experience), a framework in which a robot observes continuously, remembers selectively, and turns experience into new capabilities. RoboBeats, a family of lightweight streaming gates, tracks conditions set by the agent and discovers new events, deciding when an observation warrants a response or a memory write. Selected observations enter Plastic Memory, a flat store of images and structured records that keeps the source evidence, so new fields and indexes can be added when later questions need them. When existing tools fall short, Explore-Distill-Mount (EDM) turns solutions found during problem solving into validated, reusable tools and skills. Under matched protocols, RoboBeats substantially improves condition tracking over its base models and, at the same writing budget, retains more useful evidence for memory question answering than uniform sampling. A case study of limited scale, replaying 24 hours of continuous video recorded by a real robot, illustrates how the integrated system builds memory from a day of experience and uses it to answer everyday questions. LIFE takes a step toward robots that become more familiar with their surroundings and more capable through experience: learning not only to complete tasks, but to live in the world.",
    "published": "2026-10-30T15:23:52Z",
    "updated": "2026-10-30T15:23:52Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00180"
  },
  {
    "id": "2610.41866",
    "title": "AI evaluators favor job applications written by certain AI models, independent of candidate quality",
    "authors": [
      "Nicolò Pagan",
      "Michael Andreas Ebling",
      "Stefania Ionescu",
      "Anikó Hannák"
    ],
    "abstract": "Job applicants increasingly use large language models (LLMs) to write cover letters, while employers deploy LLMs to screen them. In this all-AI setting, we ask whether the \\emph{choice of model} affects hiring outcomes independently of candidate qualifications. We introduce a multi-model auditing framework pairing eleven LLM writer agents with nine API-hosted evaluator agents across ten job descriptions and fifty candidates per job. Four findings emerge. First, we identify a generative preference hierarchy: a consistent global ranking of writer models by evaluator acceptance, in which locally hosted models are systematically disadvantaged regardless of their license, compounded by self-preference bias where evaluators favour their own outputs. Second, evaluator models differ substantially in how much bias they introduce based on applicants' tool choice, offering actionable guidance for fairer screening design. Third, this hierarchy has measurable competitive consequences: in the most adverse pairing, approximately two (1.8) out of twenty-five qualified candidates are filtered out purely due to model mismatch. Fourth, a common mechanism explains the patterns above: writer preference and self-preference trace to a combination of how much each writer leans on specific stylistic cues and how strongly evaluators, often unanimously, reward or penalise those same cues. A further check finds little evidence that an unmeasured \"writer fingerprint\" remains once these same features are accounted for. We discuss implications for algorithmic fairness in employment, regulation of AI-assisted screening, and the design of auditing frameworks that can be reapplied as the model landscape evolves.",
    "published": "2026-10-30T15:18:29Z",
    "updated": "2026-10-30T15:18:29Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.41866"
  },
  {
    "id": "2610.40333",
    "title": "RFW-A: Agentic Procedural Generation of 400K Articulated Assets over 500 Categories",
    "authors": [
      "Yuanbo Lyu",
      "Changjian Pan",
      "Saining Zhang",
      "Yi Yang",
      "Peishuo Li",
      "Zhiheng Li",
      "Jialu Liu",
      "Junhao Chen",
      "Jiawei Weng",
      "Yupeng Gao",
      "Weiqing Xiao",
      "Wenyi Li",
      "Jiarui Guo",
      "Rui Zhang",
      "Jingrun Du",
      "Weiyi Lin",
      "Zenan Meng",
      "Hu Wei",
      "Lin Qu",
      "Zongzheng Zhang",
      "Hao Zhao",
      "Chaojian Li"
    ],
    "abstract": "High-quality articulated assets are essential for embodied perception, simulation, and manipulation, yet constructing them at scale remains difficult. Manual annotation and procedural modeling require substantial human effort. Recent agentic systems automate asset construction through program synthesis, but repeat costly reasoning and refinement for every new asset. Our key observation is that assets within a category can share construction logic despite variations in structure and appearance. Agentic synthesis and procedural generation are therefore complementary: agents can construct reusable programs, while procedural execution reuses the resulting logic across many samples. We therefore present RFW-A, which combines the two in a new articulated-asset generation paradigm. Starting from existing articulated programs, RFW-A organizes reusable components and their dependencies into category-level generators. Agents test and refine these generators across sampled configurations and motion states. Once constructed and validated, the generators produce diverse assets through procedural execution with no further model calls or token charges. The estimated API cost of generator authoring averages $10.62, amortizing to $0.05 per asset over 200 assets, versus $1.24 for the sampled per-asset agentic synthesis baseline. Using RFW-A, we built RFW-A-400K, containing over 400K sim-ready articulated assets across more than 500 categories. Experiments show high structural and kinematic validity and stable execution across physics simulators. Beyond asset validity, training with RFW-A-400K improves part-level articulation estimation on seen and unseen categories, while policies trained in simulation with retrieved and program-edited assets transfer zero-shot to real articulated objects.",
    "published": "2026-10-29T15:58:15Z",
    "updated": "2026-10-29T15:58:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40333"
  },
  {
    "id": "2610.40330",
    "title": "Multistep and Multivariate Time Series Explainability with GradientSHAP: A Wind Power Case Study",
    "authors": [
      "Robbie Southam",
      "Zhong Fan",
      "Ke Li"
    ],
    "abstract": "As the effects of climate change become increasingly apparent, the demand for renewable energy sources such as wind power continues to grow. However, renewables' variable and intermittent nature presents significant challenges in their integration into energy grids. Artificial intelligence (AI) has emerged as a powerful tool to address these issues. Still, its adoption in the energy sector has been hindered by the opacity of many AI models, which often function as black boxes. This paper introduces a carefully adapted GradientSHAP approach to provide interpretability for multivariate, multistep wind power forecasting -- a largely underexplored area. This capability is critical for day-ahead grid management and, to the best of our knowledge, this is the first study to apply GradientSHAP in the context of wind power forecasting. To address the inherent dimensionality, we developed novel visualizations that deliver both local and global explanations, uncovering intricate relationships between environmental factors, site-specific conditions, and temporal dynamics. While GradientSHAP is not an out-of-the-box solution, our findings demonstrate that, with thoughtful handling of SHAP values and domain expertise, it can offer valuable insights into model behaviour, supporting more informed and trustworthy decision-making. Nevertheless, its complexity poses challenges for practical implementation. Future research should focus on streamlining these interpretability methods to make them more actionable for routine deployment in critical energy applications.",
    "published": "2026-10-29T15:57:13Z",
    "updated": "2026-10-29T15:57:13Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40330"
  },
  {
    "id": "2610.40036",
    "title": "Hybrid AI Patterns: Thirteen Ways to Couple Language Models with Rules, and How to Choose Among Them",
    "authors": [
      "Siegfried Handschuh",
      "Götz-Henrik Wiegand",
      "Lorena Raichle"
    ],
    "abstract": "Language models handle text well, and rule engines give conclusions with proofs. Systems that combine the two are usually described by example, and the same coupling turns up under different names in agent frameworks, guardrail toolkits and neuro-symbolic research. This document defines thirteen patterns for coupling a language model with an executable rule language, in the catalogue form introduced for object-oriented design: intent, motivation, applicability, participants, collaborations, consequences, implementation, known uses and related patterns. Four patterns concern what crosses the boundary between model and rules, five who controls whom, three how the model takes part in the reasoning, and one how knowledge is kept over time. Five invariants hold for every combination, and five failure patterns name the couplings that break them. We relate the catalogue to published pattern catalogues and taxonomies of hybrid and neuro-symbolic systems and show where they overlap with it. A decision guide leads from a problem to a pattern. It rests on our measurements, including the cases in which a model alone did as well as the hybrid or better, and it reports what each design cost.",
    "published": "2026-10-29T13:37:28Z",
    "updated": "2026-10-29T13:37:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.40036"
  },
  {
    "id": "2610.40030",
    "title": "Cheap Retrieval and Observation Credit Assignment from One Quantity: The Value of Information",
    "authors": [
      "Daniel Strauss",
      "Nikolaos Sotirakis",
      "Zhenshan Bing",
      "Alois Knoll"
    ],
    "abstract": "Memory in reinforcement learning raises two problems. Attention finds the relevant item by scoring the whole store, which is costly for robots under latency and energy limits. When a retrieved memory pays off, credit for acquiring it must cross the whole sequence. We argue that both are governed by one quantity, the value of information, and propose to estimate it from archived rollouts with a learned world model. We obtain that, when read at the observation, it yields a provable lower bound on the optimal value of the acquiring action, which floors its TD target and attributes this floor to the observation that earned it. Read at the decision, it defines the optimal retrieval set. A pilot retrieval system, to be trained and improved with this signal, solves a memory task with reduced context.",
    "published": "2026-10-29T13:36:06Z",
    "updated": "2026-10-29T13:36:06Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40030"
  },
  {
    "id": "2610.40029",
    "title": "Segment Anything Model Based Context Guided Mamba Unet for Medical Image Segmentation",
    "authors": [
      "Chenchen Wang"
    ],
    "abstract": "Medical image segmentation is crucial for clinical diagnosis and treatment planning, requiring both global contextual understanding and fine-grained structural precision. While the Segment Anything Model (SAM) demonstrates strong generalization capabilities, its direct application to medical images often lacks domain-specific adaptability. Meanwhile, State Space Models (SSMs)-based methods, such as Mamba, efficiently capture long-range dependencies but may struggle with preserving fine anatomical details. To address these challenges, we propose a segment anything model based context guided mamba unet, SAMBA-UNet, a novel framework that integrates SAM's context knowledge with Mamba's hierarchical feature learning to enhance both global representation and local detail refinement. Specifically, we introduce the Hierarchical Context Enhancement Module (HCEM), an attention-based fusion module that deeply incorporates the multi-level features of SAM and Mamba to improve detail perception and segmentation precision. Additionally, we employ LoRA and Adapter-based fine-tuning to adapt SAM to medical imaging tasks, further enhancing its domain-specific segmentation capability and robustness. We conducted a comprehensive study on several medical segmentation datasets, including Synapse, ISIC17, and ISIC18, evaluating our method across multiple metrics. Experimental results demonstrate that SAMBA-UNet achieves state-of-the-art performance, effectively balancing generalization, segmentation accuracy, and computational efficiency. Our code will be released upon acceptance.",
    "published": "2026-10-29T13:36:01Z",
    "updated": "2026-11-01T07:22:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40029"
  },
  {
    "id": "2610.40023",
    "title": "HEMO: Harness Self-Evolution for Multi-Objective Combinatorial Optimization",
    "authors": [
      "Jianghan Zhu",
      "Cong Zhang",
      "Ni Zhang",
      "Yifan Yang",
      "Yew Soon Ong",
      "Zhiguang Cao"
    ],
    "abstract": "Automatic operator design (AOD) has increasingly adopted large language models (LLMs) to generate problem-specific search and variation operators for multi-objective combinatorial optimization (MOCO). Yet most methods evolve the operators while leaving the process that discovers them fixed. This limits adaptation as new Pareto trade-offs and operator interactions change where and how the search should proceed. We introduce HEMO, which makes the AOD harness itself a self-evolving optimization target. HEMO maintains a persistent harness state and updates one module at a time, revising the logic that determines which experience to retrieve, which operators to improve, which parents to select, and how to formulate the orchestration of search steps. Downstream solution quality and runtime guide these updates, while a discounted UCB scheduler directs adaptation toward promising modules as their utility changes. A persistent memory filesystem preserves candidate outcomes and diagnostic feedback across harness states, enabling successive states to build on accumulated optimization experience. Experiments across eight MOCO tasks and two structurally distinct evolutionary backbones demonstrate strong performance against conventional evolutionary, neural, and LLM-based AOD baselines, together with effective transfer to related tasks. HEMO extends automatic operator design beyond evolving individual operators to improving the search process that discovers them.",
    "published": "2026-10-29T13:32:00Z",
    "updated": "2026-10-29T13:32:00Z",
    "categories": [
      "cs.NE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.40023"
  },
  {
    "id": "2610.40018",
    "title": "DINOv2 for PET: A Pre-Training Domain Benchmark Across Classification, Segmentation, and Prognosis",
    "authors": [
      "Roxanne De Maeyer",
      "Yannick Brackenier",
      "Vicky De Ridder",
      "Simon DeKeyser",
      "Maarten Larmuseau",
      "Jef Vandemeulebroucke"
    ],
    "abstract": "DINO (self-DIstillation with NO labels) has become a stan- dard for self-supervised pre-training, producing features that generalise across datasets and downstream tasks. In medical imaging it has been adopted mainly for radiology (X-ray, CT and MRI), where even natural- image DINO features transfer well. In the literature, these features have been reported to transfer worse to functional imaging such as PET. Yet PET-specific DINO models have barely been introduced, and even less validated across multiple tasks and datasets. We present PET-DINOv2-2D, the first DINOv2 model pre-trained on 2D PET, and benchmark it against open-source encoders: the origi- nal DINOv2 (pre-trained on the LVD-142M natural-image dataset) and OmniRad (pre-trained on CT, MRI and ultrasound). Using the same lightweight heads for every backbone, and despite far less pre-training data, PET-DINOv2-2D matches or outperforms both on three down- stream PET tasks: normal/abnormal classification, lesion segmentation and recurrence-free survival prognosis. Its advantage is largest when few labels are available, suggesting that PET pre-training gives more transferable, label-efficient features. Code is made available at https://github.com/nuclivision/pet-dinov2-2d/.",
    "published": "2026-10-29T13:30:24Z",
    "updated": "2026-10-29T13:30:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40018"
  },
  {
    "id": "2610.40007",
    "title": "Greenscapes: Optimized Vegetation Configurations in Cities",
    "authors": [
      "Patryk Bartkowiak",
      "Marcin Marlewski",
      "Paweł Wójcik",
      "Jae Joong Lee",
      "Dominik L. Michels",
      "Bedrich Benes",
      "Sören Pirk",
      "Wojciech Pałubicki"
    ],
    "abstract": "Vegetation plays a central role in cities, serving functional roles such as balancing shade and sky exposure, shaping the microclimate, carbon sequestration, and providing acoustic screening. Furthermore, aesthetic choices in landscape styles (formal, modernist, picturesque) are important for citizens' well-being and should be considered in the design of urban landscapes. In this paper, we present a novel method for placing vegetation, ranging from shrubs to large trees, in 3D urban scenes. Our method uses individual lots as input and employs a conditioned Vision-Language Model (VLM) to generate a top-down rendering of vegetation, placing large trees, small trees, and shrubs on lawn areas. This rendering is then converted into a 3D scene by detecting individual plants and selecting appropriate 3D assets. To refine the proposed configurations, we define an optimization loop that keeps the VLM-generated positions fixed after a deterministic feasibility repair and uses CMA-ES to optimize per-instance scale transformations along with discrete vegetation asset substitutions. To define the objective function for the optimization, we evaluate the generated 3D scenes with efficient surrogate models of shade and path-based acoustic exposure. Furthermore, we render in-scene views at each optimization step to compute view-dependent perceptual descriptors, enabling the generation of both aesthetic and functional vegetation layouts for urban scenes.",
    "published": "2026-10-29T13:24:24Z",
    "updated": "2026-10-29T13:24:24Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40007"
  },
  {
    "id": "2610.40006",
    "title": "Human--AI Interactions as First-Class Data: A Formal Interaction Model and Runtime for Explainable AI Collaboration",
    "authors": [
      "Michela Taufer",
      "Kin Ng",
      "Ian Lumsden",
      "Aashish Pandey",
      "Rajasi Gore",
      "Angelina Ju",
      "Sukanya Moudgalya",
      "Ewa Deelman",
      "Sai Swaminathan"
    ],
    "abstract": "AI assistants are increasingly embedded in computational notebooks, scientific workflows, software engineering tools, and learning systems, yet human-AI interactions are often treated as transient prompt-response exchanges rather than durable data products, hindering reproducibility, explainability, replay, behavioral analysis, and adaptive AI support. We argue that these interactions form a new data class requiring formal representation and introduce the Human-AI Interaction Description Language (HAIDL), a formal interaction model with a Backus-Naur Form-inspired concrete syntax. HAIDL encodes each interaction as a structured object capturing computational context, user request, prompt payload, AI response, feedback, problem context, provenance, and model metadata. We integrate this vision into HAIDL-X, a middleware for JupyterLab that instantiates HAIDL by capturing user-bot state, building contextualized prompts, interfacing with AI providers, collecting feedback, and storing interactions in a repository. We add a learning layer over HAIDL that maps interaction objects and notebook execution traces into reproducible measures of user behavior, including engagement, performance, help-seeking, error-oriented use, and learning personas. HAIDL-X provides a foundation for treating human-AI collaboration as structured, queryable, replayable, analyzable data.",
    "published": "2026-10-29T13:23:54Z",
    "updated": "2026-10-29T13:23:54Z",
    "categories": [
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.40006"
  },
  {
    "id": "2610.40005",
    "title": "Efficient Learning of Mechanism Designs and Compositionality",
    "authors": [
      "João Pedro Gandarela",
      "Thiago Rios",
      "Stefan Menzel",
      "André Freitas"
    ],
    "abstract": "Learning mechanism behaviour requires a representation of how connected parts jointly constrain motion. We study whether exposing reusable constraint subassemblies improves prediction from limited data. Assur-KB represents planar mechanisms through irreducible modules, boundary interfaces, and solve dependencies while retaining source geometry. Our theoretical results characterize transfer through module interfaces and establish physical limits arising from missing interface information and accumulated sensitivity. To test the representation claim directly, the experimental design compares matched mechanism-curve pairs across training budgets within the same multilayer-perceptron family. This controlled comparison establishes the utility of the complete representation in the evaluated learning setting. Assur-derived features provide a geometric-mean $1.8\\times$ advantage in sample efficiency over flattened adjacency and position inputs across budgets of 50-10,000 mechanisms. Separate experiments establish invariance under tested joint relabelings, higher valid-generation rates under dyadic composition, and a coarser structural index over 10.02 million mechanisms. In summary, the theory and experiments identify how physical constraint structure supports limited-data prediction and which interface conditions govern compositional reuse.",
    "published": "2026-10-29T13:23:44Z",
    "updated": "2026-10-29T13:23:44Z",
    "categories": [
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2610.40005"
  },
  {
    "id": "2610.40002",
    "title": "How Much Should a VLA Trust Its Reasoning? Step-Level Guidance as a Measured Action-Value Function",
    "authors": [
      "Dabin Seo",
      "Eunhyek Joa"
    ],
    "abstract": "Reasoning vision-language-action (VLA) policies write a reasoning trace and then decode the action from it. A wrong trace yields a wrong action, and even a correct-looking trace can mislead the plan. Existing remedies ask whether the reasoning is right. We ask how strongly it should steer. CoC-CFG applies classifier-free guidance between the policy's context and the same context without the reasoning span. One weight per Euler step attenuates or amplifies the reasoning, and w=1 recovers the original policy. We treat the choice of this weight as a Markov decision process whose action values are measured, not bootstrapped. With the expert frozen and the noise fixed, applying a weight for one step and finishing the plan under the current controller returns that weight's value exactly. Q-adaptive guidance fits these values with small critics and improves the controller conservatively. In the Alpasim driving simulator it outperforms every fixed weight and online RL (SAC, GRPO) in open loop, and in closed loop it passes 262 of 300 scenes, against 252 for the original policy. On held-out frames of the Waymo end-to-end driving benchmark, its first three stages outperform every fixed weight, four adaptive-guidance methods, SAC and GRPO. On the hidden test set, a frozen Alpamayo 1.5 with rule-based camera and vehicle conversions and Q-adaptive guidance sets a new state of the art among published methods: 8.135159 rater feedback score, against 8.079 for the best published method.",
    "published": "2026-10-29T13:20:35Z",
    "updated": "2026-10-29T13:20:35Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40002"
  },
  {
    "id": "2610.39992",
    "title": "Accumulating Pruning Constraints: New Exact Polynomial-Space Algorithms for Max 2-SAT",
    "authors": [
      "Konstantin Kutzkov"
    ],
    "abstract": "We present deterministic polynomial-space algorithms that solve Max 2-SAT on $n$ variables exactly in time $\\Ostar(2^{(1-γ)n})$, for a fixed $γ>0$, on several classes of instances whose clause density may grow with $n$. Our main tool extends the classic DPLL branching algorithm. When the search gives a variable its less promising value, comparing the two values of the variable yields a pruning constraint that is satisfied by some optimal assignment. Accumulating these constraints along each branch prunes all but an exponentially small fraction of the assignments. The classes are formulas with many biased variables, semirandom 2-CNF formulas, and Max-Cut on regular expander graphs and on graphs generated by a stochastic block model. In a semirandom formula, the pairs of variables that may share a clause are arbitrary, and the clauses on these pairs are random. For semirandom formulas and block-model graphs, the algorithms are still exact on every input, and the time bound holds with high probability over the input. To our knowledge, these are the first polynomial-space algorithms with such a running time for nontrivial classes of dense Max 2-SAT instances. Beyond these classes, the pruning constraints can be added to any branching algorithm for Max 2-SAT, and we expect them to be of practical relevance for general formulas, in particular for sparse ones, where each constraint involves only a few variables.",
    "published": "2026-10-29T13:12:14Z",
    "updated": "2026-10-29T13:12:14Z",
    "categories": [
      "cs.DS",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.39992"
  },
  {
    "id": "2610.38497",
    "title": "Vision-Based Density Estimation for Adaptive Traffic Control",
    "authors": [
      "Mohammad Usaid",
      "Deepak Silaych",
      "Hrithik Mhatre",
      "Archak Mittal"
    ],
    "abstract": "Traffic congestion is becoming a critical challenge in rapidly growing urban centers, particularly in developing nations where rapid urbanization and inadequate transport infrastructure place increasing strain on transport networks. In highly heterogeneous and chaotic traffic flows, camera-based traffic-state estimation is limited by severe vehicle occlusion and overlap. In this paper, we propose a framework to optimize traffic flow directly from stochastic visual observations. The architecture is structurally decoupled into three primary components: (a) vehicle density estimation, (b) predictive dynamics modeling, and (c) policy optimization. The proposed methodology introduces a convolutional neural network (CNN) that learns the mapping from camera feeds to spatial density maps, utilizing an adaptive k-nearest-neighbor (k-NN) Gaussian kernel to handle varying congestion levels. This feeds into an ST3DNet predictive module for spatiotemporal forecasting, followed by a hierarchical Graph-Transformer Multi-Agent Reinforcement Learning (MARL) algorithm to optimize signal phases. The density estimation stage was evaluated on 40 annotated intersection images from Rambagh 4, Jaipur, India, with a reported five-fold validation mean absolute error (MAE) of $3.32 \\pm 0.95$ vehicles and a mean absolute percentage error (MAPE) of 14.5%. These results pertain to the perception component; empirical training and evaluation of the forecasting and control stages remain future work.",
    "published": "2026-10-28T09:15:54Z",
    "updated": "2026-10-28T09:15:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38497"
  },
  {
    "id": "2610.38496",
    "title": "Accelerating Nonlinear MPC by Behavior Cloning with Separated Timescales: Application to Nuclear Reactor Load-Following",
    "authors": [
      "Perceval Beja-Battais",
      "Alain Grosset{ê}te",
      "Nicolas Vayatis"
    ],
    "abstract": "Behavior Cloning (BC) of expert controllers for multiscale dynamical systems is challenging: state variables evolving at widely separated timescales induce highly nonlinear couplings that a shared latent space may fail to adequately represent, degrading closed-loop generalization. We propose Structured Representation Learning for Behavior Cloning (SRLBC), an architecture designed to leverage the physical knowledge of multiscale systems in which slow state variables, fast (stiff) state variables, and predictable exogenous inputs evolve at different timescales. On 500 long-horizon roll-outs of a pressurized water reactor (PWR) load-following benchmark -a high-dimensional, stiff industrial system with challenging safety constraints -and across 20 training seeds, separated embeddings systematically outperform shared embedding baselines on cumulative cost, imitation accuracy and constraint satisfaction. The resulting standalone policies approach NMPC closed-loop performance at a computational cost 15 times lower on average. Since standalone policies still leave a few percent of trajectories infeasible, we embed the learned policies in a safety-augmented approximate NMPC framework, in which the optimizer is only called when the predicted input sequence is not certified as safe. This yields controllers still 6.8 times faster than the NMPC controller on average, with a feasibility (i.e., constraint satisfaction) of at least 99.8% for all architectures, SRLBC retaining the lowest closed-loop cost. Under distribution shift, standalone BC policies degrade sharply: SRLBC degrades the least, and once safety-augmented, it retains a feasibility above 98% with the lowest closed-loop cost. Beyond the quantitative results, Jacobian-based sensitivity analysis shows that the resulting controller relies on a sparse and less redundant set of latent features, each attributable to a single group of physical variables, and aligned with the physical timescale decomposition of the system.",
    "published": "2026-10-28T09:15:18Z",
    "updated": "2026-11-02T13:30:38Z",
    "categories": [
      "cs.AI",
      "cs.LG",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2610.38496"
  },
  {
    "id": "2610.38494",
    "title": "Calibrating Track-Query Updates at Test Time for Multi-Object Tracking",
    "authors": [
      "Riku Inoue",
      "Shogo Sato",
      "Yu Mitsuzumi",
      "Kazuhiko Murasaki",
      "Tomoyasu Shimada",
      "Takashi Sano"
    ],
    "abstract": "Multi-Object Tracking (MOT) requires localizing multiple objects and maintaining their identities over time. Recent query-propagation trackers carry target-specific representations across frames and update them with current-frame image features, yet identity association remains difficult when visually similar targets overlap or cross. During such interactions, current-frame query updates may contain components directed toward nearby active tracks, which may affect identity association in later frames. To investigate this issue, we analyze track-query updates preceding identity switches (IDSWs), where the same target is assigned a different track ID. Our analysis shows that (i) propagated track-query representations change more abruptly before IDSWs, (ii) current-frame updates have larger positive projections along directions toward other active tracks, and (iii) bounding-box intersection over union (IoU) retrieves the counterpart track involved in a subsequent IDSW with high recall when that track remains active before the switch. Motivated by these findings, we propose Test-time Track-Query Calibration (TQC), a training-free and gradient-free method for query-propagation trackers. TQC calibrates the tracker output before propagation using a bounded correction estimated from update components directed toward nearby active tracks. It requires only track-query representations and bounding boxes available during inference, without retraining or architectural modification. Across nine DanceTrack and SportsMOT test settings, TQC improves HOTA and AssA in all settings and IDF1 in eight, with an average HOTA gain of +0.38 and limited inference overhead. Controlled variants on six validation settings further show that TQC's correction direction yields more consistent HOTA improvements than alternative directions with matched correction norms.",
    "published": "2026-10-28T09:07:44Z",
    "updated": "2026-10-28T09:07:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38494"
  },
  {
    "id": "2610.38488",
    "title": "Generative AI as a Mediator in Creator Collaboration: Challenges, Design Opportunities, and Concerns",
    "authors": [
      "Hajun Kim",
      "Jini Kim",
      "Yunjae Josephine Choi"
    ],
    "abstract": "As Generative AI (GenAI) expands beyond individual workflows and becomes increasingly integrated intocollaborative creative work, its potential to address the fundamental challenge of building common groundamong creators with diverse expertise remains underexplored. Specifically, we lack empirical understandingof how GenAI can mediate collaboration asymmetries among heterogeneous creators. To address this gap,we conducted a multi-method study with narrative writers (N = 10) and visual designers (N = 10) in thecontext of game development. Our findings demonstrate that GenAI goes beyond individual assistance toserve as a collaborative mediator by aligning creative intent, sustaining shared understanding, and mitigatinginterpersonal friction among creators. At the same time, we highlight concerns that GenAI may reducecommunication among creators, undermine mutual trust, and reshape interpersonal dynamics and collaborativeprocesses. Based on these insights, we identify design opportunities for GenAI tools that nurture collaborativesynergy while preserving the creativity and values of human work.",
    "published": "2026-10-28T08:58:58Z",
    "updated": "2026-10-28T08:58:58Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.38488"
  },
  {
    "id": "2610.38482",
    "title": "Geometry-Aware Trajectory State Modeling for Few-Shot Action Recognition",
    "authors": [
      "Zhiqi Miao",
      "Marko Haralović",
      "Stanislav Levendeev",
      "Sarvesh Angadi",
      "Jannatul Ferdous",
      "Dan-Cristian Ploesteanu",
      "Jiapan Guo",
      "Estefanía Talavera"
    ],
    "abstract": "Few-shot action recognition (FSAR) requires representations that expose discriminative motion dynamics from only a few labeled videos. Recent trajectory-based methods leverage long-term point tracks for explicit temporal correspondence, but often treat trajectories as carriers of sampled visual features or summarize their motion with compact 2D displacement-based descriptors. We instead view an action as the ordered evolution of 2.5D trajectory states and their local geometric interactions. Based on this view, we introduce GeoTRAM, a geometry-aware trajectory state modeling framework for FSAR. GeoTRAM lifts sparse tracks into 2.5D trajectories, where StateMotion models ordered intra-trajectory state evolution and RelMotion captures state-conditioned local interactions through time-varying relative geometry and motion. Quality-filtered spectral sampling provides more reliable trajectory initialization; complementary semantic, motion, and depth cues are separately refined and preserved for joint spatio-temporal modeling; action-guided reweighting and top-$ρ$ trajectory selection support complementary frame- and trajectory-level matching. Experiments on five FSAR benchmarks demonstrate strong gains on the motion-centric Something-Something benchmarks while maintaining competitive performance on more appearance-driven benchmarks and a favorable accuracy--efficiency trade-off.",
    "published": "2026-10-28T08:56:33Z",
    "updated": "2026-10-28T08:56:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38482"
  },
  {
    "id": "2610.38467",
    "title": "StreamStudio: Exploring Video Authoring with Streaming Autoregressive Generation",
    "authors": [
      "Boyu Li",
      "Zhe Lin",
      "Eli Shechtman",
      "Ding Li",
      "Hongbo Fu",
      "Yuqian Zhou"
    ],
    "abstract": "We present StreamStudio, a prototype system that explores a new authoring paradigm for streaming video generation. Instead of entering a prompt and waiting for a complete video before making changes, creators can interact with the generation as it unfolds: steering what comes next, returning to earlier moments, and exploring different continuations. In this way, StreamStudio shifts creative control from post-generation revision to continuous interaction with the generative process. Our contribution centers on this authoring paradigm and the interaction mechanisms that make streaming generation directly manipulable. StreamStudio is designed as a plug-and-play interface that can work with compatible generation and editing models, allowing its interaction model to evolve alongside advances in underlying video models. As streaming models become faster and easier to control in the future, such an interface may support more flexible and controllable video creation, including richer edits and multimodal interventions during generation.",
    "published": "2026-10-28T08:43:34Z",
    "updated": "2026-10-28T08:43:34Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.38467"
  },
  {
    "id": "2610.38462",
    "title": "Automatic Iconographic Annotation of Medieval Illuminations: Comparing Generative Vision-Language Models and Supervised Discriminative Classifiers",
    "authors": [
      "Vincent Jolivet",
      "Lucas Terriel",
      "Chahan Vidal-Gor{è}ne"
    ],
    "abstract": "The large-scale digitisation of medieval manuscripts creates a growing need for automated iconographic indexing. We evaluate two complementary paradigms for this task on 9,735 full-folio images annotated with 2,333 TIMEL concepts: generative Vision-Language Models (VLM) and supervised discriminative classifiers (SDC). The VLM experiments evaluate fine-tuning, structured JSON decoding, taxonomybased candidates generation, and deterministic reranking. The discriminative experiments evaluate flat, hierarchy-aware, and patch-attention heads over a frozen DINOv3 encoder. Our results highlight key functional differences: ML-Decoder (SDC) achieves the strongest overall retrieval performance (precision@1 of 0.696, MRR of 0.806), with loss calibration (Asymmetric Loss) serving as the primary performance lever. While SDCs provide superior precision and reliability within a closed vocabulary, VLMs offer strong semantic generalization and broad taxonomic coverage, particularly through structured JSON targets and verify-calibrate reranking (hierarchical F1 of 0.559). Furthermore, model behavior strongly depends on concept abstraction: SDCs excel at perceptually grounded descriptive concepts, whereas VLMs provide useful hypotheses for complex interpretative scenes. Finally, we find that enforcing explicit hierarchy within model architectures limits coverage compared to spatial feature aggregation. Overall, rather than competing approaches, SDCs and VLMs emerge as complementary components for future hybrid indexing systems combining structured retrieval with exploratory annotation assistance. As a methodological contribution, we define the soft F1 metric to provide a taxonomy-aware evaluation that credits semantically close predictions based on lowest common ancestors.",
    "published": "2026-10-28T08:38:13Z",
    "updated": "2026-10-28T08:38:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38462"
  },
  {
    "id": "2610.38458",
    "title": "Tracekit Box: Running AI Agents in Micro-VMs Where Every Way Out Is Decided and Signed",
    "authors": [
      "Bravish Ghosh"
    ],
    "abstract": "AI agents now install packages, call model APIs with their operators' keys and change code in repositories that deploy to production. The network, credentials and write access they need are also how they can leak data, steal a key or change a system nobody approved. Sandboxes contain an agent but leave little evidence of what crossed their boundary; tracing records what happened but contains nothing. We present Tracekit Box, an open-source system (MIT, v0) that does both. Each job runs in its own Firecracker micro-VM with no network card. The only ways out are doors on the host, served over vsock: commands, outbound connections, secrets, model calls and the workspace patch. At every door a Tracekit signer the agent cannot reach decides what passes and signs it into one run per box. Names are resolved on the host; private and cloud-metadata addresses are always refused; secrets never enter the VM, which sees placeholders the host proxy swaps for real values only in one header for bound hosts; and changes come back as a patch applied file by file after the signer decides each file. Box fails closed, and each job ends as a .tkb bundle anyone can verify offline. All 13 end-to-end checks pass on a real KVM runner (the test that runs them takes 28.5 s, including image pull and boot); 15 fuzz targets on the trust boundary produced nine findings, all fixed; and the demo run's 102 signed records verify. Box does not yet run Firecracker's jailer, needs a co-located signer, and records processes inside the VM only where they cross a door.",
    "published": "2026-10-28T08:36:22Z",
    "updated": "2026-10-28T08:36:22Z",
    "categories": [
      "cs.CE",
      "cs.AI",
      "cs.CR",
      "cs.OS"
    ],
    "url": "https://arxiv.org/abs/2610.38458"
  },
  {
    "id": "2610.38448",
    "title": "Benchmarking decision models against generative large language models on medical multiple-choice questions",
    "authors": [
      "Oscar Freyer",
      "Daniel Glauert",
      "Moritz Hofmann",
      "Max Ostermann",
      "Stephen Gilbert",
      "Jakob Nikolas Kather"
    ],
    "abstract": "Medical workflows often require selecting among predefined options. We compared 13 decision models with 15 generative large language model configurations, including different reasoning settings, using 1,273 four-option MedQA questions under text-only conditions. Accuracy ranged from 67.71% to 89.08% for decision models and from 78.32% to 96.86% for generative configurations. Among the tested configurations, Mercury Decide had the lowest mean final-attempt cost (USD 0.0069 per 1,000 questions), while Clef Omni had the shortest median request duration (0.291 seconds). Decision-model probabilities distinguished correct from incorrect answers, but error rates among answers assigned probabilities of at least 0.90 ranged from 1.71% to 12.77%. Answer agreement across three runs ranged from 92.30% to 100%, while probability repeatability varied. Decision models offered resource advantages alongside lower peak accuracy; selecting models for medical workflows requires considering probability quality and repeatability together with accuracy and the resources needed to detect and correct errors.",
    "published": "2026-10-28T08:25:35Z",
    "updated": "2026-10-28T08:25:35Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.38448"
  },
  {
    "id": "2610.38445",
    "title": "DES-JEPA: Learning a Shared Vocabulary for High-Dimensional Discrete Event Sequences",
    "authors": [
      "Hugo Math",
      "Maximilian Forstenhäusler",
      "Christos Anagnostopoulos"
    ],
    "abstract": "Temporal foundation models such as Chronos and TimesFM generalize across domains through a shared numerical observation space. In contrast, discrete event sequences (DESs), including operational event logs or patient clinical-event trajectories, have domain-specific event vocabularies whose labels lack a consistent correspondence across domains. Beyond this lack of consistency, the number of distinct events in real-world settings is high enough to challenge both classical temporal point process modeling and current in-context foundation inference models such as FIM-PP. Critically, current foundation models for DESs are limited to a small, fixed number of event types, restricting their applicability to realistic, high-dimensional event streams. To address this, we propose two complementary modules: (i) DES-JEPA, a joint-embedding predictive architecture that learns a shared discrete vocabulary from synthetic stochastic processes with unaligned event vocabularies; and (ii) DES-PFN, a discrete event sequence prior-fitted network that reuses the learned vocabulary for in-context next-event prediction. Without task-specific fine-tuning, this framework achieves competitive zero-shot performance on eight unseen real-world datasets and scales up to 700 distinct event types.",
    "published": "2026-10-28T08:24:09Z",
    "updated": "2026-10-28T08:24:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.38445"
  },
  {
    "id": "2610.38439",
    "title": "Predict the Reward, Not the World: World Reward Models for ML Agents",
    "authors": [
      "Yuxiao Lee",
      "Zherui Yang",
      "Fan Liu",
      "Hao Liu"
    ],
    "abstract": "Search-based machine-learning (ML) agents improve a solution by writing candidate programs, executing them, and keeping the best. Execution gives the search reliable feedback, but a single run can take hours, and most runs end in programs the agent discards. Recent agents try to save these runs by letting a large language model act as a world model that predicts how each program would perform. However, a wrong prediction feeds the search false information. We argue that an agent does not need to predict the outcome of execution, only the decision that execution would support. We propose World Reward Models (WRMs), which learn from real execution results to choose directly which candidate will perform better, without predicting any intermediate outcome. We prove that a selector which predicts execution from the same inputs cannot outperform the best direct selector, that predicted outcomes add an error which can make a likelihood-trained world model prefer the worse program on every instance, and that cross-entropy on executed winners drives a WRM toward the optimum. Our WRM, ForeCritic, adapts a 9B typed decision model to 5k executed program pairs. On 12,438 held-out pairs from 26 ML tasks, it picks the better program 79.4% of the time, while general-purpose LLM judges reach 53--62%, and its probabilities are calibrated. Inside AIDE, ML-Master, and ForeAgent, it cuts mean task time by 4.4--7.5 times while keeping their mean scores within 0.01 or raising them.",
    "published": "2026-10-28T08:20:06Z",
    "updated": "2026-10-28T08:20:06Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.38439"
  },
  {
    "id": "2610.38438",
    "title": "RoleFUZZER: User-Behaviour Fuzzing for Role-Specification Adherence in Large Language Models",
    "authors": [
      "Kshitish Ghate",
      "Michael Saxon",
      "Tadayoshi Kohno",
      "Aylin Caliskan"
    ],
    "abstract": "Large language models (LLMs) are often conditioned into specific roles such as tutors, interviewers, or agents acting for an organisation, through system prompts that specify how they should behave. The extent to which they can actually adhere to these role specifications under multi-turn interactions with realistic and potentially problematic users is understudied. To address this, we propose user behaviour fuzzing, a guided search over plausible user behaviours that can lead a model to violate its role specification, and introduce RoleFUZZER, a framework that adapts coverage-guided fuzzing from software testing to operationalise the search. RoleFUZZER constructs scenarios guided by a user-behaviour coverage grid that crosses a grounded taxonomy of user interaction types and the role specification of the model under test i.e. what is under pressure. With RoleFUZZER, we evaluate LLMs across five role specifications, including tutor, financial advisor, AI interviewer, antagonistic roleplay character, and web agent under organisational policies. Across simulated and validated conversations in 15 campaigns, the framework reaches >= 89% coverage of the 64-cell behaviour grid for every model and role tested, and surfaces specification-grounded failure patterns. At an equal budget of conversations, removing the RoleFUZZER grid and asking an LLM to generate specification targeting users free-form lowers coverage to 39-69% with fewer kinds of violations. The same specification can also fail in opposite directions. For e.g., on the antagonist, open-weight target models override the player's safety signals, while Claude Haiku 4.5 breaks character instead. RoleFUZZER offers a tractable way to uncover vulnerabilities in LLMs across role specifications by testing diverse user behaviours that are likely to violate them.",
    "published": "2026-10-28T08:19:36Z",
    "updated": "2026-10-28T08:19:36Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.38438"
  },
  {
    "id": "2610.37459",
    "title": "M4Bench: Evaluating Procedural Specification for Clinical EHR Derivation Agents",
    "authors": [
      "Hannes Ill",
      "Rafi Al Attrach",
      "Rajna Fani",
      "Ahram Han",
      "Ryohei Yamamoto",
      "Marlene Louisa Moerig",
      "Dukyong Yoon",
      "Leo Anthony Celi"
    ],
    "abstract": "Clinical research over electronic health records depends on derived variables whose definitions sit outside the schema, in item codes, time windows, missingness rules, and output-grain choices that change cohorts and downstream conclusions. We introduce M4Bench, 28 clinical derivation tasks across 15 task families on MIMIC-IV and eICU, to test whether AI coding agents can reproduce such derivations and how clinician-reviewed agent skills change their results. Its controls decompose the value of skills into specification completeness, delivery format, and schema familiarity. In a Docker-isolated Codex campaign (GPT 5.4 Mini and GPT 5.5), skills raise reward by 0.136 over the no-skill baseline, with 26 of 28 tasks improving. Specification completeness accounts for most of this gain: on an eight-task control subset, an operational spec alone raises reward by 0.162, and skills add only 0.024 on top, indistinguishable from zero. On a ten-task subset, decoy skills score like no skill and raw reference SQL nearly matches targeted skills, arguing against generic context or the skill format as the explanation. Schema obfuscation and restructuring preserve 86% and 70% of the skill gain (GPT 5.4 Mini, 26 MIMIC-IV tasks), a descriptive robustness check rather than a bound on memorization. A descriptive Claude Code replication on all 28 tasks (Opus 4.7 and Sonnet 4.6, 560 runs) is directionally consistent (+0.120, 21 of 28 tasks improving). These gains are partial agreement with the reference, not completed tasks: only 25 of 280 with-skill and 13 of 280 no-skill Codex runs pass every strict check, and skills barely change which rows agents return (key F1 +0.003). Skills are released as a versioned, clinician-reviewable markdown delivery format, with a family-level reference-validity audit. M4Bench releases tasks, skills, evaluation code, and sanitized per-run evidence as an open-source benchmark.",
    "published": "2026-10-27T15:59:13Z",
    "updated": "2026-10-27T15:59:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37459"
  },
  {
    "id": "2610.37448",
    "title": "Test-Time Communication in Trading Agent Swarms",
    "authors": [
      "Avid Fayaz",
      "Harry Zhang",
      "Håvard Alstadheim",
      "Erik Nordlöf",
      "Vilhelm Karlin",
      "André Silva"
    ],
    "abstract": "Communication between agents has mostly been studied on tasks with a shared objective and fast, clear feedback. Trading has neither: each agent manages its own account, with decisions being scored by markets late and noisily. A trading swarm is thus a population of independent decision-makers rather than a team, for which convergence is a risk and not the goal. We ran 200 agents from four model families in groups of ten under five communication regimes, from isolation to message boards and shared notes, over seven US trading days (1 to 9 October 2026), logging everything each agent read before every decision. In two of the four families, communicating groups came to hold far more of the same stocks than the isolated group. A group's return was largely the return on what its members held in common. Seeing a post from a groupmate made an agent 7 percentage points more likely to reuse an eight-word phrase from it. Agents that started too close together to see each other's posts shared such a phrase in 14% of cases, the rate that common inputs produce. Seeing the post did not detectably change that morning's trades. Case studies traced the adoption of positions and decision rules over subsequent days, and communicating groups sold in step more often than isolated ones. Because isolated groups also converged on the same stocks, sometimes completely, assessments of herding need to measure excess convergence relative to a no-peer baseline.",
    "published": "2026-10-27T15:54:05Z",
    "updated": "2026-10-27T15:54:05Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.37448"
  },
  {
    "id": "2610.37446",
    "title": "PolyGandr: Steering Generative Models via Spatial Navigation through Latent Space",
    "authors": [
      "Mingwei S. G. Li",
      "Susie S. Y. Li",
      "Isabel Moreira de Oliveira",
      "Ryan P. Adams",
      "Remco Chang"
    ],
    "abstract": "Generative models support content creation across text, images, videos, and design disciplines, yet their interfaces rely primarily on natural language. While effective for specifying high-level intent, language can be inefficient and imprecise for fine-grained control, iterative refinement, and open-ended exploration. We present PolyGandr, a visual interface for exploring relationships between latent representations and generated outputs, complementing natural-language model steering. PolyGandr formulates generative control as high-dimensional navigation, enabling users to define starting points, steering directions, and step sizes through a unified map-and-mixing-palette interface. Combining global exploration with local refinement supports both broad design-space navigation and fine-grained output manipulation without repeatedly translating visual intent into prompts. We evaluate PolyGandr across three use cases: StyleGAN2 face generation, Stable Diffusion chair design, and rotational kirigami engineering. A formative study indicates that PolyGandr complements existing workflows by supporting real-time editing while simultaneously providing an overview and means to explore the broader design space.",
    "published": "2026-10-27T15:52:23Z",
    "updated": "2026-10-27T15:52:23Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.37446"
  },
  {
    "id": "2610.37437",
    "title": "Representing the Unseen: Rethinking Visual Imagination for Spatial Reasoning",
    "authors": [
      "Zengqi Zhao",
      "Zun Wang",
      "Shoubin Yu",
      "Mohit Bansal",
      "Yue Zhang"
    ],
    "abstract": "Visual world models increasingly support spatial reasoning by generating RGB views of unobserved states. However, RGB has become the default interface largely because it is well suited for visual generation, rather than necessarily being the most effective representation for downstream reasoning. Different spatial questions may benefit from different representations of the same imagined state: top-down geometry can facilitate global distance comparisons, while panoramic views provide broader context for reasoning about open space. To isolate the role of representation in spatial imagination, we introduce ImagiRep, a simulator-grounded benchmark of 922 questions spanning seven question types across two settings, Viewpoint Imagination and Cross-view Integration, providing oracle RGB and six alternative representations (e.g., depth, panoramic views, and top-down geometry) of the same unobserved state. This controlled comparison reveals that even accurate imagined RGB does not guarantee accurate spatial reasoning, and different questions benefit from different representations. Similar trends hold for representations derived from world-model-estimated states. Notably, estimated RGB alone can mislead spatial reasoning, while alternative representations retain complementary benefits. Building on these findings, we introduce GEARS, a lightweight test-time strategy for adaptive representation selection, outperforming existing spatial imagination methods and showing that reasoning about unseen states requires more than generating RGB views.",
    "published": "2026-10-27T15:48:09Z",
    "updated": "2026-10-27T15:48:09Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.37437"
  },
  {
    "id": "2610.37434",
    "title": "FeatureArc: Benchmarking Coding Agents on Evolving Features",
    "authors": [
      "Yunlong Wang",
      "Alyssa Wu",
      "Cuiyun Gao",
      "Jia Feng",
      "Songyuanyi Lu",
      "Zhichao Hu"
    ],
    "abstract": "A software feature usually evolves over time: developers extend its first version as new use cases and requirements arrive, and each extension builds on code written earlier. Most feature benchmarks evaluate a single request on a fixed codebase. Feature evolution requires evaluating successive extensions on an agent's own earlier code and checking whether the feature remains correct. We introduce FeatureArc to evaluate coding agents on evolving features, together with a pipeline that constructs its tasks from repository histories. The benchmark combines dependencies between successive stages of the same feature, explicit requirements and interface contracts, and executable checks across four programming languages. The pipeline validates fail-to-pass (F2P) tests for new behavior and pass-to-pass (P2P) tests for existing behavior on the reference code before and after each stage. We evaluated 10 coding agents on 73 manually reviewed tasks of 2 to 10 stages. Each agent works in one persistent session and workspace without external test feedback or rollback. The evaluation reveals a gap between first-stage and whole-feature success: pooled success falls from 62.7% at the first stage to 28.5% when the whole feature is tested on the final code. Trajectory analysis identifies inherited defects as a common failure mechanism, present in 72.9% of failed later stages. These earlier errors often remain undetected: in stages following a failure, agents leave the earlier error unnoticed about 95% of the time, and their self-tests rarely revisit earlier stages. Evolving a feature autonomously, without human checks between stages, therefore remains a substantial challenge for current coding agents. At Tencent, the pipeline extends internal evaluations to this setting and guides the development of Hunyuan, Tencent's family of large language models.",
    "published": "2026-10-27T15:45:50Z",
    "updated": "2026-10-27T15:45:50Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37434"
  },
  {
    "id": "2610.37431",
    "title": "Segmentation Confidence for Arbitrary CNNs",
    "authors": [
      "Baris Oguz",
      "Xing Yao",
      "Claudia Tawil",
      "Alison Pouch",
      "Brett Byram",
      "Gabriel Arenas",
      "Nadav Schwartz",
      "Ipek Oguz"
    ],
    "abstract": "Convolutional neural networks (CNN) are widely used for medical image segmentation. However, they lack an inherent measure of confidence. Existing methods for estimating prediction uncertainty often require a custom network architecture and/or dedicated training setups and need to be trained from scratch. In addition, the deduction of a single confidence score per input from the uncertainty maps is not always straightforward. In this study, we explore voxel-based uncertainty estimation methods that can be added to existing segmentation pipelines without training from scratch. We also propose a novel method to estimate a single confidence score from the uncertainty maps. Our evaluations on different ROIs and modalities suggest that our confidence score can predict segmentation performance in unseen data.",
    "published": "2026-10-27T15:42:29Z",
    "updated": "2026-10-27T15:42:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37431"
  },
  {
    "id": "2610.37430",
    "title": "When Visual Evidence Is Insufficient: How Instructions, Post-Training, and Internal Activations Shape Refusal in Multimodal Language Models",
    "authors": [
      "Ananth K Suresh",
      "Aveen Dayal",
      "Gouthaman KV",
      "Aditya Pola",
      "Vineeth N Balasubramanian"
    ],
    "abstract": "For reliable deployment, multimodal large language models (MLLMs) should recognize when an image provides insufficient evidence to answer a question and withhold unsupported answers. Yet refusal alone is not necessarily evidence of such recognition: models may refuse because of unrelated safety constraints or without identifying the missing evidence. We study how refusal on visually unanswerable questions is shaped by three sources of control: inference-time instructions, post-training, and internal activation interventions. Across three MLLMs on the MoHoBench benchmark, we systematically manipulate the meaning and placement of refusal instructions, compare supervised and preference-based post-training, and intervene on a refusal-related activation direction derived from naturally answered and refused examples. We find that refusal is highly sensitive to both the meaning and placement of instructions, with model-specific changes at the sample level that are obscured by aggregate refusal rates. Evidence-aware and general refusal instructions have stronger effects than an intentionally mismatched safety instruction. Post-training produces larger increases in refusal, but can also induce responses that combine refusal language with attempted answers. In contrast, activation intervention produces smaller yet transferable changes across prompt conditions, without evidence of indiscriminate refusal on tested visually answerable samples. These findings show that refusal is jointly shaped by external instructions, post-training, and internal representations, highlighting the need to disentangle evidence recognition from a model's learned propensity to refuse.",
    "published": "2026-10-27T15:42:20Z",
    "updated": "2026-10-27T15:42:20Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37430"
  },
  {
    "id": "2610.37429",
    "title": "Bayes-Adaptive MDPs for Rollout Allocation to Enhance GRPO Training",
    "authors": [
      "Faeze Moradi Kalarde",
      "Armin Toroghi",
      "Nam Ho Koh",
      "Doo Hwan Hwang",
      "Seungjin Kim",
      "Kee-Eung Kim",
      "Scott Sanner"
    ],
    "abstract": "Group Relative Policy Optimization (GRPO) has demonstrated strong performance in LLM post-training. However, it allocates a uniform rollout budget to every training question, ignoring variations in question difficulty. As a result, highly difficult questions may receive too few rollouts to generate informative positive reward signals, limiting their contribution to training, while moderately difficult questions often receive more rollouts than necessary. In this work, we formulate the problem of difficulty-aware rollout budget allocation to maximize training utility under the same total rollout budget as standard GRPO. We propose AdaRoll-GRPO, which reformulates rollout allocation as a sequential decision-making problem and leverages a Bayes-adaptive Markov decision process (MDP) to learn an adaptive allocation policy. The learned policy is computed offline and applied during GRPO training without introducing additional online optimization overhead. Extensive experiments on multiple reasoning datasets and LLM architectures demonstrate that AdaRoll-GRPO consistently improves GRPO training performance under a fixed rollout budget, highlighting the effectiveness of adaptive rollout allocation for GRPO in LLM post-training.",
    "published": "2026-10-27T15:41:57Z",
    "updated": "2026-10-27T15:41:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37429"
  },
  {
    "id": "2610.37427",
    "title": "Time-Dynamic Semantic-Activity Entanglement: Quantifying Communication-Based Synchrony in Collaborative VR",
    "authors": [
      "Pooja Pol",
      "Jianing Zhang",
      "Qing Huang"
    ],
    "abstract": "Collaborative virtual reality (VR) produces rich multimodal traces of team behavior, yet practical methods for characterizing time-varying team communication remain limited. We present time-dynamic semantic-activity entanglement (TSAE), inspired by the entanglement concept introduced by Gloor et al. (2022), to describe communication-based team synchronization within discrete time windows. TSAE is modeled by combining relative speaking activity with contextual semantic alignment for participant pairs, which is aggregated into participant-level trajectories and summarized through the Gini coefficient to understand the distribution of team-level communication synchrony. This approach is employed with German-language transcripts from fifteen collaborative VR gameplay sessions. Transcript utterances are represented using a long-context embedding model with a late-chunking strategy and analyzed within fixed game-time windows. A representative session illustrates shifting dyadic alignment and low-to-moderate participant contributions, with sporadic periods of high entanglement. Across fifteen game sessions, the metrics indicate complementary insights, offering a qualitative contrast to the core-periphery pattern reported in the foundational work. Hence, these descriptive findings support the study of communication as a dynamic process and provide a mathematically grounded approach to analyze its evolving distribution in shared interactive VR spaces.",
    "published": "2026-10-27T15:40:51Z",
    "updated": "2026-10-27T15:40:51Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.37427"
  },
  {
    "id": "2610.37422",
    "title": "Beyond the Readout: A Latent Numerical Frame Shared Across Modality and Operation",
    "authors": [
      "Oriol Juan Sabater",
      "Alex Ferrando de las Morenas",
      "Pau Rodríguez",
      "Xavier Suau"
    ],
    "abstract": "When a multimodal model computes 17+35 from text or 91-39 from a rendered image, it produces the same answer, 52. Does it use one internal concept of number for both, or separate machinery for each path? Similarity metrics such as RSA or CKA cannot settle this question. They give the same score to identical and to rotated directions, and two representations can look alike only because both prepare the same output digits. We therefore use causal interventions. For four conditions (text or image, addition or subtraction), we learn a small subspace of Gemma4-12B-it's residual stream in which swapping coordinates swaps the model's answer. The subspaces answer three questions. First, do the conditions write numbers along the same directions? They do not. Reusing a subspace from text in an image on the same operation recovers only 53.2% of its causal effect. A single rotation and rescaling maps one subspace onto the other and raises recovery to 91.4%, so the conditions share one geometry expressed in different coordinates. Second, does this shared geometry only reflect the digit the model is about to print? To test this, we split each subspace into 9 directions that the output layer reads to choose the next digit and 13 directions that it cannot see. The 13 hidden directions still carry the number, yet changing them barely alters the digit being written. Third, what are these hidden directions for? A model must emit a multi-digit answer one digit at a time, so it can compute the full result early and keep it in reserve. When two numbers share their first digit, swapping the number in the hidden directions leaves the digit being written intact and redirects the next digit in 77.6% of cases. The model thus forms an abstract numerical concept upstream and unfolds it across time: multimodal representations share meaning through relational geometry across distinct coordinate frames.",
    "published": "2026-10-27T15:36:46Z",
    "updated": "2026-10-27T15:36:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37422"
  },
  {
    "id": "2610.37738",
    "title": "Poisoned Skills: Propagating Jailbreaks Through Agent Markdown Files",
    "authors": [
      "Kashyap R Manjusha",
      "Murali Emani"
    ],
    "abstract": "Modern agent frameworks allow users to provide Markdown files containing system prompts, tool descriptions, and skill definitions (e.g., SKILL.md), which are incorporated into the agent's context during initialization. In this work, we investigate whether this configuration mechanism can also serve as an injection channel: can a jailbreak embedded in a Markdown skill file propagate through an agent and induce prohibited behavior? To answer this question, we construct a LangChain-based question-answering agent whose system prompt is assembled from a user-provided Markdown file. We embed a jailbreak combining persona manipulation with a GPTFUZZER-based attack and evaluate its effectiveness across seven contemporary open-weight models using 270 forbidden questions spanning nine harm categories. Under a benign system prompt, the models exhibit near-complete refusal behavior, with a mean attack success rate (ASR) of just 0.5%. In contrast, the injected skill file raises the mean ASR to 45%, reaching 68.9% for individual models. We further evaluate two payload obfuscation strategies: an invisible zero-width character-based stealth payload and a phonetic payload based on grapheme-to-phoneme transformations. Neither outperforms the plain-text injection; notably, the phonetic variant reduces mean ASR to 30%. These findings identify Markdown skill files as an underexplored attack surface for AI agents and suggest that vulnerability to configuration-based jailbreaks depends more strongly on the underlying model than on the specific payload obfuscation technique.",
    "published": "2026-10-27T15:29:41Z",
    "updated": "2026-10-27T15:29:41Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37738"
  },
  {
    "id": "2610.37407",
    "title": "Constraining the Commit Boundary: A DIO/ODI-Informed Authorization Guardrail for Agentic Entity Resolution",
    "authors": [
      "Daniel Beránek"
    ],
    "abstract": "Agentic Entity Resolution (ER) systems iteratively plan actions, retrieve evidence, revise hypotheses, and propose graph mutations. An erroneous identity hypothesis may condition later retrieval and produce apparent confirmation. This paper proposes a Digital Identity Optimization (DIO) and Ontology of Digital Identity (ODI)-informed authorization boundary between evidence available for agent reasoning and evidence eligible to authorize persistent identity-changing mutations. A domain-governed constraint-binding function maps selected reconstruction-failure distinctions to explicit identity-preserving constraints. An abstract two-phase supervisor permits a commit only when claim-specific authorization-eligible evidence supports every required proposition, relevant conflicts are resolved, the operation remains within its authorized scope, and relevant state and policy versions remain valid. Admission as UNVERIFIED does not confer authorization eligibility. Separate claim-specific promotion governs evidentiary use; insufficient support or unresolved material conflict leads to deferral. The contribution is a specification connecting diagnostic-to-constraint mapping, evidence promotion, proposition coverage, conflict handling, scope binding, and commit-time version integrity. A proposed evaluation protocol is designed to assess the mapping's incremental value beyond generic authorization and conventional identifier rules. This is a conceptual architecture without implementation or empirical validation, not a theorem of semantic correctness. Its property depends on domain-policy adequacy, evidence promotion, and enforcement. It does not prevent erroneous hypotheses or hypothesis-conditioned retrieval; dependency-aware evidence flow remains future research.",
    "published": "2026-10-27T15:22:00Z",
    "updated": "2026-10-27T15:22:00Z",
    "categories": [
      "cs.AI",
      "cs.CR",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2610.37407"
  },
  {
    "id": "2610.34865",
    "title": "ECHOES: An Adaptive LLM-Powered AR Glasses Docent for Evidence-Grounded Urban Heritage Interpretation",
    "authors": [
      "Bang Xiao",
      "Baosheng Jin",
      "Jinhan Niu",
      "Xingchen Zhang",
      "Hua Shen"
    ],
    "abstract": "Urban heritage tours are often delivered through fixed scripts, leaving limited room for visitors' situated questions, language preferences, or requests for evidence. We present ECHOES, an adaptive LLM-powered AR glasses docent for evidence-grounded interpretation of historical buildings. Specifically, the agent adapts along three dimensions: it modifies response structure according to the type of visitor question (identification, architectural detail, evidence-seeking, or route inquiry); it accumulates session-level interest signals from repeated questions and expressed curiosity to shape later explanations; and it tracks language preference and retrieval context across turns to maintain conversational continuity. The core of ECHOES is an LLM agent initialized as a source-aware urban heritage docent that realizes this adaptation through dialogue and preference context maintained across the session. Around this agent, ECHOES integrates visual site grounding, a self-built historical knowledge base supporting retrieval-augmented generation, and concise multilingual AR output designed for glanceable use. Through a working prototype centered on Shanghai's East Nanjing Road and the Bund, we demonstrate how an adaptive LLM-powered AR docent can transform historical tours from scripted narration into situated, question-responsive, and source-aware conversations.",
    "published": "2026-10-26T05:27:57Z",
    "updated": "2026-10-26T05:27:57Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.34865"
  },
  {
    "id": "2610.34855",
    "title": "DecoyCount: Evaluating Visual-Reasoning Misalignment in Counting",
    "authors": [
      "Qiuyi",
      "Zhang",
      "Zhen Xu",
      "Jing Gu",
      "Seojin Bang",
      "Arnav Mohanty Das",
      "Yaning Hu",
      "Gautam Kumar",
      "Jared Lichtarge",
      "Le Xue",
      "Bettina Catoto",
      "Akul Datta",
      "Daniel Luo",
      "Farha Khan",
      "Marcella Valentine",
      "Yinfei Yang",
      "Andrew M. Dai"
    ],
    "abstract": "Visual counting benchmarks report whether vision-language models produce the correct number, but not whether errors arise from perception or reasoning. We introduce DecoyCount, a benchmark built from 1,660 real-world images with designed decoys across seven mechanisms, along with paired prompts: a neutral question, a matched alignment cue, and a novel multi-hop, multi-image question that situates the same counting problem in a realistic scenario. Using this design, we find that counting failures are induced partly by visual misalignment: models can execute the intended counting process when cue-guided but fail to select it unaided, and we term this difference in accuracy the reasoning-alignment gap. Despite being highly capable on general reasoning, frontier models remain below 50\\% accuracy on our benchmark, while alignment gaps range from 11.8-22.1 percentage points; strikingly, we observe that more capable models, greater thinking budgets, and agentic processes often induce larger gaps. Because humans may bring context that models lack, we test whether textual underspecification contributes to misalignment using a scenario-based multi-hop condition without explicit hinting, but this added context does not improve aggregate performance. Our analysis concludes that stronger general reasoning does not by itself generalize to aligned visual reasoning, leaving misalignment with human visual expectations as a substantial component of the remaining deficit.",
    "published": "2026-10-26T05:19:02Z",
    "updated": "2026-10-26T05:19:02Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34855"
  },
  {
    "id": "2610.34854",
    "title": "Learning Dual-Camera Smooth Zoom via Decoupled Geometric-Photometric Data Synthesis",
    "authors": [
      "Junjie Fan",
      "Zhilu Zhang",
      "Renlong Wu",
      "Dazhi Zhang",
      "Wangmeng Zuo"
    ],
    "abstract": "When zooming between dual cameras on smartphones, prominent discontinuities in both geometric perspective and color rendition inevitably degrade the visual experience of users. To address this issue, we introduce the dual-camera smooth zoom (DCSZ) task, aiming to synthesize continuous intermediate frames for fluid zooming. However, directly applying existing video frame interpolation (VFI) models to this task is severely hindered by substantial domain gaps and the practical intractability of capturing real-world continuous ground-truth. To this end, we propose a novel data synthesis framework to generate high-fidelity DCSZ training sequences, named ZoomGS v2. It explicitly decouples geometric and color transformations from 3D scene representation modeling, thereby enabling extensive data generation from easily accessible single-camera 3D scenes. Furthermore, we develop ZoomFI, a specialized VFI network tailored to the DCSZ task, which leverages complementary bidirectional warping for comprehensive dual-camera information fusion. Extensive experiments on test datasets captured using two mobile phones demonstrate that training with the constructed DCSZ data significantly improves the performance of various VFI models. Moreover, ZoomFI achieves state-of-the-art results in both quantitative metrics and visual quality. The datasets, code, and pretrained models are available at https://hitjunjief.github.io/DCSZ-v2",
    "published": "2026-10-26T05:18:00Z",
    "updated": "2026-10-26T05:18:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34854"
  },
  {
    "id": "2610.34850",
    "title": "Recovering Black-Box Point Cloud Models from Pose Shifts via Derivative-Free Optimization",
    "authors": [
      "Seonghwan Park",
      "Min-Gyu Park"
    ],
    "abstract": "Point cloud models are increasingly deployed through score-only black-box interfaces. Under this access model, test-time rotations outside the training distribution can substantially degrade performance. Although existing mitigations such as equivariant retraining and gradient-based adaptation are effective, they are infeasible without access to model weights or gradients. To address this limitation, we propose CanDO, a test-time canonicalization method that recovers lost performance using only forward queries. Specifically, CanDO searches for an input transformation that maximizes model confidence and uses derivative-free optimization to perform this search without gradients. We further identify three conditions for successful recovery: a training augmentation gap, an accuracy-aligned confidence surrogate, and global search over a multi-modal objective. Across multiple architectures and benchmarks, CanDO recovers 76% of the oracle gap under azimuthal misorientation and 51% under arbitrary SO(3) rotations for object part segmentation. These results show that frozen score-only point cloud models can recover from rotation-induced distribution shifts through post-deployment canonicalization alone.",
    "published": "2026-10-26T05:07:36Z",
    "updated": "2026-10-26T05:07:36Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34850"
  },
  {
    "id": "2610.34846",
    "title": "Seeing Before Naming: Context-Grounded Learning of Novel Visual Concepts",
    "authors": [
      "Gabriel Adineera",
      "Jinoh Kim"
    ],
    "abstract": "Learning an unfamiliar visual category requires more than adapting a classifier: the model must connect its visual evidence to a useful semantic name. A pre-trained vision-language model can retain discriminative image features while providing a weak textual anchor for the target concept. We address this imbalance through context-grounded semantic anchoring. Our framework, SynerNet, learns concept-specific name embeddings, exposes them to compatible linguistic contexts, and conditions their representations on visual evidence. Difficulty-aware processing and adaptive objective weighting coordinate this adaptation while retaining the pre-trained backbone. On four VISTA-Beyond domains, SynerNet reaches a mean 16-shot accuracy of 74.35%, compared with 72.45% for few-shot name learning. Across 14 domains in the name-masked transfer setting, it improves mean accuracy from 45.17% to 46.74%. Ablations identify concept-specific name embeddings and cross-modal context integration as important components. These results support treating concept acquisition as the construction of visually grounded semantic anchors.",
    "published": "2026-10-26T04:55:38Z",
    "updated": "2026-10-26T04:55:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34846"
  },
  {
    "id": "2610.34845",
    "title": "PosePlaner: Denoising Any Feed-Forward Pose Predictor from Pairwise Planar Geometry",
    "authors": [
      "Yihang Chen",
      "Bin Tan",
      "Yujun Shen",
      "Yinghao Xu",
      "Nan Xue"
    ],
    "abstract": "Recent multi-view Transformers (e.g., DUSt3R and VGGT) have advanced 3D reconstruction by scaling training data and model capacity from two views to many views and long sequences, subsuming the classical SfM/SLAM pipeline of feature extraction, matching, and pose estimation in a single feed-forward pass. Yet this subsumption hides the interfaces between pipeline stages---correspondences, geometry, and pose are entangled in a single forward pass, leaving supervised fine-tuning as the major path to improvement and offering no mechanism to correct predictions from geometric evidence at test time. We propose PosePlaner to close this gap by reviving the classical coupling between correspondences and pose via flow matching, treating pose refinement as a conditional generation problem that takes coarse geometric matches and initial pose as input condition and fuses the resulting pose hypotheses into a single refined estimate, providing a continuous, data-driven analog of RANSAC voting. Our method is trained efficiently on two-view data, yet serves as a periodic refiner for streaming n-view pose estimators with no retraining. Empirically, it corrects failures of feed-forward predictors, substantially improves correspondence-based solvers, and reduces accumulated drift in long streaming sequences.",
    "published": "2026-10-26T04:55:36Z",
    "updated": "2026-10-26T04:55:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34845"
  },
  {
    "id": "2610.34837",
    "title": "Beyond Behaviour: A Stimulus-Response Safety Evaluation of Vision-Language-Action Models",
    "authors": [
      "Vy Vo",
      "Dinh Phung"
    ],
    "abstract": "Humans exhibit biological sensitivity to safety-critical stimuli that can trigger defensive action. Across three models and two video benchmarks, we investigate whether similar responses emerge in vision-language-action models by examining their internal representations and action tendencies in response to visible hazards and harmful consequences. Our findings suggest that task execution may remain the default response even when danger is internally registered.",
    "published": "2026-10-26T04:36:21Z",
    "updated": "2026-10-26T04:36:21Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34837"
  },
  {
    "id": "2610.34836",
    "title": "Collective Emergent Alignment: Measuring and Amplifying Interaction-Induced Reasoning Alignment in Multi-Agent LLMs",
    "authors": [
      "Boxuan Wang",
      "Zhuoyun Li",
      "Sarvapali D. Ramchurn",
      "Xiaowei Huang",
      "Yi Dong"
    ],
    "abstract": "Multi-agent large language model (LLM) systems can exhibit emergent behaviors through interaction, yet whether a similar phenomenon exists for reasoning alignment remains largely unexplored. We study whether agent interaction produces additional reference-grounded reasoning alignment beyond matched individual self-refinement, and introduce REMAP (Reference-Entailment-Matrix for Agentic Process), a framework that quantifies this effect through Semantic Coverage and interaction-specific alignment gains. Across diverse model families and two multi-hop reasoning benchmarks, we observe broadly positive interaction gains, particularly on reasoning content that depends on integrating evidence distributed across agents. These gains are consistently associated with independently measured peer-information recovery, while further analysis reveals composition-dependent heterogeneity effects and asymmetric information transfer across agent capability levels. Motivated by these findings, we further introduce a fact-level multi-agent communication framework that replaces full reasoning-trace exchange with compact, gap-aware, and selectively routed information. Our experiments show that compact fact exchange improves reasoning alignment and task performance while reducing communication overhead, whereas more selective communication exposes a trade-off between acquiring distributed information, retaining local content, and communication efficiency. Overall, our results show that collective emergent alignment can be quantified, linked to information-transfer patterns, and used to guide more effective multi-agent communication.",
    "published": "2026-10-26T04:31:56Z",
    "updated": "2026-10-26T04:31:56Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.34836"
  },
  {
    "id": "2610.34833",
    "title": "Streaming Recurrent Memory",
    "authors": [
      "Mohamed Elsayed",
      "Minh Pham",
      "A. Rupam Mahmood"
    ],
    "abstract": "Natural intelligence learns from a continuous stream of sensorimotor experience: data can arrive at high bandwidth, and behavior adapts to feedback as soon as it arrives, even when it is delayed. In contrast, most modern deep learning systems rely on stored datasets, replay buffers, and retained contexts through which credit is later assigned. At high data rates, storing and revisiting past experience can be impractical under tight memory and computational constraints. This paper studies recurrent memory under a streaming learning constraint: the learner learns from experience as soon as it arrives without storing raw experience. We ask whether a streaming learner can maintain a state that remains useful for future prediction and control from delayed feedback. We introduce Streaming Recurrent Memory (SRM), a recurrent memory designed for the streaming setting which preserves information that may matter later while remaining trainable with one-step backpropagation through time (BPTT). SRM provides a streaming-compatible recurrence that is designed to recall past information by content or time, track elapsed steps, and compose transformations whose outcome depends on the order in which inputs are observed. Across controlled memory tasks and streaming applications, SRM learns effectively with one-step BPTT, outperforming recurrent baselines in associative recall and online language modeling while achieving near-perfect success in associative T-Maze with delayed rewards. These results suggest that fixing how inputs are stored in the recurrent state, while learning how that state is read out, enables effective streaming learning without long-range backpropagation.",
    "published": "2026-10-26T04:29:44Z",
    "updated": "2026-10-26T04:29:44Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34833"
  },
  {
    "id": "2610.34829",
    "title": "Logic Hijacking of RAG: Single-Document Poisoning via Local Optimization",
    "authors": [
      "Hangyi Zhao",
      "Bonan Zhang",
      "Fusen Guo",
      "Jiaheng Wei",
      "Chao Chen",
      "Tianqing Zhu"
    ],
    "abstract": "Single-document corpus poisoning under black-box access poses a severe threat to Retrieval-Augmented Generation (RAG). However, existing attacks predominantly rely on explicit factual refutations or imperative instruction overrides. Modern aligned LLMs often arbitrate such conflicts conservatively, rejecting overt contradictions in favor of parametric memory or clean retrieved context while triggering input guardrails. We propose MONOLOGUE, a single-document poisoning framework based on Logic Hijacking without explicit refutation. Rather than disputing the ground truth, our method concedes it as an authoritative historical baseline before introducing the update, weaving a grounded record-correction narrative (e.g., dated institutional reattributions) that presents the counterfactual target as the most recent update. To prevent suspicious live writes, payloads are refined entirely offline via local multi-dimensional gated optimization, coupling automated text quality audits with surrogate behavioral verification. Evaluations across three benchmarks, three retrieval backends, and four open-weight generator regimes show that our method achieves the strongest overall attack efficacy among the evaluated single-document poisoning attacks.",
    "published": "2026-10-26T04:23:01Z",
    "updated": "2026-10-26T04:23:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34829"
  },
  {
    "id": "2610.34826",
    "title": "TrustJev: Separating Policy Authority from Untrusted Evidence in LLM-Based Decisions",
    "authors": [
      "Zhiwei Xu",
      "Xuyang Liu",
      "Xiaolin Peng",
      "Weixian Deng",
      "Jiabao Gao",
      "Zirui Li",
      "Tian Qiu",
      "Boya Zhou",
      "Wei Jiao",
      "Hai Wan",
      "Xibin Zhao"
    ],
    "abstract": "Decision models enable software to select from predefined actions using natural language inputs. However, the external evidence that supplies facts for these decisions may also contain instructions that attempt to override the application's policy. We propose TrustJev, a framework combining protected policy scoring with bounded evidence corrections. A single Transformer backbone computes policy scores and a correction budget from trusted policy and candidates, then bounds evidence corrections by that budget. Paired supervision encourages stable predictions under instruction insertions that preserve task facts and changed preferences when edits change the correct answer. Authority supervision accommodates evidence when the policy alone cannot determine the decision. We evaluate a 0.6B implementation against 14 baselines on three datasets covering authentication, instruction hierarchy, and executable authorization rules. TrustJev achieves the highest mean Balance, the harmonic mean of accuracy on non-attack and attack inputs, exceeding the strongest baseline on each by 0.57-1.05 percentage points. In the authorization benchmark, it correctly answers all 32 attacks per source in a fixed pool for 95.77% of sources, compared with 80.98% for the strongest comparator. TrustJev maintains comparable inference memory and median latency, with additional overhead primarily during training.",
    "published": "2026-10-26T04:17:53Z",
    "updated": "2026-10-26T04:17:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34826"
  },
  {
    "id": "2610.34825",
    "title": "Interpretable Brain Age Prediction Using White Matter Fiber Orientation Distributions with Rotation-Equivariant Deep Learning",
    "authors": [
      "Chenyang Fan",
      "Robert D. Sanders",
      "Elie Matar",
      "Yixuan Yuan",
      "Xiang Li",
      "Sharon L. Naismith",
      "Fernando Calamante",
      "Jinglei Lv"
    ],
    "abstract": "Diffusion MRI (dMRI) provides information about white matter microstructure that can support brain age prediction. However, many existing prediction models use diffusion tensor imaging (DTI) scalar metrics that omit orientation information. Deep learning is increasingly used for brain age prediction, but conventional CNNs do not explicitly respect the geometric structure of orientation-dependent features. We present an interpretable brain age prediction framework that combines white matter fiber orientation distributions (WM-FODs) with an SE(3) (Special Euclidean group in 3 dimensions) equivariant CNN. The network operates directly on spherical harmonic (SH) coefficients of the FOD, preserving their transformation properties under rotation. Evaluation in 692 participants aged 36-90 years from the Human Connectome Project Aging dataset showed that the combined framework outperformed the evaluated DTI-based models and conventional CNNs. Averaging predictions from five cross-validation models yielded a mean absolute error of 3.54 years and Pearson's correlation of 0.958. Our results indicated that the performance advantage depended on combining WM-FODs with equivariant processing. Prediction accuracy was highest at a maximum SH order of Lmax = 2 and declined at higher orders. Tract-level occlusion, where each segmented tract was masked in turn, revealed age-dependent patterns of model sensitivity, with importance peaks in frontal projection pathways at 36-44 years, the fornix at 45-54 years, the callosal isthmus at 55-64 years, the middle cerebellar peduncle at 65-74 years, and the callosal genu at 75-90 years. These findings support rotation-equivariant processing of WM-FODs for accurate brain age prediction with anatomically interpretable model sensitivity.",
    "published": "2026-10-26T04:14:38Z",
    "updated": "2026-10-26T04:14:38Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34825"
  },
  {
    "id": "2610.33605",
    "title": "Data Governance for Generative and Agentic AI : Technology, Law, Economics, and Security",
    "authors": [
      "Narayana Darapaneni",
      "Padmaja K",
      "Gnana Chaithra D"
    ],
    "abstract": "This book develops a unified governance framework for systems that retrieve, generate, infer, remember and act on information from large language models and retrieval augmented pipelines to autonomous multi agent systems. Eleven chapters and eight appendices integrate three disciplinary lenses-technology, law and economics-across the full lifecycle: data quality, lineage and provenance; global data protection law and intellectual property; the economics of data governance; digital trust, cybersecurity and zero-trust architecture; ethics and responsible AI; governing generative AI pipelines; governing agentic AI and multi-agent systems; data governance in elections and the public sphere; AI regulation across six jurisdictions; and the design of a governance control plane for 2030. Each chapter is anchored in Indian law and institutions while maintaining a comparative, cross jurisdictional perspective.",
    "published": "2026-10-24T11:03:57Z",
    "updated": "2026-10-24T11:03:57Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.33605"
  },
  {
    "id": "2610.33594",
    "title": "Counterfactual Model Testing Under Distribution Shift",
    "authors": [
      "Joran Leest",
      "Ilias Gerostathopoulos",
      "Claudia Raibulet",
      "Patricia Lago"
    ],
    "abstract": "Deployed machine learning (ML) models can degrade as the distribution of their input data shifts. Such shifts can result from changes in the population or from data integrity issues in the pipeline that materializes model features, two sources that operate through different mechanisms. Because labels are often absent or delayed, it is common practice to track shifts in the data instead, but a detected shift does not indicate how it affects the model. We formulate this problem as online model testing under distribution shift. Testing requires reproducing the shift on a controlled baseline with known labels. Since the same shift can come from either source, doing so requires knowing which mechanism changed. We propose a methodology that reproduces observed changes in both mechanisms to estimate current performance and the potential gain from repairing observed data integrity issues. Experiments on real-world datasets with simulated faults show that separating the two sources generally improves both estimates, supporting this formulation. A churn prediction case illustrates how these tests can support monitoring and repair prioritization",
    "published": "2026-10-24T10:42:31Z",
    "updated": "2026-10-24T10:42:31Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.33594"
  },
  {
    "id": "2610.33592",
    "title": "Auditing evaluation artifacts and data leakage in large language model systems for rare disease diagnosis",
    "authors": [
      "Jian Yang",
      "Peilin Liu",
      "Xiaohan Li",
      "Songda Li",
      "Yu Cao",
      "Yuqing Feng",
      "Haomin Li"
    ],
    "abstract": "Augmented large language model (LLM) systems have reported high benchmark accuracies in rare disease diagnosis, yet their real-world clinical utility remains unproven. A recent meta-analysis flagged augmented LLM diagnostic evaluations as having a high risk of bias due to suspected data leakage; however, the precise impact of these vulnerabilities on model inference has yet to be fully quantified. In this study, we present a comprehensive empirical audit to quantify evaluation artifacts across prevailing AI paradigms, using a repository of over 60,000 cases from diverse public and independent clinical cohorts. By reconstructing a state-of-the-art agentic framework, we demonstrate that candidate-space contamination artificially inflates performance: enforcing strict cross-dataset isolation resulted in a marked performance decline, with the cross-dataset mean Recall@1 decreasing from 54.3% (under conventional one-vs-rest evaluation) to 40.3% (Hedges' g = 0.94). Similar spatial overfitting in supervised classifiers caused diagnostic accuracy to drop from an internal mean of 42.9% to 16.7% across external cohorts (Cohen's d = 2.01). Furthermore, we quantify how LLMs infer diagnoses by exploiting retrospective therapeutic cues in clinical narratives, and how temporal misalignment in foundational knowledge bases leads to performance fluctuations. We conclude that prevailing evaluation protocols for augmented LLM systems inadvertently reflect data leakage rather than genuine medical reasoning. To address these systematic artifacts, we propose a rigorous evaluation framework - coupling strict data-isolation protocols with standardized benchmarking safeguards - to ensure future diagnostic AI for rare diseases is evaluated on actual clinical robustness.",
    "published": "2026-10-24T10:35:48Z",
    "updated": "2026-10-24T10:35:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33592"
  },
  {
    "id": "2610.33589",
    "title": "Mix Forcing: Causal Pre-Training via Mixture Attention for Interactive World Models",
    "authors": [
      "Zelin Gao",
      "Hao Ouyang",
      "Jiapeng Zhu",
      "Qiuyu Wang",
      "Jingye Chen",
      "Zichen Liu",
      "Xing Zhu",
      "Yujun Shen",
      "Yinghao Xu"
    ],
    "abstract": "While interactive video world models require autoregressive generation, directly adapting pretrained bidirectional video diffusion models into autoregressive ones with teacher forcing can disrupt their visual priors and degrade autoregressive generation quality. In this paper, we introduce Mix Forcing, a causal pre-training paradigm for interactive video world models, implemented with the Mixture-of-Bidirectional-and-Autoregressive (MoBA) attention. Mix Forcing jointly trains a video diffusion model with both teacher forcing and bidirectional training, yielding a strong causal initialization for few-step post-training. In self-attention, Mix Forcing leverages teacher forcing to learn causal next-chunk prediction for autoregressive rollout, while using bidirectional attention to preserve pretrained visual priors. To support online text interaction, Mix Forcing further adopts a chunk-wise cross-attention design that conditions each video chunk on a shared environment prompt and its own local prompt, without exposing future instructions to the current chunk. Following causal pre-training on a 14B image-to-video model, we apply consistency and distribution matching distillation to obtain a four-step autoregressive generator. Experiments on our internal benchmark and public benchmarks, including WBench and SANA-WM-Bench, show that our model achieves state-of-the-art visual quality and timely event following with precise camera control. Notably, our model supports high-fidelity long-horizon generation without quality degradation even over one-hour rollouts. Project page is here: https://zelingao98.github.io/mixforcing",
    "published": "2026-10-24T10:31:58Z",
    "updated": "2026-10-24T10:31:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33589"
  },
  {
    "id": "2610.33582",
    "title": "Replicate What Varies: Resource Sharing for Domain-Randomized Embodied Simulation",
    "authors": [
      "Zixu Hao",
      "Weijun Wang",
      "Xiangyu Li",
      "Liang Mi",
      "Hao Wu",
      "Yunxin Liu",
      "Ting Cao"
    ],
    "abstract": "Simulation provides a low-cost sandbox where embodied agents can attempt tasks, observe outcomes, and learn from experience. Running many diverse simulation environments concurrently can consume substantial CPU and GPU memory because independently constructed scenes duplicate resources that remain unchanged across instances. We present Patchwork, a resource-sharing system for domain-randomized simulation, built around the representation $E=T+Δ$: a shared template contains common resources, and a patch records the mutations needed to construct a target environment. Patchwork separates randomization sampling from replay and selects reusable templates together with patches that preserve each target environment's intended configuration. Its layered runtime shares compiled model structure and immutable assets while keeping mutable parameters and simulation state private to each instance. We implement Patchwork on robosuite and MuJoCo and evaluate it on LIBERO-plus and RoboCasa365 workloads. At 32 replicas, shared-template execution reduces CPU RSS by 88-92% relative to process-per-environment execution. Controlled experiments show how sharing shifts memory growth toward template diversity and unique asset content rather than instance count, within the supported sharing boundaries.",
    "published": "2026-10-24T10:20:13Z",
    "updated": "2026-10-24T10:20:13Z",
    "categories": [
      "cs.DC",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.33582"
  },
  {
    "id": "2610.33581",
    "title": "UltraFlash: Accelerating Megapixel Visual Synthesis",
    "authors": [
      "Phuc Lai",
      "Anh Nguyen",
      "Phong Nguyen",
      "Anh Tran"
    ],
    "abstract": "Megapixel visual synthesis with latent diffusion models requires operating far beyond the resolutions at which these models are typically trained. Cascade refinement is a leading strategy for this setting: it starts from a base image at a native resolution and progressively upsamples it to the target resolution through multiple refinement stages. Each stage typically performs a pixel-space resolution transition followed by latent-space denoising. While prior acceleration efforts mainly focus on reducing denoising cost, we identify a complementary and underexplored bottleneck: the repeated movement of representations through the VAE. We call these operations pixel-space transitions. In cascade pipelines, intermediate latents are often decoded to RGB, resized, and re-encoded before refinement, while final latents are decoded patch by patch with dense overlap to suppress boundary artifacts. We propose UltraFlash, a transition-efficient approach that accelerates these VAE-heavy operations. UltraFlash has two components. Latent Hyperloop replaces intermediate RGB round trips with a learned latent-space shortcut that approximates the decode-resize-encode transformation without repeated VAE decoding and encoding. Sparse Patch-based Decoding accelerates final reconstruction by addressing patch seams caused by inconsistent GroupNorm statistics and reusing cached statistics across patches, enabling sparse VAE decoding with much smaller overlap. Integrated into a state-of-the-art cascade baseline, UltraFlash reduces 4K generation latency by approximately 2x while improving image quality. These results show that optimizing pixel-space transitions can improve both efficiency and fidelity, offering an effective route toward fast, high-quality megapixel visual synthesis.",
    "published": "2026-10-24T10:19:20Z",
    "updated": "2026-10-27T11:09:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33581"
  },
  {
    "id": "2610.33580",
    "title": "ZoomSEM: accelerating large-scale brain connectomics with intelligent SEM super-resolution",
    "authors": [
      "Jiateng Shou",
      "Zhiwei Xiong",
      "Ruikang Xu",
      "Zhicheng Wang",
      "Peiyao Shi",
      "Te Shi",
      "Haiqun Jin",
      "Chunying Yin",
      "Jun Guo",
      "Manfred Auer",
      "Hanchuan Peng",
      "Ruobing Zhang",
      "Feng Wu"
    ],
    "abstract": "Serial electron microscopy (EM) is essential for large-volume biological imaging and connectomics, yet its throughput remains a major bottleneck, with cubic-millimeter-scale brain imaging requiring months or years. Existing deep learning-based EM super-resolution methods are limited to small upscaling factors or rely on synthetic data, offering modest acceleration and limited practical impact. We introduce ZoomSEM, a deep learning-based super-resolution method to dramatically accelerate SEM imaging. Trained on real low- and high-resolution scanning electron microscopy (SEM) pairs, ZoomSEM enables reliable recovery of 4$\\times$, 8$\\times$, and up to 16$\\times$ higher-resolution images from fast low-resolution scans while preserving fine neuronal structures critical for connectomic analysis, achieving up to 30-fold effective acceleration. Extensive experiments across datasets of diverse biological samples demonstrate robust generalization under realistic low-resolution acquisition. This advance enables high-resolution, large-volume serial EM imaging at unprecedented speed, poised to transform connectomics and related fields.",
    "published": "2026-10-24T10:18:50Z",
    "updated": "2026-10-24T10:18:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33580"
  },
  {
    "id": "2610.33575",
    "title": "CADonatello: Towards Real-World Multi-Part 3D CAD Reconstruction",
    "authors": [
      "Ahmet Serdar Karadeniz",
      "Dimitrios Mallis",
      "Parsa Akbari Chianeh",
      "Kseniya Cherenkova",
      "Anis Kacem",
      "Djamila Aouada"
    ],
    "abstract": "Existing methods for CAD reconstruction from 3D scans achieve strong performance on standard benchmarks, yet their effectiveness often degrades in real-world scenarios where objects consist of multiple parts and scan artifacts such as noise. A key reason is that current CAD reconstruction datasets predominantly contain single-part models and clean geometric inputs, limiting the ability of learned models to generalize to realistic settings. In this work, we introduce CADonatello, a part-aware framework for reconstructing parametric CAD models from real-world 3D scans. Our approach first decomposes the input geometry into structurally meaningful components using a foundation-scale 3D part segmentation model, and then reconstructs each component independently through a cross-section-driven pipeline that performs sketch parameterization followed by an extrusion. To improve the robustness of sketch parameterization to scan-derived cross-sections, we further introduce CC3D Cross-Sections, a dataset of paired rasterized cross-section images from realistic scans and their corresponding parametric sketches derived from aligned CAD models. This dataset enables effective domain adaptation from clean CAD sketch images to scan-derived cross-section images. Extensive experiments demonstrate that the proposed approach improves generalization to noisy scans and enables reliable reconstruction of complex multi-part objects across multiple real-world CAD reverse engineering benchmarks.",
    "published": "2026-10-24T10:05:26Z",
    "updated": "2026-10-24T10:05:26Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33575"
  },
  {
    "id": "2610.33566",
    "title": "Distilling Dense Trajectory Teachers For Large-Motion Video World Models",
    "authors": [
      "Shuofeng Sun",
      "Linqing Zhao",
      "Haibin Yan"
    ],
    "abstract": "Video world models are expected to generate videos that accurately follow specified camera trajectories while maintaining consistent 3D structures. However, existing models are predominantly trained on densely sampled videos with small inter-frame camera motions. When applied to sparse, large step trajectories, they often produce frozen frames, inaccurate camera motion, and severe geometric drift. We attribute this degradation to a mismatch between the gradual viewpoint transitions seen during training and the large viewpoint changes required at inference time. To address this problem, we propose Dense Trajectory Teacher Distillation (DTTD), a post-training framework that transfers a model's generation capability from dense trajectories to large camera motions. Given a sparse trajectory, DTTD interpolates additional camera poses to construct a dense trajectory covering the same path. The frozen base model then generates reliable teacher videos along this familiar dense trajectory, and pose aligned teacher observations are used to evaluate candidate videos generated under the original sparse trajectory. In this way, the model serves as its own generation teacher, requiring neither additional video data nor a stronger external video generator. We further combine dense teacher supervision with geometry aware rewards that assess cross frame consistency and camera trajectory following, and use the resulting preferences for offline preference optimization. To stably expand the model's motion range, we introduce a cumulative curriculum that progressively incorporates larger motion steps while retaining simpler trajectories to reduce capability forgetting.",
    "published": "2026-10-24T09:35:13Z",
    "updated": "2026-10-24T09:35:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33566"
  },
  {
    "id": "2610.33565",
    "title": "WorldFailBench: Do World Models Understand Policy Failures?",
    "authors": [
      "Zheng Zhang",
      "Xiaoyang Tang",
      "Shuaiqi Cheng",
      "Jiakai Huang",
      "Zhongbo Wu",
      "Ziyi Zhang",
      "Yuan Si",
      "Zeyu Liu",
      "Weibo Gao",
      "Shunyu Liu",
      "Shan You",
      "Fei Wang",
      "Xiaogang Wang",
      "Dacheng Tao"
    ],
    "abstract": "Robot policy evaluation informs deployment decisions and policy improvement, but physical testing and simulator preparation require substantial effort. World models offer a complementary route through closed-loop interaction in generated environments. Recent benchmarks have demonstrated their potential as policy evaluators through outcome-based evaluation (i.e., assessing task success or failure). However, such evaluation does not establish whether world models faithfully simulate how policies fail. Misrepresenting failures can lead to incorrect diagnoses of policy weaknesses and make policies appear ready for deployment even when small scene changes cause them to fail. We therefore ask: do world models faithfully simulate how and at which stages policies fail, and under what conditions they transition from success to failure? To answer this question, we introduce WorldFailBench with three evaluation tasks. Failure reason tests whether models reproduce the observable errors policies make. Failure stage assesses whether failures concentrate at the same stages of full-task execution. Failure boundary examines whether models reproduce the conditions under which policies transition from success to failure under controlled scene changes in simulation. The benchmark covers manipulation tasks in the LIBERO and RoboTwin simulation environments and real-world manipulation tasks performed by the G1 humanoid robot. Experiments across seven world models reveal substantial gaps in their understanding of policy failures, providing guidance for developing more reliable world models for policy evaluation.",
    "published": "2026-10-24T09:33:52Z",
    "updated": "2026-10-24T09:33:52Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33565"
  },
  {
    "id": "2610.33564",
    "title": "What Remains OOD? OODConceptBench for Open-World Concept Recognition in Vision-Language Models",
    "authors": [
      "Zhiran Luo",
      "Zhiyong Yang",
      "Zitai Wang",
      "Sicong Li",
      "Qianqian Xu",
      "Qingming Huang"
    ],
    "abstract": "In the era of large-scale pretrained models, zero-shot generalization has increasingly blurred the boundary between known and unknown concepts. However, current evaluations do not directly reveal which open-world concepts different vision-language models can recognize. To study this problem, we introduce OODConceptBench, a hierarchical benchmark for open-world concept recognition on image-concept pairs. The full benchmark set (L1) contains 30,752 images, and the harder subset (L2) contains 14,285 images. The benchmark covers 560 concept phrases across seven open-world categories. We evaluate 37 vision-language models across release year, model family, and variant. We obtain three main findings. First, target-concept recognition is lower on L2 than on L1 across all 37 evaluated models. Second, later-released models do not necessarily achieve stronger open-world concept recognition. Third, an increase in overall recognition does not imply consistent improvement across all benchmark categories. Together, these results show that OOD remains a challenge even in the era of large-scale vision-language pretraining.",
    "published": "2026-10-24T09:33:41Z",
    "updated": "2026-10-24T09:33:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33564"
  },
  {
    "id": "2610.33562",
    "title": "Hybrid-time PINNs: Discontinuity-Aware Physics-Informed Neural Networks for Learning Hybrid Dynamical Systems",
    "authors": [
      "Shivanshu Tripathi",
      "Maziar Raissi"
    ],
    "abstract": "Hybrid dynamical systems flow continuously but jump at discrete events. Physics-informed neural networks (PINNs) fit data while enforcing known dynamics, but a single network is smooth in time and cannot model these jumps. We show that the more closely a PINN follows a jump, the larger its physics loss must be. We propose hybrid-time PINNs (HT-PINNs), which assign one network to each flow interval of the hybrid time domain and train the networks jointly with the jump times and the unknown parameters. The number of jumps and the sequence of modes are found by enumeration. HT-PINNs recover the number of jumps and the restitution coefficient of a bouncing ball. In a MuJoCo simulation of robotic disassembly, where a robot pulls a press-fitted pin out of a housing through a spring, HT-PINNs find the number of jumps and the sequence of modes, and estimate the static and kinetic friction coefficients with small errors of 0.1% and 1.7%.",
    "published": "2026-10-24T09:29:58Z",
    "updated": "2026-10-24T09:29:58Z",
    "categories": [
      "eess.SY",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33562"
  },
  {
    "id": "2610.32163",
    "title": "Forging Emotions: a deep learning experiment on emotions and art",
    "authors": [
      "Amalia Foka"
    ],
    "abstract": "Affective computing is an interdisciplinary field that studies computational methods that relate to or influence emotion. These methods have been applied to interactive media artworks, but they have focused on affect detection rather than affect generation. For affect generation, computationally creative methods need to be explored that have recently been driven by the use of Generative Adversarial Networks (GANs), a deep learning method. The experiment presented in this paper, Forging Emotions, explores the use of visual emotion datasets and the working processes of GANs for visual affect generation, that is, for generating images that can convey or trigger specified emotions. This experiment concludes that the methodology used so far by computer science researchers to build image datasets for describing high-level concepts such as emotions is insufficient and proposes utilizing emotional networks of associations according to psychology research. Forging Emotions also concludes that to generate affect visually, merely corresponding to basic psychology findings, such as bright or dark colours, does not seem adequate. Therefore, research efforts should aim to understand the structure of trained GANs and compositional GANs in order to produce genuinely novel compositions that can convey or trigger emotions through the subject matter of generated images.",
    "published": "2026-10-23T04:54:00Z",
    "updated": "2026-10-23T04:54:00Z",
    "categories": [
      "cs.CV",
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.32163"
  },
  {
    "id": "2610.32161",
    "title": "MG-REPA: Multi-Granularity Representation Alignment for Generative Target Speaker Extraction",
    "authors": [
      "Dohwan Kim",
      "Jung-Woo Choi"
    ],
    "abstract": "Generative target speaker extraction (TSE) models achieve high-quality extraction, but suffer from considerably slow training convergence. Representation Alignment (REPA) accelerates diffusion transformer training by aligning hidden states with a pre-trained Self-Supervised Learning (SSL) teacher. However, existing alignment in the speech and audio domain operates at a single granularity. For TSE, frame-level alignment leaves the global, time-invariant characteristics of the target speech implicit, whereas utterance-level alignment leaves the time-varying content implicit, even though extracting the target requires both. We propose Multi-Granularity Representation Alignment (MG-REPA), aligning the hidden states with an SSL model at the frame level and a speaker verification model at the utterance level. We further apply temporal normalization to the frame-level target, removing its utterance-level statistics so that each branch concentrates on its granularity. On Libri2Mix, MG-REPA reaches the OVRL and PESQ of a MeanFlow-TSE baseline with $3.0\\times$ and $2.1\\times$ fewer epochs, respectively. Trained for 750 epochs, it is competitive with the published 2,000-epoch baseline on intrusive metrics while improving non-intrusive metrics. An ablation demonstrates that MG-REPA outperforms alignment at a single granularity.",
    "published": "2026-10-23T04:51:51Z",
    "updated": "2026-10-23T04:51:51Z",
    "categories": [
      "eess.AS",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32161"
  },
  {
    "id": "2610.32159",
    "title": "Playing Bias: Epistemic Games for Interpreting Text-to-Image Models",
    "authors": [
      "Amalia Foka"
    ],
    "abstract": "Text-to-image (T2I) systems do not merely render prompts; they circulate defaults for \"what X looks like,\" shaping recognition through pose, camera, costume, props, and setting. While technical audits quantify disparities, they rarely cultivate the literacy needed to argue how images assemble stereotypes and confer authority. This paper translates a three-stage, humanities-informed framework into a set of epistemic games that make this cultural work visible and debatable: Interpret (art-historical close looking with AI outputs), Interrogate (counter-intent prompting as artistic exploration), and Expose (creative misuse through paired prompts with a constant motif and a BiasSlot rule, in which only the bias cue varies). In a pilot with undergraduate fine-arts students, the games shifted discussion from impressionistic reactions to concise, warranted hypotheses grounded in visual evidence, supported by lightweight classroom instruments that enabled reproducibility and structured collaboration. We argue that such game-based approaches foster critical literacy across educational contexts, equipping learners to recognize, discuss, and contest how T2I models encode bias.",
    "published": "2026-10-23T04:50:16Z",
    "updated": "2026-10-23T04:50:16Z",
    "categories": [
      "cs.CY",
      "cs.CV",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.32159"
  },
  {
    "id": "2610.32153",
    "title": "Sparsity-driven emergence of functional modularity in multitask neural networks",
    "authors": [
      "Bowen Shi",
      "Qi Ouyang",
      "Long Qian"
    ],
    "abstract": "Neural networks can learn multiple tasks, but how learning organizes shared computation into specialized and reusable components remains poorly understood. In this work, we show that sparsity inducing regularization promotes functional modularity in multitask networks without predefined module boundaries. Using functional profiling in multilayer perceptrons and a lightweight transformer, we identified compact, task-selective subnetworks, termed functional tokens. Across rule-based task families, selectively retaining these tokens preserves their associated functions while reducing performance on other tasks. Such specialization develops preferentially in deeper layers during training, while earlier layers retain shared computation. Regularization strength and form shape module compactness and specialization, while task weighting alters functional allocation. Moreover, extracted functional tokens can be recombined through alternative pathways to reconstruct a learned composite computation without retraining, preserving their connectivity and learned weights. Our results suggest that sparsity-constrained optimization shapes not only parameter use but also the organization and reuse of learned computation.",
    "published": "2026-10-23T04:38:24Z",
    "updated": "2026-10-23T04:38:24Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32153"
  },
  {
    "id": "2610.32151",
    "title": "The LLENS Platform for On-Premises Large Language Model Agents in a Japanese University Hospital: Development and Evaluation Study",
    "authors": [
      "Ken Enda",
      "Jien Saito",
      "Masami Mukai",
      "Feng Han",
      "Emir Turkes",
      "Tatsumi Kusakabe",
      "Reona Umeki",
      "Kazuhiro Sumiyoshi",
      "Mitsuya Numata",
      "Takumi Tanikawa",
      "Akira Endoh",
      "Kenji Hirata",
      "Atsushi Yoshida",
      "Kohsuke Kudo",
      "Shinya Tanaka"
    ],
    "abstract": "Large language model agents that use tools could take on part of the electronic health record and desk work that occupies physicians' time, but in many hospitals the medical information systems run inside closed networks, so the model and the agent harness must also be inside the network. We designed, implemented, and deployed LLENS, a clinical support AI agent platform that runs inside the closed network of Hokkaido University Hospital on a single host with 8 NVIDIA H200 GPUs, the open-weight model Kimi K2.6 (~1 trillion parameters), and a web application rebuilt from Open WebUI. The harness has 10 components, including page image reading, full-text attachment input, a path-addressed document tree without a vector index, a network-isolated sandbox, artifact return, self-checking of generated output, subagents, and saved procedures. Kimi K2.6 was chosen from 3 open-weight candidates and scored 480/500 on the 2026 Japanese Medical Licensing Examination; it generated 119 tokens/s for a single user and served 16 concurrent requests at 908 tokens/s in total. On 180 questions over hospital documents (3 seeds each), mean accuracy was 10.7% with no documents, 81.3% with fixed retrieval (top 10 chunks of one lexical search), and 97.2% with interactive access, in which the model reads with document tools and the sandbox (15.9 percentage points above fixed retrieval, 95% CI 10.9-21.3); the difference lay in filtering/counting questions (16.7% vs 87.8%). In an automated test of 13 work scenarios (4 runs each), the expected components were triggered in all runs for 12, and 5 scenarios were run with synthetic data on the deployment host. The platform has run on the hospital network since September 14, 2026.",
    "published": "2026-10-23T04:34:26Z",
    "updated": "2026-10-26T04:31:45Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32151"
  },
  {
    "id": "2610.32147",
    "title": "Implicit Neural Representations for Variational Problems on Graphons",
    "authors": [
      "Taeyoung Kim",
      "Jineon Baek",
      "Joonkyung Lee",
      "Hongseok Yang"
    ],
    "abstract": "We propose a neural exploratory framework for variational problems over graphons, i.e., symmetric measurable functions $[0,1]^2 \\to [0,1]$, that arise as limits of dense graph sequences. Such problems are central to two parts of the mathematical literature: extremal graph theory, which studies graph parameter optimisation under given restrictions, often for those graphs with a large number of vertices, and the large deviation theory of dense random graphs, which characterises the structure of rare events through constrained graphon optimisation. We represent graphons by implicit neural networks and optimise graphon objectives by gradient descent. Our design combines three ingredients: a multi-scale sinusoidal residual architecture biased toward sharp, step-like graphons; an embedded solver that enforces a single empirical density constraint and is differentiated by implicit differentiation; and symmetry-aware Monte Carlo estimators. On generalised Turán problems that previously required substantial human effort, our framework rediscovers known optimal graphons without human intervention. Applied to open instances, it produces candidate optima, including a previously unreported family of extremal structures. Applied to the variational problems from the large deviation theory of Erdős--Rényi random graphs, the framework produces new candidate optimal graphons across both upper- and lower-tail regimes for multiple pattern graphs; for the case of the triangle graph and the upper-tail regime, these candidates improve upon the best-known reference construction of Lubetzky and Zhao. The structures found by our framework have also led to new theorems on the optimal graphons for both families of problems.",
    "published": "2026-10-23T04:25:44Z",
    "updated": "2026-10-23T04:25:44Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG",
      "math.CO"
    ],
    "url": "https://arxiv.org/abs/2610.32147"
  },
  {
    "id": "2610.32146",
    "title": "Separating Angular Alignment from Radial Ordering in Hyperbolic Vision-Language Models",
    "authors": [
      "Mingyang Gao",
      "Yuwei Wu",
      "Shiyu Luo",
      "Wei Wu",
      "Xiaomeng Fan",
      "Qihao Lv",
      "Haoyu Zhang",
      "Rui Gao",
      "Bingzhen Liu",
      "Zhi Gao",
      "Che Sun"
    ],
    "abstract": "Hyperbolic vision-language models are well suited to modeling the hierarchical structure of multimodal data, because hyperbolic volume grows exponentially with radius, enabling low-distortion representations of tree-like taxonomies from general to specific concepts. However, existing pretraining objectives for hyperbolic vision-language models entangle semantic alignment with entailment modeling, forcing radial coordinates to simultaneously encode semantic matching and hierarchical structure, leading to conflicting geometric constraints. In this paper, we introduce AURORA, a hyperbolic vision-language framework that decouples the objectives through angular alignment and a novel Radial-Angular Order Cone (RAOC) for entailment modeling. Angular alignment captures semantic similarity while preserving the radial structure for representing hierarchies. Unlike conventional entailment cones, RAOC determines angular allowance from relative parent-child radial gaps. It is incorporated into hierarchical entailment contrastive training to capture partial-order relations. We further introduce a norm regularization term that prevents undesirable radial degeneration for stable training. We train models on millions of image-text pairs and evaluate them across zero-shot classification, image-text retrieval, hierarchical reasoning, and compositional understanding. Our model consistently outperforms strong Euclidean and hyperbolic vision-language baselines, demonstrating the effectiveness of decoupling semantic alignment from hierarchical entailment modeling.",
    "published": "2026-10-23T04:25:17Z",
    "updated": "2026-10-23T04:25:17Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.32146"
  },
  {
    "id": "2610.32142",
    "title": "Rethinking LoRA Initialization for Robust Asymmetric Learning Rates",
    "authors": [
      "Disen Liao",
      "Yaoliang Yu"
    ],
    "abstract": "Low-Rank Adaptation (LoRA) is often highly sensitive to learning-rate (LR) choices. Recent empirical studies suggest that, once LRs are carefully tuned, vanilla LoRA can remain competitive with many proposed LoRA variants. This shifts the central practical question from designing ever more variants to reducing the cost and brittleness of LR selection. LoRA+ addresses this issue with asymmetric LRs, using a larger LR for the up-projection matrix $B$ than for the down-projection matrix $A$. However, the ratio $η_B / η_A$ itself becomes an additional hyperparameter: large ratios can improve adaptation, but under the standard LoRA initialization they can also cause unstable training and ratio-dependent performance collapse. We identify the source of this brittleness through a signal--noise decomposition of LoRA dynamics. Under standard \\initA, the update contains an initialization-induced noise term whose magnitude can be affected by the LR for $B$, $η_B$, the initialization scale $β$, and the adapter rank $r$. In practical LLM fine-tuning, this non-vanishing noise can limit the performance gains expected from LoRA+ style asymmetric LRs. To suppress this effect, we propose \\initAA, a simple initialization that scales the variance of $A$ as $σ_A^2 \\propto n^{-2}$ while keeping $B_0=0$. Under matched rank and training time for both initializations, this reduces the initialization-noise energy by an additional factor of $1/n$, stabilizing asymmetric LoRA training while preserving zero initial adapter output. Empirically, \\initAA substantially widens the stable LR region across initialization scales, adapter ranks, and LoRA update multipliers. Across tasks and models, \\initAA reduces best-ratio drift, prevents the high-ratio collapse observed with standard \\initA, and makes the width-based guideline $η_B \\approx n η_A$ a useful starting point for finite pretrained models.",
    "published": "2026-10-23T04:15:33Z",
    "updated": "2026-10-23T04:15:33Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32142"
  },
  {
    "id": "2610.32141",
    "title": "Beyond Data Schedule: Fast LLM Pretraining on Data Mixtures by Loss-Reweighting",
    "authors": [
      "Jiazheng Li",
      "Huaqing Zhang",
      "Jing Xu",
      "Tianle Cai",
      "Jingzhao Zhang"
    ],
    "abstract": "Large language models often acquire specialized capabilities through successive pretraining stages, but these gains can come at the cost of forgetting earlier knowledge. In this work, we investigate whether such trade-offs can be improved by changing how strongly each domain contributes to learning while keeping its data exposure fixed. We find that, in controlled knowledge--mathematics experiments, loss reweighting produces a single checkpoint that surpasses the best knowledge and reasoning scores attained along either stage trajectory. This reveals an independent control that data-mixture ratios alone do not capture. Building on this finding, we propose LARE (Loss-Adaptive Reweighting under fixed Exposure), which automatically adjusts domain weights from running loss statistics. Motivated by a theoretical analysis of gradient noise, its normalized inverse-square-root rule balances relative loss scales without changing the sampled mixture or requiring additional runs to search for weights. Across knowledge, mathematics, and code, \\Method{} improves all five evaluated benchmarks for a 1.5B model trained on 240B tokens, averaging +7.84 pp over a matched direct mixture, including gains of +17.06 pp on GSM8K and +9.00 pp on MATH. These findings demonstrate that adjusting domain loss scales can improve joint capabilities without additional domain exposure.",
    "published": "2026-10-23T04:09:46Z",
    "updated": "2026-10-23T04:09:46Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32141"
  },
  {
    "id": "2610.32132",
    "title": "SyncPro: Synchronous Reasoning and Responding for Proactive Streaming Video Understanding",
    "authors": [
      "Xueyun Tian",
      "Bingbing Xu",
      "Jiaming Liu",
      "Jinpeng Yu",
      "Yang Shi",
      "Yu Zhao",
      "Ruihua Huang",
      "Yuanzhuo Wang",
      "Huawei Shen"
    ],
    "abstract": "Proactive streaming video understanding requires assistants to track unfolding events and respond when a user's requested condition is met. To make these decisions, assistants must accumulate relevant evidence and reassess response conditions as new observations arrive. Existing work offers complementary capabilities for this process: proactive video assistants learn when to respond, while streaming video reasoning methods generate scheduled intermediate text to organize observations and support subsequent answers. Together, these capabilities provide a foundation for proactive reasoning, but how to coordinate ongoing reasoning with timely responses remains underexplored. In a direct adaptation, fixed reasoning intervals can trigger updates when nothing relevant has changed or postpone useful updates until the next scheduled step. Sharing one generation path also couples two distinct requirements: preserving evidence for future decisions and producing only the response requested by the user. Moreover, responses generated after reasoning must wait for it to finish, even when sufficient evidence is already available. To address these challenges, we introduce SyncPro, a synchronous dual-stream framework with specialized generation paths for evidence tracking and user-facing responses. Its Inner and Response branches share causal history and activate independently, allowing relevant evidence changes to trigger internal updates and responses to proceed concurrently with ongoing reasoning. We construct 189K dual-stream examples and train SyncPro through supervised fine-tuning followed by trajectory-level reinforcement learning. Experiments across three proactive benchmarks show improved response timing and more accurate answers to user requests.",
    "published": "2026-10-23T03:58:17Z",
    "updated": "2026-10-23T03:58:17Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.32132"
  },
  {
    "id": "2610.32129",
    "title": "Shorter Is Not Cheaper: A Controlled Comparison of Declarative Animation Specifications and Free-Form Code for LLM-Generated Explanations",
    "authors": [
      "Jiantang Huang"
    ],
    "abstract": "Chat assistants increasingly answer conceptual questions with interactive, animated explanations, generated either as free-form HTML/JavaScript or as declarative specifications that a fixed runtime plays. The declarative route is widely expected to be cheaper, faster and more reliable, because its outputs are shorter and constrained. We test this expectation in controlled comparisons whose hypotheses and analysis plans were frozen before the runs. We designed ExplainSpec, a time-indexed declarative animation format, and an observation contract that makes every generated explanation programmatically inspectable; validated, pacing-agnostic checkers score 20 explanation requests from five domains. Three Claude models (360 jobs) and, in a follow-up, the open-weight Qwen3-14B with thinking enabled and disabled (240 jobs) answered every request in both formats. For every model the specifications were 25-48% shorter in answer tokens (output excluding reasoning), yet with reasoning enabled total output fell significantly only for the largest Claude model and no model generated significantly faster. The reasons differed. The Claude models reasoned far more before writing specifications (exploratory; for the two larger models, from 15-20% to 85-88% of generations). Qwen3-14B reasoned about as much in both formats (a pre-registered test of this shift was not supported), and its shorter answers saved little against a reasoning trace more than twice as long. Nor were specifications more reliable: free-form pages were valid after one repair round in 95-100% of jobs for every model, whereas Qwen3-14B produced valid specifications in only 33% of jobs and passed all semantic tests in 17% (HTML/JavaScript: 62%). For reasoning models, a shorter format alone therefore does not make generation cheaper, faster or more reliable, and a format learned in context can cost reliability.",
    "published": "2026-10-23T03:56:19Z",
    "updated": "2026-10-23T03:56:19Z",
    "categories": [
      "cs.CL",
      "cs.HC",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.32129"
  },
  {
    "id": "2610.32127",
    "title": "MPQ: A Message-Passing View of Post-Training Quantization",
    "authors": [
      "Yanshuo Chen",
      "Chenxi Liu",
      "Reza Shirkavand",
      "Heng Huang"
    ],
    "abstract": "Post-training quantization (PTQ) is a key technique for efficiently deploying large language models, as it compresses weights into low-bit representations without retraining. Existing PTQ solvers, including GPTQ, LDLQ, and block coordinate descent, commit each weight block to a single codeword before its neighbors are considered, leaving near-optimal alternatives unexplored. In this work, we cast row-wise PTQ as posterior inference over discrete codebooks, in which existing solvers correspond to a zero-temperature, hard-decision limit retaining only the top codeword per block. We propose Message-Passing Quantization (MPQ), which preserves soft posterior information across blocks during inference and commits to hard codewords only at the output stage. MPQ first uses vector approximate message passing to compute approximate blockwise posteriors, then refines a hard-decision initialization by exact block coordinate descent. Across 2-bit lattice and 3- and 4-bit scalar quantization on dense language models from Llama, Qwen, and Mistral families, MPQ improves perplexity and zero-shot accuracy over strong hard-decision baselines, and composes favorably with preprocessing techniques such as activation-aware scaling and incoherence processing. Our implementation is available at https://github.com/poseidonchan/MPQ.",
    "published": "2026-10-23T03:54:41Z",
    "updated": "2026-10-23T03:54:41Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.32127"
  },
  {
    "id": "2610.30895",
    "title": "Your Home Remembers: A Voice-Enabled Household Memory Assistant for Conversational Retrieval",
    "authors": [
      "Aleix Sant",
      "Jordi Luque",
      "Fernando López",
      "Pablo Gómez",
      "Carlos Escolano"
    ],
    "abstract": "Everyday household information is often exchanged in conversations but never written down, making details easy to forget or misremember. We present a voice-enabled smart-home assistant that acts as a household memory by recording conversations and retrieving information from stored and newly captured speech. The assistant runs on an Android tablet with a modular architecture in which speech-recognition, diarisation, embedding and language models can be configured or replaced through an orchestration layer. On-device wake-word detection and VAD-based query capture support hands-free interaction. Recorded audio is processed in configurable chunks, transcribed and diarised, converted into turn-aware passages with conversation-level timestamps, and indexed in a vector store. For memory queries, a retrieval-augmented generation pipeline selects key passages and uses them to generate an answer. The interface supports recording, conversation management and inspection of timestamped sources.",
    "published": "2026-10-22T08:19:07Z",
    "updated": "2026-10-22T08:19:07Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.30895"
  },
  {
    "id": "2610.30893",
    "title": "Working Through Representation: Malleable Workspaces for Human-Agent Knowledge Work",
    "authors": [
      "Nan Chen",
      "Long Ling",
      "Luna K. Qiu",
      "Zilong Wang",
      "Yuqing Yang"
    ],
    "abstract": "Generative AI supports knowledge work, yet conversational histories may not capture the evolving organization that guides subsequent action. We introduce the Malleable Workspace, a conceptual model of how humans and agents form and revise a Work Representation and use its organization to advance work within a wider Work Environment. We developed it iteratively through conceptual analysis, comparison of 58 papers, and the construction and three-month longitudinal study of MalleableSpace with seven experienced agent users. Systems varied in what they represented as units and relations. System-assembled context was common; more systems supported local incorporation of agent outputs than reorganization, and fewer supported consequential agent-driven changes beyond the representation. The field study showed how representational roles and organization developed in use. These observations refined the model's account of how representation-grounded action depends on and can change the Work Environment. We contribute a conceptual and analytic foundation for representation-centered human--agent design.",
    "published": "2026-10-22T08:12:49Z",
    "updated": "2026-10-22T08:12:49Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.30893"
  },
  {
    "id": "2610.30875",
    "title": "HimmBO: High-Dimensional Interactive Model-Merging Bayesian Optimization for Image Generation",
    "authors": [
      "Jinyuan Mao",
      "Zhihao Shen",
      "Chenxi Liu"
    ],
    "abstract": "Fine-tuning has become a common way to customize text-to-image models, leading to community collections of over 100K lightweight adapters. Adapters sharing a base model can be merged with continuous coefficients. This turns a large collection into a high-dimensional continuous design space, which recent work explores interactively using preferential Bayesian optimization (PBO). However, existing approaches are limited to a few dozen preselected adapters and require expensive image generation in every interaction round. We introduce HimmBO, a two-stage method that scales preference-driven adapter merging to much larger collections while reducing image-generation cost. Its screening stage recovers the active adapter set through level-set estimation over pre-generated images, requiring no image generation. The refinement stage then optimizes merge coefficients in the recovered low-dimensional subspace. Both stages use a style-aware kernel, allowing preference information to transfer between visually similar adapters. In simulated-user image-matching experiments, HimmBO achieves higher final similarity than all comparisons while reaching a given similarity with under one tenth of the image generations required by prior work. Its performance remains stable as the collection grows to 1080 adapters, while competing methods degrade substantially.",
    "published": "2026-10-22T07:56:10Z",
    "updated": "2026-10-22T07:56:10Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.30875"
  },
  {
    "id": "2610.30873",
    "title": "MOER: Mix-Policy Optimization under Expert Prefix Guidance with Selective Rollback",
    "authors": [
      "Xuyang Zhong",
      "Jiuding Yang",
      "Yiwen Guo",
      "Chen Liu"
    ],
    "abstract": "Mix-policy optimization incorporates off-policy expert data into the reinforcement learning (RL) loop to transcend the capability boundary of on-policy RL. However, existing methods either provide static full-trace guidance that suppresses self-exploration, or adopt expert prefix guidance without correctness guarantees, leading to suboptimal performance or even training collapse. In this paper, we propose MOER, a mix-policy optimization framework that harmonizes expert guidance with self-exploration. MOER injects a decaying expert chain-of-thought prefix into the prompt and lets the model complete the remaining reasoning, with the prefix length progressively annealed to encourage self-exploration. A selective rollback mechanism replaces failed completions with the original full expert trace, guaranteeing the correctness of every off-policy trajectory. Furthermore, a harmonized mix-policy objective optimizes on-policy tokens with a GRPO loss while supervising both expert prefix and completion tokens with a trust-region SFT loss, substantially stabilizing training. Extensive experiments show that MOER achieves the highest average scores in mathematical and general domain reasoning tasks, outperforming all basic and mix-policy baselines, and generalizes consistently across diverse tasks, model scales, and base model categories. Codes are available at https://github.com/CityU-MLO/MOER.",
    "published": "2026-10-22T07:54:45Z",
    "updated": "2026-10-22T07:54:45Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30873"
  },
  {
    "id": "2610.30867",
    "title": "Folding Pooled Usage Examples into the Tool Index Lowers Retrieval of Unused Tools",
    "authors": [
      "Abhijit Chakraborty"
    ],
    "abstract": "AI agents often find tools by searching their documentation. Agents that share a tool catalog can also pool usage examples: past requests, each tagged with the tool that handled it. We ask what pooling does to tools no agent has used yet. Adding each usage example to the search index as an extra entry for its tool (folding) helps tools that have examples, but on two of three catalogs it sharply lowers how often a needed unused tool reaches the top five results; on StableToolBench with our main embedding model, the share falls from 73 to 40 percent of queries. When the extra entries hold documentation from other tools instead of requests, the loss is much smaller, though differences in content or writing style could also explain this. We introduce ZoE (Z-scores over Evidence), a scoring rule that scores the documentation and the usage of a tool separately, so a tool without usage keeps its documentation score. On all three catalogs and with both embedding models we tested, ZoE retrieves unused tools more often than a router that reserves result slots for usage matches. With our main embedding model, the router retrieves more of the other tools on two catalogs, and in post hoc comparisons a simpler rule that adds a constant to the scores of tools with usage shows no detected difference from ZoE on unused tools. For five simulated agents on one catalog, folding lowered retrieval of unused tools for every agent; with ZoE no average drop was detected, though some agents still lost. Evaluations of pooled agent experience should report tools no agent has used separately from the average.",
    "published": "2026-10-22T07:45:24Z",
    "updated": "2026-10-25T04:34:55Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30867"
  },
  {
    "id": "2610.30866",
    "title": "Verus-Insight: Towards Explainable Artifact Detection in AI-Generated Videos",
    "authors": [
      "Zhuoran Zhang",
      "Yang Shi",
      "Qixun Wang",
      "Tengfei Liu",
      "Yuqi Tang",
      "Xuanyu Zhu",
      "Yizhuo Jia",
      "Jingyun Hua",
      "Shixuan Liu",
      "Xianghua Ying",
      "Haotian Wang",
      "Yuanxing Zhang",
      "Pengfei Wan",
      "Wenjing Yang"
    ],
    "abstract": "Recent advances in video generation have made synthetic videos increasingly realistic, placing greater demands on reliable AI-generated video detection. Existing artifact-based detectors typically identify generation artifacts as evidence for source prediction, yet they may either fail to recognize subtle artifacts or reach the correct source decision without faithfully identifying the evidence underlying it. In this work, we systematically investigate how to design and train effective artifact detectors and formulate artifact detection as a structured process comprising three complementary capabilities: Inspection Planning, which determines what should be examined; Evidence Verification, which verifies whether the inspected content exhibits genuine generation artifacts; and Evidence Aggregation, which integrates the verified evidence into the final source decision. Building on this formulation, we introduce Verus-Insight, trained with human-anchored full-process supervision and progressive capability training to strengthen both fine-grained artifact detection and video-level detection. We further introduce Verus-Bench, a benchmark with fine-grained human annotations of perceptible artifacts for evaluating artifact detection. Extensive experiments across diverse benchmarks demonstrate that Verus-Insight achieves strong performance in both fine-grained artifact analysis and AI-generated video detection, with substantial gains in recovering human-perceived artifacts. Further analyses reveal that the three capabilities are complementary yet distinct, and that Verus-Insight more reliably converts relevant inspection targets into supported artifact evidence without increasing spurious artifact claims.",
    "published": "2026-10-22T07:44:36Z",
    "updated": "2026-10-23T05:22:18Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.30866"
  },
  {
    "id": "2610.30863",
    "title": "Cross-Spectral Feature Fusion for Multispectral Document Binarization",
    "authors": [
      "Yasas Savinda",
      "Maheshi Buddhinee Dissanayake"
    ],
    "abstract": "Historical document binarization remains challenging when faded ink, bleed-through, and background degradation exhibit wavelength-dependent behavior across visible and near-infrared observations. This study investigates whether adaptive cross-spectral feature fusion and targeted structural guidance can improve multispectral document binarization beyond fixed fusion and generic attention mechanisms. Four registered SMADI bands at 500, 600, 700, and 1000 nm are processed using a multi-branch conditional generative adversarial network (cGAN). Visible, NIR, and structural feature streams are fused at encoder depth L = 3 using spatial- and channel-wise softmax gating, while auxiliary edge maps derived from selected VIS-NIR band pairs provide targeted structural guidance. Nine controlled fusion and structural configurations are evaluated using five-fold document-level cross-validation, DIBCO-standard metrics, and Holm-corrected statistical testing. The F3 + NIR edge-guided configuration provides the strongest overall performance among the evaluated models, achieving mean F1 = 0.7916, p-FM = 0.8044, and IoU = 0.6654. Relative to the fixed Mid AVG baseline, it improves F1 by 0.0269, p-FM by 0.0360, and IoU by 0.0321, with all three gains remaining statistically significant after Holm correction. Mean NRM and DRD are also reduced, although these reductions are not statistically significant after correction. Targeted cross-spectral structural guidance provides an effective mechanism for regulating intermediate multispectral fusion, improving primary foreground-overlap performance while retaining the complete four-band observation.",
    "published": "2026-10-22T07:42:35Z",
    "updated": "2026-10-22T07:42:35Z",
    "categories": [
      "cs.CV",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2610.30863"
  },
  {
    "id": "2610.33094",
    "title": "Beyond Correctness: Attribution of Natural-Language Documentation for Formal Libraries",
    "authors": [
      "Sirui Jiang",
      "Dongming Xiang",
      "Shichao Wu",
      "Yuxuan Zhou",
      "Yihong Wu",
      "Fangze Zhu",
      "Wang Lin",
      "Guanjun Liu"
    ],
    "abstract": "Formal languages are widely used in software engineering to specify and verify program properties. Because their mathematical notation and logic are hard to read, developers often rely on natural-language documentation to understand the functions in formal libraries. Yet a documentation statement can be provably true and still hold after the function's behavior changes. We call a statement's dependence on the function's specific behavior attribution, and we give a method to check it. We design and implement DocAuth, a documentation-generation method that uses attribution to decide what to publish and attaches to each published sentence the formal property recovered from it, together with checkable evidence. On 150 functions from the Community Books library of the ACL2 theorem prover, three large language models produce proved but non-attributable properties for about a third of the functions. DocAuth matches or exceeds the attribution rate of a mutation-based filter while delivering 37% more attributable sentences. Compared with a pipeline that checks truth alone, it raises the share of published sentences that a second model confirms as attributable from 82.9% to 94.7%. These results show that provable truth does not guarantee that documentation reflects what a function actually does. Attribution complements truth as a criterion for generating and evaluating documentation for formal libraries.",
    "published": "2026-10-22T07:42:17Z",
    "updated": "2026-10-22T07:42:17Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33094"
  },
  {
    "id": "2610.30861",
    "title": "Direct Forcing: Single-Stage Training with Representation-Space Supervision for Few-Step Autoregressive Video Generation",
    "authors": [
      "Haojun Xu",
      "Jie Huang",
      "Chuyang Zhao",
      "Xin Lu",
      "Mingchen Zhong",
      "Zihao Fan",
      "Haoyang Huang",
      "Linjiang Huang",
      "Si Liu"
    ],
    "abstract": "Few-step autoregressive video generation enables low-latency streaming, yet prevailing training pipelines separate causal adaptation from distribution matching. Recent representation-based text-to-video methods retain this separation by starting with an ODE initialization stage, even when the target distribution is defined directly by reference videos. We introduce \\method, the first single-stage framework that uses reference videos both as paired examples of how a history continues and as a target population for self-generated rollouts. Specifically, Direct Forcing is trained with two complementary signals: (1) Causal Continuation Alignment learns paired spatiotemporal correspondence under reference histories; and (2) Rollout Distribution Matching employs maximum mean discrepancy to align the representation distributions of self-generated and reference videos. To coordinate these signals, we introduce Dynamic Gradient Balancing, which adapts their relative gradient contributions during training. Experiments with Wan2.1-1.3B show that Direct Forcing learns a four-step autoregressive generator in 250 updates without a separate ODE initialization stage or online diffusion-score supervision, achieving 84.63 VBench Total and 86.01 Quality.",
    "published": "2026-10-22T07:41:41Z",
    "updated": "2026-10-24T18:24:41Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30861"
  },
  {
    "id": "2610.30854",
    "title": "CAVC: Convergence-Adaptive Audio-Visual Cache for Modality-Asymmetric Diffusion Generation",
    "authors": [
      "Lifan Jiang",
      "Yibo Zhao",
      "Senlin cheng",
      "Bolei Xu",
      "Xiaobo Li",
      "Can Ye",
      "Dehai Zhao",
      "Deng Cai",
      "Boxi Wu"
    ],
    "abstract": "Diffusion-based audio-visual generation methods typically perform joint denoising of audio and video latents throughout the entire sampling trajectory, repeatedly executing modality-specific denoising branches and cross-modal attention at every timestep. However, we observe that such uniform joint computation is not always necessary. The key is a modality-asymmetric recoverability: audio-side drift introduced by mid-stage caching can be substantially reduced by only a few terminal joint denoising steps, whereas video-side degradation caused by caching leads to persistent loss of motion and temporal details. This asymmetry suggests that inference acceleration should selectively cache recoverable audio-side computation while preserving full video refinement. Motivated by this observation, we propose \\textbf{Convergence-Adaptive Audio-Visual Cache (CAVC)}, a training-free modality-asymmetric caching framework. CAVC adopts a sandwich-structured computation allocation: after detecting that audio denoiser outputs enter a cache-tolerant regime, it caches and reuses the audio denoiser output to bypass audio denoising and cross-modal attention in the middle stage, while the video branch continues independent spatio-temporal refinement; a few joint steps are then restored at the end to reduce accumulated cross-modal drift and improve synchronization. Experiments across multiple public benchmarks demonstrate that CAVC achieves 1.10--1.35x wall-clock acceleration, improves several visual dynamics and temporal statistics, and maintains competitive audio fidelity and audio-visual alignment.",
    "published": "2026-10-22T07:30:21Z",
    "updated": "2026-10-22T07:30:21Z",
    "categories": [
      "cs.CV",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.30854"
  },
  {
    "id": "2610.30851",
    "title": "ADAPT for Science: A Multi-Agent System for Self-Evolving Scientific Optimization",
    "authors": [
      "Zhaoran Feng",
      "Yuchen Ni",
      "Jianan Liu",
      "Lemao Liu",
      "Dejing Dou",
      "Kairui Feng"
    ],
    "abstract": "Scientific discovery often requires identifying a small number of high-performing designs in vast, constrained search spaces. This is difficult when evaluations are costly, feasible solutions are sparse, parameters are strongly coupled, and physical constraints are strict. Recent AI for AI methods can automatically improve algorithms and optimization procedures. However, general purpose approaches are not designed around scientific priors, physical constraints, and limited evaluation budgets. We introduce ADAPT for Science, a multi-agent framework that treats scientific optimization as two coupled decisions: where to search and how to search. ADAPT uses historical designs to identify promising and diverse initial conditions, progressively concentrates computation on favorable search directions, and evolves the optimization procedure from execution feedback. We evaluate ADAPT on the design of gravitational wave detectors using a differentiable physics simulator and eight unseen detector topologies. Under matched scientific evaluation budgets, ADAPT achieves a mean loss of 0.204 +/- 0.101, reducing loss by 54.9% relative to the best classical optimizer and by 62.2% relative to the best general purpose agentic evolution baseline. ADAPT achieves the lowest loss on all unseen topologies among the evaluated baselines. ADAPT provides a step toward scientific optimization systems that continuously learn from prior experience and their own search outcomes.",
    "published": "2026-10-22T07:28:46Z",
    "updated": "2026-10-22T07:28:46Z",
    "categories": [
      "cs.AI",
      "cs.MA",
      "physics.optics"
    ],
    "url": "https://arxiv.org/abs/2610.30851"
  },
  {
    "id": "2610.30847",
    "title": "Bifurcations from Weight Space: JEPAWG on Parametric Dynamical Systems",
    "authors": [
      "Tobias Göbel",
      "Miranda C. N. Cheng"
    ],
    "abstract": "Trained network weights are increasingly treated as data, but there is rarely ground truth about what a population of models should encode, which hampers systematic validation of weight-space methods. This makes parametric dynamical systems a natural test-bed: the dynamics change qualitatively at submanifolds of parameter space that are, in well-studied families, known analytically or numerically. Fine-tuning a forecasting network at each point of a parameter grid yields a model zoo indexed by a physical parameter, against which weight-space diagnostics can be checked. We build such model zoos for four dynamical systems and analyse them with JEPAWG, a recently proposed joint-embedding hypernetwork built around a learned parameter--weight representation. It was first introduced for neural samplers for lattice field theories, where its latent geometry located the phase transition and estimated the 2D Ising critical exponent. Applied to dynamical systems, JEPAWG is competitive on forecasting with a hypernetwork trained directly for that task, despite being supervised on the parameter--weight correspondence rather than on forecasts. Beyond forecasting, the norm of the parameter-derivative of the decoded weights locates Hopf points and curves, tracks a period-doubling cascade closely enough to give a qualitative estimate of the Feigenbaum constant, and detects a global bifurcation, which has no eigenvalue signature and is therefore invisible to linearisation. As such, JEPAWG provides interpretable insight into the dynamics that is not available from other hypernetworks. Together, these results indicate that JEPAWG is a workable instrument for reading physical structure off a population of trained networks.",
    "published": "2026-10-22T07:22:44Z",
    "updated": "2026-10-22T07:22:44Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "nlin.CD"
    ],
    "url": "https://arxiv.org/abs/2610.30847"
  }
];
